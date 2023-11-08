import Header from '@/components/header'
import Sidebar from '@/components/side-bar/side-bar'
import Authenticate from '@/providers/authenticate'
import ReactQueryProvider from '@/providers/react-query'
import Session from '@/providers/session'
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import React from 'react'
import '../styles/global.css'
import 'pure-react-carousel/dist/react-carousel.es.css'
import RightSidebar from '@/components/over-view/right-side-bar'

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
                <div className='xl:hidden'>
                  <Header />
                </div>
                <div className='xl:flex'>
                  <div className='hidden xl:block'>
                    <Sidebar />
                  </div>
                  <div className='xl:flex-1 overflow-auto'>
                    <div className='hidden xl:block'>
                      <Header />
                    </div>
                    {children}
                  </div>
                  <div className='xl:w-96 p-4'>
                    <RightSidebar />
                  </div>
                </div>
              </div>
            </Authenticate>
          </ReactQueryProvider>
        </Session>
      </body>
    </html>
  )
}
