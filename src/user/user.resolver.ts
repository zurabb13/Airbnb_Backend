import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { of } from 'rxjs';
import { User } from '../schema/user.schema';
import { UserService } from './user.service';
import { UpdateUser } from 'src/entity/update.user.entity';
import { CreateUser } from 'src/entity/create.user.entity';

@Resolver()
export class UserResolver {
  constructor(private service: UserService) {}

  @Query(() => [User])
  async user(): Promise<User[]> {
    return this.service.getAll();
  }

  @Query(() => User)
  async userById(@Args('id') id: string): Promise<User> {
    return this.service.getById(id);
  }

  @Mutation(() => User)
  async createUser(@Args('createUser') user: CreateUser): Promise<User> {
    return this.service.create(user);
  }
  @Mutation(() => User)
  async update(
    @Args('id') id: string,
    @Args('UpdateUser') user: UpdateUser,
  ): Promise<User> {
    return this.service.update(id, user);
  }

  @Mutation(() => User)
  async delete(@Args('id') id: string): Promise<User> {
    return this.service.delete(id);
  }
}
