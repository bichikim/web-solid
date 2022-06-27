import {HelloResolver} from './resolvers/hello/Hello.resolver'
import {UserResolver} from './resolvers/user/User.resolver'
import {AuthResolver} from './resolvers/auth/Auth.resolver'

export const resolvers: NonEmptyArray<AnyClass> = [HelloResolver, UserResolver, AuthResolver]
