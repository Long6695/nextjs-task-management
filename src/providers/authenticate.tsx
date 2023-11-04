'use client'
import { useSession } from 'next-auth/react'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'

export const Authenticate = ({ children }: { children: React.ReactNode }) => {
  const { status, data: session } = useSession()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if(pathname === '/') return
    switch (status) {
      case 'loading':
        break
      case 'authenticated':
        if (session?.error === 'RefreshAccessTokenError') {
          router.push('/sign-in')
          break
        }
        break
      case 'unauthenticated':
        router.push('/sign-in')
        break
    }
  }, [pathname, router, session?.error, status])

  return <>{children}</>
}

export default Authenticate
