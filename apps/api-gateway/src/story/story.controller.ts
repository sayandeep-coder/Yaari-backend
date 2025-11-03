import { Controller, Get, Post, Param, Body, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CurrentUser } from '@app/common';
import { firstValueFrom } from 'rxjs';

@Controller('stories')
export class StoryController {
  constructor(@Inject('STORY_SERVICE') private storyClient: ClientProxy) {}

  @Get('home')
  async getStories(@CurrentUser() user: any) {
    return firstValueFrom(
      this.storyClient.send({ cmd: 'get_stories' }, { userId: user.id }),
    );
  }

  @Post()
  async createStory(@CurrentUser() user: any, @Body() createDto: any) {
    return firstValueFrom(
      this.storyClient.send({ cmd: 'create_story' }, { userId: user.id, ...createDto }),
    );
  }

  @Post(':id/view')
  async viewStory(@Param('id') id: string, @CurrentUser() user: any) {
    return firstValueFrom(
      this.storyClient.send({ cmd: 'view_story' }, { storyId: id, userId: user.id }),
    );
  }
}
