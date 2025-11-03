import { Controller, Post, Get, Body, UseGuards, Req } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Inject } from '@nestjs/common';
import { Public, CurrentUser } from '@app/common';
import { firstValueFrom } from 'rxjs';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject('AUTH_SERVICE') private authClient: ClientProxy,
  ) {}

  @Public()
  @Post('register')
  async register(@Body() registerDto: any) {
    try {
      console.log('Gateway received registration request:', registerDto);
      const result = await firstValueFrom(
        this.authClient.send({ cmd: 'register' }, registerDto),
      );
      console.log('Gateway received response from auth service');
      return result;
    } catch (error) {
      console.error('Gateway error during registration:', error);
      // Re-throw RPC errors as HTTP exceptions
      if (error && typeof error === 'object' && 'error' in error) {
        const rpcError = error as any;
        const status = rpcError.error?.statusCode || rpcError.error?.status || 500;
        const message = rpcError.error?.message || rpcError.message || 'Internal server error';
        const HttpException = require('@nestjs/common').HttpException;
        throw new HttpException(message, status);
      }
      throw error;
    }
  }

  @Public()
  @Post('login')
  async login(@Body() loginDto: any) {
    try {
      return await firstValueFrom(
        this.authClient.send({ cmd: 'login' }, loginDto),
      );
    } catch (error) {
      if (error && typeof error === 'object' && 'error' in error) {
        const rpcError = error as any;
        const status = rpcError.error?.statusCode || rpcError.error?.status || 500;
        const message = rpcError.error?.message || rpcError.message || 'Internal server error';
        const HttpException = require('@nestjs/common').HttpException;
        throw new HttpException(message, status);
      }
      throw error;
    }
  }

  @Post('logout')
  async logout(@CurrentUser() user: any, @Body() body: any) {
    return firstValueFrom(
      this.authClient.send({ cmd: 'logout' }, { 
        userId: user.id,
        sessionId: body.sessionId 
      }),
    );
  }

  @Get('me')
  async getMe(@CurrentUser() user: any) {
    return firstValueFrom(
      this.authClient.send({ cmd: 'get_me' }, { userId: user.id }),
    );
  }

  @Post('refresh')
  async refreshToken(@CurrentUser() user: any) {
    return firstValueFrom(
      this.authClient.send({ cmd: 'refresh_token' }, { userId: user.id }),
    );
  }
}
