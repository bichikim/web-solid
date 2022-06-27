import {Authorized, Ctx, Query, Resolver} from 'type-graphql'

@Resolver()
export class HelloResolver {
  @Query(() => String)
  async hello() {
    return 'hello world'
  }

  @Authorized()
  @Query(() => String, {nullable: true})
  async whoAmI(@Ctx() {user}): Promise<string | null> {
    return user?.email ?? null
  }
}
