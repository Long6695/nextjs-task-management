import { DefaultSession } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import { Session } from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user?: {
      email: string
      image: string
      name: string
    }
    accessToken?: string
    error?: string
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    user?: {
      email: string
      image: string
      name: string
    }
    accessTokenExpires?: number
    accessToken?: string
    refreshToken?: string
    error?: string
  }
}
