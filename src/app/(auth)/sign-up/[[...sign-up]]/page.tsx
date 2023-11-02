import React from 'react'
import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <SignUp
      appearance={{
        elements: {
          formButtonPrimary: 'bg-primary text-primary-foreground',
        },
      }}
    />
  )
}
