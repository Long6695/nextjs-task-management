import { type ClassValue, clsx } from 'clsx'
import { cache } from 'react'
import { QueryClient } from 'react-query'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getQueryClient = cache(
  () =>
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnMount: false,
          refetchOnWindowFocus: false,
          refetchOnReconnect: false,
          retry: false,
        },
      },
    })
)
