'use client'
import { useSession } from 'next-auth/react'
import React from 'react'

const AuthenticatedPage = () => {
  const { status } = useSession()
  switch (status) {
    case 'loading':
    case 'unauthenticated':
      return <p>Loading...</p>
  }

  return <div>Home</div>
}

export default AuthenticatedPage
