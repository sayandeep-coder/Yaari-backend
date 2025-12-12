import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { StoryController } from './story.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'STORY_SERVICE',
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: parseInt(process.env.STORY_SERVICE_PORT) || 3004,
        },
      },
    ]),
  ],
  controllers: [StoryController],
})
export class StoryModule {}
