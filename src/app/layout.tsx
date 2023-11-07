import Header from '@/components/header'
import Sidebar from '@/components/side-bar/side-bar'
import Authenticate from '@/providers/authenticate'
import ReactQueryProvider from '@/providers/react-query'
import Session from '@/providers/session'
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import React from 'react'
import '../styles/global.css'

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export const metadata: Metadata = {
  title: 'Task Management',
  description: 'Created by Long Thai'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={plusJakartaSans.className}>
        <Session>
          <ReactQueryProvider>
            <Authenticate>
              <div>
                <div className='lg:hidden'>
                  <Header />
                </div>
                <div className='lg:flex'>
                  <div className='hidden lg:block'>
                    <Sidebar />
                  </div>
                  <div className='lg:flex-1'>
                    <div className='hidden lg:block'>
                      <Header />
                    </div>
                    {children}
                  </div>
                  <div className='lg:max-w-sm'>Sidebar</div>
                </div>
              </div>
            </Authenticate>
          </ReactQueryProvider>
        </Session>
      </body>
    </html>
  )
}
