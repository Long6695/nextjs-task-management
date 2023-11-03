import Header from '@/components/header'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import '../styles/global.css'
import Authenticate from '@/providers/authenticate'
import ReactQueryProvider from '@/providers/react-query'
import Session from '@/providers/session'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Task Management',
  description: 'Created by Long Thai'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Session>
          <ReactQueryProvider>
            <Authenticate>
              <Header />
              {children}
            </Authenticate>
          </ReactQueryProvider>
        </Session>
      </body>
    </html>
  )
}
