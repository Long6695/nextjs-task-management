import { ClerkLoaded, ClerkLoading, ClerkProvider } from '@clerk/nextjs'
import React from 'react'

const Clerk = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <ClerkLoading>
        <div>Clerk is loading</div>
      </ClerkLoading>
      <ClerkLoaded>{children}</ClerkLoaded>
    </ClerkProvider>
  )
}

export default Clerk
