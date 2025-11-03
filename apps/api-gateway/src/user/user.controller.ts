import { Controller, Get, Patch, Post, Delete, Param, Body, Query, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CurrentUser } from '@app/common';
import { firstValueFrom } from 'rxjs';

@Controller('users')
export class UserController {
  constructor(@Inject('USER_SERVICE') private userClient: ClientProxy) {}

  @Get(':username')
  async getUserProfile(@Param('username') username: string, @CurrentUser() user: any) {
    return firstValueFrom(
      this.userClient.send({ cmd: 'get_profile' }, { username, currentUserId: user?.id }),
    );
  }

  @Patch('me')
  async updateProfile(@CurrentUser() user: any, @Body() updateDto: any) {
    return firstValueFrom(
      this.userClient.send({ cmd: 'update_profile' }, { userId: user.id, ...updateDto }),
    );
  }

  @Get(':username/followers')
  async getFollowers(@Param('username') username: string, @Query() query: any) {
    return firstValueFrom(
      this.userClient.send({ cmd: 'get_followers' }, { username, ...query }),
    );
  }

  @Get(':username/following')
  async getFollowing(@Param('username') username: string, @Query() query: any) {
    return firstValueFrom(
      this.userClient.send({ cmd: 'get_following' }, { username, ...query }),
    );
  }

  @Post(':username/follow')
  async followUser(@Param('username') username: string, @CurrentUser() user: any) {
    return firstValueFrom(
      this.userClient.send({ cmd: 'follow_user' }, { username, userId: user.id }),
    );
  }

  @Delete(':username/follow')
  async unfollowUser(@Param('username') username: string, @CurrentUser() user: any) {
    return firstValueFrom(
      this.userClient.send({ cmd: 'unfollow_user' }, { username, userId: user.id }),
    );
  }
}
