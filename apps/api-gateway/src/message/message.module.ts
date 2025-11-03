import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MessageController } from './message.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MESSAGE_SERVICE',
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: parseInt(process.env.MESSAGE_SERVICE_PORT) || 3005,
        },
      },
    ]),
  ],
  controllers: [MessageController],
})
export class MessageModule {}
