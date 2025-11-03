import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AuthService } from './auth.service';
import { RegisterDto, LoginDto } from './dto';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @MessagePattern({ cmd: 'register' })
  async register(@Payload() registerDto: RegisterDto) {
    try {
      console.log('Auth service received registration request:', registerDto);
      const result = await this.authService.register(registerDto);
      console.log('Auth service registration successful');
      return result;
    } catch (error) {
      console.error('Auth service registration error:', error);
      throw error;
    }
  }

  @MessagePattern({ cmd: 'login' })
  async login(@Payload() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @MessagePattern({ cmd: 'logout' })
  async logout(@Payload() data: { userId: string; sessionId?: string }) {
    return this.authService.logout(data.userId, data.sessionId);
  }

  @MessagePattern({ cmd: 'validate_token' })
  async validateToken(@Payload() data: { token: string }) {
    return this.authService.validateToken(data.token);
  }

  @MessagePattern({ cmd: 'get_me' })
  async getMe(@Payload() data: { userId: string }) {
    return this.authService.getMe(data.userId);
  }

  @MessagePattern({ cmd: 'refresh_token' })
  async refreshToken(@Payload() data: { userId: string }) {
    return this.authService.refreshToken(data.userId);
  }
}
