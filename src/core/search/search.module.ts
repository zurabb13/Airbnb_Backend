import { Module } from '@nestjs/common';
import { SearchResolver } from './search.resolver';
import { SearchService } from './search.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Search, SearchSchema } from '../schema/search.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Search.name, schema: SearchSchema }]),
  ],
  providers: [SearchResolver, SearchService],
  exports: [SearchResolver],
})
export class SearchModule {}
