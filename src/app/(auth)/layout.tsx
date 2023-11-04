'use client'
import { useSession } from 'next-auth/react'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { status, data: session } = useSession()
  if (status === 'loading' || status === 'authenticated') {
    return <p>Loading...</p>
  }
  return <div>{children}</div>
}

export default Layout
