import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/global.css'
import Provider from '@/providers'
import Header from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Task Management',
  description: 'Created by Long Thai',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  )
}
