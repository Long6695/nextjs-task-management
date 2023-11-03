'use client'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export const Authenticate = ({ children }: { children: React.ReactNode }) => {
  const { status, data: session } = useSession()
  const router = useRouter()

  useEffect(() => {
    switch (status) {
      case 'loading':
        break
      case 'authenticated':
        if (session?.error === 'RefreshAccessTokenError') {
          signIn('google') // Force sign in to hopefully resolve error
          break
        }
        break
      case 'unauthenticated':
        router.push('/sign-in')
        break
    }
  }, [router, session?.error, status])

  return <>{children}</>
}

export default Authenticate
