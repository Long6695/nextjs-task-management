'use client'
import Header from '@/components/header'
import { useSession } from 'next-auth/react'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { data: session } = useSession()
  if (!session) {
    return <p>Loading...</p>
  }
  return <div>{children}</div>
}

export default Layout
