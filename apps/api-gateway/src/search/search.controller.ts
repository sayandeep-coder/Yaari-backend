import { Controller, Get, Query, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CurrentUser } from '@app/common';
import { firstValueFrom } from 'rxjs';

@Controller('search')
export class SearchController {
  constructor(@Inject('SEARCH_SERVICE') private searchClient: ClientProxy) {}

  @Get()
  async search(@Query('q') query: string, @CurrentUser() user: any, @Query() params: any) {
    return firstValueFrom(
      this.searchClient.send({ cmd: 'search' }, { query, userId: user?.id, ...params }),
    );
  }
}
