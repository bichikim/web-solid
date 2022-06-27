import {CreateContext} from './types'
import * as jsonwebtoken from 'jsonwebtoken'

export interface JwtContext {
  sign: (payload: Record<string, any>, options?: jsonwebtoken.SignOptions) => Promise<string>
  verify: (token: string, options?: jsonwebtoken.VerifyOptions) => Promise<Record<string, any>>
}

export const createJwt: CreateContext<string, JwtContext> = (key) => {
  const jwt: JwtContext = Object.freeze({
    sign: (payload: any, options) =>
      new Promise<string>((resolve, reject) => {
        jsonwebtoken.sign(
          payload,
          key,
          {
            expiresIn: '1h',
            ...options,
          },
          (error, encoded) => {
            if (error) {
              return reject(error)
            }
            resolve(encoded ?? null)
          },
        )
      }),
    verify: (token: string, options?: jsonwebtoken.VerifyOptions) =>
      new Promise((resolve, reject) => {
        jsonwebtoken.verify(token, key, options, (error, decoded) => {
          if (error) {
            return reject(error)
          }
          resolve(decoded ?? null)
        })
      }),
  })
  return (): JwtContext => {
    return jwt
  }
}
