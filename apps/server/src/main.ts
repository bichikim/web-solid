import 'reflect-metadata'
import {createApp} from 'src/app'
import {authChecker} from 'src/auth-checker'
import {createContextFunction} from 'src/context'
import {dataSource} from 'src/data-source'
import {resolvers} from 'src/graphql'
import {config} from './config'

const bootstrap = async () => {
  await dataSource.initialize()
  const app = await createApp({
    authChecker,
    context: createContextFunction({
      jwt: {
        key: config.jwt.key,
      },
    }),
    resolvers,
  })

  if (import.meta.env.PROD) {
    app.listen(config.port)
    console.log(`listening on http://localhost:${config.port}/`)
  }

  return app
}

export const viteNodeApp = import.meta.env.PROD ? bootstrap() : await bootstrap()
