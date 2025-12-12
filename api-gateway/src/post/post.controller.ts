import { Controller, Get, Post, Delete, Param, Body, Query, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CurrentUser } from '@app/common';
import { firstValueFrom } from 'rxjs';

@Controller()
export class PostController {
  constructor(@Inject('POST_SERVICE') private postClient: ClientProxy) {}

  @Get('feed')
  async getFeed(@CurrentUser() user: any, @Query() query: any) {
    return firstValueFrom(
      this.postClient.send({ cmd: 'get_feed' }, { userId: user.id, ...query }),
    );
  }

  @Get('posts/:id')
  async getPost(@Param('id') id: string, @CurrentUser() user: any) {
    return firstValueFrom(
      this.postClient.send({ cmd: 'get_post' }, { postId: id, userId: user.id }),
    );
  }

  @Post('posts')
  async createPost(@CurrentUser() user: any, @Body() createDto: any) {
    return firstValueFrom(
      this.postClient.send({ cmd: 'create_post' }, { userId: user.id, ...createDto }),
    );
  }

  @Delete('posts/:id')
  async deletePost(@Param('id') id: string, @CurrentUser() user: any) {
    return firstValueFrom(
      this.postClient.send({ cmd: 'delete_post' }, { postId: id, userId: user.id }),
    );
  }

  @Post('posts/:id/like')
  async likePost(@Param('id') id: string, @CurrentUser() user: any) {
    return firstValueFrom(
      this.postClient.send({ cmd: 'like_post' }, { postId: id, userId: user.id }),
    );
  }

  @Delete('posts/:id/like')
  async unlikePost(@Param('id') id: string, @CurrentUser() user: any) {
    return firstValueFrom(
      this.postClient.send({ cmd: 'unlike_post' }, { postId: id, userId: user.id }),
    );
  }

  @Get('posts/:id/comments')
  async getComments(@Param('id') id: string, @Query() query: any) {
    return firstValueFrom(
      this.postClient.send({ cmd: 'get_comments' }, { postId: id, ...query }),
    );
  }

  @Post('posts/:id/comments')
  async addComment(@Param('id') id: string, @CurrentUser() user: any, @Body() body: any) {
    return firstValueFrom(
      this.postClient.send({ cmd: 'add_comment' }, { postId: id, userId: user.id, ...body }),
    );
  }
}
