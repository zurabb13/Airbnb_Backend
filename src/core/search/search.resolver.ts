import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Search } from '../schema/search.schema';
import { SearchService } from './search.service';
import { SearchEntity } from '../entity/search.entity';

@Resolver()
export class SearchResolver {
  constructor(private service: SearchService) {}

  @Query(() => [Search])
  async getAllSearch(): Promise<Search[]> {
    return this.service.getAll();
  }

  @Query(() => Search)
  async searchById(@Args('id') id: string): Promise<Search> {
    return this.service.searchById(id);
  }
  @Mutation(() => Search)
  async createSearch(@Args('search') search: SearchEntity): Promise<Search> {
    return this.service.create(search);
  }

  @Mutation(() => Search)
  async updateSearch(
    @Args('id') id: string,
    @Args('search') search: SearchEntity,
  ): Promise<Search> {
    return this.service.update(id, search);
  }

  @Mutation(() => Search)
  async deleteSearch(@Args('id') id: string): Promise<Search> {
    return this.service.delete(id);
  }
}
