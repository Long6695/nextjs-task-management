import { SignedIn, UserButton, SignedOut, SignInButton } from '@clerk/nextjs'
import React from 'react'
import { Button } from './ui/button'

const Header = () => {
  return (
    <header className='flex justify-between p-5'>
      <h1>Logo</h1>
      <SignedIn>
        <UserButton afterSignOutUrl={process.env.NEXT_PUBLIC_APP_URL} />
      </SignedIn>
      <SignedOut>
        <SignInButton>
          <Button>Sign in</Button>
        </SignInButton>
      </SignedOut>
    </header>
  )
}

export default Header
