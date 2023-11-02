'use client'
import React from 'react'
import Clerk from './clerk'

const Provider = ({ children }: { children: React.ReactNode }) => {
  return <Clerk>{children}</Clerk>
}

export default Provider
