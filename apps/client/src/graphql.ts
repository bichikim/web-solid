// import {createClient} from '@urql/core'
// import {config} from 'src/config'
import {createGraphQLClient} from '@solid-primitives/graphql'

// export const client = createClient({
//   url: config.api.mainApiUrl,
// })

export const createQuery = createGraphQLClient('http://localhost:8080/graphql')
