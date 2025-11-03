import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { SearchController } from './search.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SEARCH_SERVICE',
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: parseInt(process.env.SEARCH_SERVICE_PORT) || 3007,
        },
      },
    ]),
  ],
  controllers: [SearchController],
})
export class SearchModule {}
