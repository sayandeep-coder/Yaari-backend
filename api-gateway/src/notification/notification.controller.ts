import { Controller, Get, Post, Param, Query, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CurrentUser } from '@app/common';
import { firstValueFrom } from 'rxjs';

@Controller('notifications')
export class NotificationController {
  constructor(@Inject('NOTIFICATION_SERVICE') private notificationClient: ClientProxy) {}

  @Get()
  async getNotifications(@CurrentUser() user: any, @Query() query: any) {
    return firstValueFrom(
      this.notificationClient.send({ cmd: 'get_notifications' }, { userId: user.id, ...query }),
    );
  }

  @Post(':id/read')
  async markAsRead(@Param('id') id: string, @CurrentUser() user: any) {
    return firstValueFrom(
      this.notificationClient.send({ cmd: 'mark_as_read' }, { notificationId: id, userId: user.id }),
    );
  }
}
