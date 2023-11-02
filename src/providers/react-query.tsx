import { getQueryClient } from '@/lib/utils'
import React from 'react'
import { QueryClientProvider } from 'react-query'

const ReactQuery = ({ children }: { children: React.ReactNode }) => {
  const queryClient = getQueryClient()
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default ReactQuery
