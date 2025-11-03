import {
  Injectable,
  UnauthorizedException,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '@app/prisma';
import { RedisService } from '@app/redis';
import { HashUtil } from '@app/common';
import { RegisterDto, LoginDto } from './dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private redis: RedisService,
  ) {}

  async register(registerDto: RegisterDto) {
    try {
      const { email, username, password, fullName } = registerDto;

      // Check if user exists
      const existingUser = await this.prisma.user.findFirst({
        where: {
          OR: [{ email }, { username }],
        },
      });

      if (existingUser) {
        throw new RpcException({
          statusCode: 409,
          message: 'Email or username already exists',
        });
      }

      // Hash password
      const passwordHash = await HashUtil.hash(password);

      // Create user
      const user = await this.prisma.user.create({
        data: {
          email,
          username,
          passwordHash,
          fullName,
        },
        select: {
          id: true,
          email: true,
          username: true,
          fullName: true,
          bio: true,
          avatarUrl: true,
          websiteUrl: true,
          isVerified: true,
          isPrivate: true,
          createdAt: true,
        },
      });

      // Generate tokens
      const tokens = await this.generateTokens(user.id, user.username, user.email);

      // Create session
      await this.createSession(user.id, tokens.sessionId);

      return {
        user,
        ...tokens,
      };
    } catch (error) {
      if (error instanceof RpcException) {
        throw error;
      }
      // Handle Prisma unique constraint violation (email/username)
      if ((error as any)?.code === 'P2002') {
        throw new RpcException({
          statusCode: 409,
          message: 'Email or username already exists',
        });
      }
      throw new RpcException({
        statusCode: 500,
        message: (error as any)?.message || 'Registration failed',
      });
    }
  }

  async login(loginDto: LoginDto) {
    try {
      const { emailOrUsername, password } = loginDto;

      // Find user
      const user = await this.prisma.user.findFirst({
        where: {
          OR: [{ email: emailOrUsername }, { username: emailOrUsername }],
        },
      });

      if (!user) {
        throw new RpcException({
          statusCode: 401,
          message: 'Invalid credentials',
        });
      }

      // Verify password
      const isPasswordValid = await HashUtil.compare(password, user.passwordHash);
      if (!isPasswordValid) {
        throw new RpcException({
          statusCode: 401,
          message: 'Invalid credentials',
        });
      }

      // Generate tokens
      const tokens = await this.generateTokens(user.id, user.username, user.email);

      // Create session
      await this.createSession(user.id, tokens.sessionId);

      return {
        user: {
          id: user.id,
          email: user.email,
          username: user.username,
          fullName: user.fullName,
          bio: user.bio,
          avatarUrl: user.avatarUrl,
          websiteUrl: user.websiteUrl,
          isVerified: user.isVerified,
          isPrivate: user.isPrivate,
          createdAt: user.createdAt,
        },
        ...tokens,
      };
    } catch (error) {
      if (error instanceof RpcException) {
        throw error;
      }
      throw new RpcException({
        statusCode: 500,
        message: error.message || 'Login failed',
      });
    }
  }

  async logout(userId: string, sessionId?: string) {
    if (sessionId) {
      // Delete specific session
      await this.prisma.session.deleteMany({
        where: { id: sessionId, userId },
      });
      await this.redis.del(`session:${sessionId}`);
    } else {
      // Delete all sessions for user
      const sessions = await this.prisma.session.findMany({
        where: { userId },
      });
      
      for (const session of sessions) {
        await this.redis.del(`session:${session.id}`);
      }
      
      await this.prisma.session.deleteMany({
        where: { userId },
      });
    }

    return { message: 'Logged out successfully' };
  }

  async validateToken(token: string) {
    try {
      const payload = this.jwtService.verify(token);
      
      // Check if session exists in Redis
      const sessionExists = await this.redis.exists(`session:${payload.sessionId}`);
      if (!sessionExists) {
        throw new UnauthorizedException('Session expired');
      }

      return payload;
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
  }

  async getMe(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        username: true,
        fullName: true,
        bio: true,
        avatarUrl: true,
        websiteUrl: true,
        isVerified: true,
        isPrivate: true,
        createdAt: true,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async refreshToken(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    return this.generateTokens(user.id, user.username, user.email);
  }

  private async generateTokens(userId: string, username: string, email: string) {
    const sessionId = this.generateSessionId();
    
    const payload = {
      sub: userId,
      username,
      email,
      sessionId,
    };

    const accessToken = this.jwtService.sign(payload);

    return {
      accessToken,
      sessionId,
    };
  }

  private async createSession(userId: string, sessionId: string) {
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7); // 7 days

    // Store in database
    await this.prisma.session.create({
      data: {
        id: sessionId,
        userId,
        expiresAt,
      },
    });

    // Store in Redis for fast lookup
    try {
      await this.redis.setJson(
        `session:${sessionId}`,
        { userId, expiresAt },
        7 * 24 * 60 * 60, // 7 days in seconds
      );
    } catch (err) {
      // Do not fail the request if Redis is temporarily unavailable
      // Session still exists in the DB; Redis will be a best-effort cache
      console.warn('Redis setJson failed for session:', sessionId, err);
    }
  }

  private generateSessionId(): string {
    return uuidv4();
  }
}
