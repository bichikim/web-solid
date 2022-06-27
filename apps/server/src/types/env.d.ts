/// <reference types="vite/client" />
// noinspection JSFileReferences

interface ImportMetaEnv {
  BASE_URL: string
  MODE?: string
  PROD?: boolean
  SSR?: boolean
  VITE_DB_DATABASE?: string
  VITE_DB_HOST?: string
  VITE_DB_PASSWORD?: string
  VITE_DB_USERNAME?: string
  VITE_JWT_KEY?: string
  VITE_PORT?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
