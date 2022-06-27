const {freeze} = Object

export const config = freeze({
  db: freeze({
    database: process.env.DB_DATABASE ?? import.meta.env.VITE_DB_DATABASE ?? 'main',
    host: process.env.DB_HOST ?? import.meta.env.VITE_DB_HOST,
    password: process.env.DB_PASSWORD ?? import.meta.env.VITE_DB_PASSWORD,
    synchronize: process.env.VITE_NODE_ENV !== 'production',
    username: process.env.DB_USERNAME ?? import.meta.env.VITE_DB_USERNAME ?? 'root',
  }),
  jwt: freeze({
    key: process.env.JWT_KEY ?? import.meta.env.VITE_JWT_KEY ?? 'jwt-secret',
  }),
  port: process.env.PORT ?? import.meta.env.VITE_PORT,
})
