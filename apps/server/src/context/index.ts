import {ContextFunction} from 'apollo-server-core'
import {ExpressContext} from 'apollo-server-express'
import {createJwt, JwtContext} from './jwt'
import {createRequestInfo, RequestInfoContext} from './request-info'

export interface Context<User extends Record<string, any> = Record<string, any>> {
  jwt: JwtContext
  requestInfo: RequestInfoContext
  user?: User
}

export interface CreateContextFunctionOptions {
  jwt: {
    key: string
  }
}

export const createContextFunction = (
  options: CreateContextFunctionOptions,
): ContextFunction<ExpressContext, Context> => {
  const jwtFactory = createJwt(options.jwt.key)
  const requestInfo = createRequestInfo()
  return async (expressContext: ExpressContext): Promise<Context> => {
    return {
      jwt: await jwtFactory(expressContext),
      requestInfo: await requestInfo(expressContext),
    }
  }
}
