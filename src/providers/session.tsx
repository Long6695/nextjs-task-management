'use client'
import { SessionProvider } from 'next-auth/react'
import React from 'react'

const Session = ({ children }: { children: React.ReactNode }) => {
  const refetchIntervalSeconds = 60 * 4
  return <SessionProvider refetchInterval={refetchIntervalSeconds}>{children}</SessionProvider>
}

export default Session
