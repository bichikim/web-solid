import {CreateContext} from './types'
import {unwrapBearerToken} from './unwrap-bearer-token'

export interface RequestInfoContext {
  jwtToken?: string
}

export const createRequestInfo: CreateContext<undefined, RequestInfoContext> = () => {
  return (expressContext) => {
    const {req} = expressContext

    const {
      headers: {authorization},
    } = req

    return {
      jwtToken: unwrapBearerToken(
        Array.isArray(authorization) ? authorization.join('') : authorization,
      ),
    }
  }
}
