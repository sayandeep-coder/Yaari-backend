import { Controller, Get, Post, Param, Body, Query, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CurrentUser } from '@app/common';
import { firstValueFrom } from 'rxjs';

@Controller('conversations')
export class MessageController {
  constructor(@Inject('MESSAGE_SERVICE') private messageClient: ClientProxy) {}

  @Get()
  async getConversations(@CurrentUser() user: any, @Query() query: any) {
    return firstValueFrom(
      this.messageClient.send({ cmd: 'get_conversations' }, { userId: user.id, ...query }),
    );
  }

  @Post()
  async createConversation(@CurrentUser() user: any, @Body() body: any) {
    return firstValueFrom(
      this.messageClient.send({ cmd: 'create_conversation' }, { userId: user.id, ...body }),
    );
  }

  @Get(':id/messages')
  async getMessages(@Param('id') id: string, @Query() query: any) {
    return firstValueFrom(
      this.messageClient.send({ cmd: 'get_messages' }, { conversationId: id, ...query }),
    );
  }

  @Post(':id/messages')
  async sendMessage(@Param('id') id: string, @CurrentUser() user: any, @Body() body: any) {
    return firstValueFrom(
      this.messageClient.send({ cmd: 'send_message' }, { conversationId: id, userId: user.id, ...body }),
    );
  }
}
