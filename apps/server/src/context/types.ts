import {ExpressContext} from 'apollo-server-express'

export type CreateContext<Options, Context> = (
  options?: Options,
) => (expressContext: ExpressContext) => Context | Promise<Context>
