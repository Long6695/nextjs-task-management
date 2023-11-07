'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { status, data: session } = useSession()
  const router = useRouter()
  if (status === 'loading' || status === 'authenticated') {
    router.push('/')
    return <p>Loading...</p>
  }
  return <div>{children}</div>
}

export default Layout
