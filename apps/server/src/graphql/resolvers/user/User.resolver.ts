import {InjectRepository} from 'src/data-source'
import {User} from 'src/entities'
import {Query, Resolver} from 'type-graphql'
import {Service} from 'typedi'
import {Repository} from 'typeorm'

@Service()
@Resolver()
export class UserResolver {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {
    //
  }

  @Query(() => [User])
  async users() {
    return this.userRepository.find()
  }
}
