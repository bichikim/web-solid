export const unwrapBearerToken = (token?: string) => {
  return token ? token.replace(/^Bearer /u, '') : token
}
