import React from 'react'
import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <SignIn
      appearance={{
        elements: {
          formButtonPrimary: 'bg-primary text-primary-foreground',
        },
      }}
    />
  )
}
