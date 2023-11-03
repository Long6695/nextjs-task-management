'use client'

import { getQueryClient } from '@/lib/utils'
import React from 'react'
import { QueryClientProvider } from 'react-query'

const ReactQueryProvider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = getQueryClient()
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default ReactQueryProvider
