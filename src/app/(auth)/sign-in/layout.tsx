'use client'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { status, data: session } = useSession()
  const router = useRouter()

  useEffect(() => {
    switch (status) {
      case 'unauthenticated':
        signIn('google')
        break
      case 'authenticated':
        router.push('/tasks')
        break
    }
  }, [router, status])

  return <div>{children}</div>
}

export default Layout
