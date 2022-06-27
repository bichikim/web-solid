declare namespace NodeJS {
  interface ProcessEnv {
    AWS_ACCESS_KEY_ID: string
    AWS_MESSAGE_QUEUE_URL: string
    AWS_SECRET_ACCESS_KEY: string
    NODE_ENV: string
  }
}
