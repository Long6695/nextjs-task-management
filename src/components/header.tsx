'use client'
import MenuIcon from '@/icons/menu'
import NotifBadgeIcon from '@/icons/notif-badge'
import NotificationIcon from '@/icons/notification'
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from '@radix-ui/react-menubar'
import { useAnimation } from 'framer-motion'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useState } from 'react'
import Avatar from './avatar'
import SidebarMobile from './side-bar/side-bar-mobile'
import { Button } from './ui/button'
import { MenubarSeparator } from './ui/menubar'
import { Separator } from './ui/separator'
import { Skeleton } from './ui/skeleton'

const Header = () => {
  const [active, setActive] = useState(false)
  const controls = useAnimation()
  const controlText = useAnimation()
  const { data: session, status } = useSession()
  const showMore = () => {
    controls.start({
      width: '250px',
      position: 'fixed',
      left: 0,
      top: 0,
      bottom: 0,
      transition: { duration: 0.001 },
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    })
    controlText.start({
      opacity: 1,
      display: 'block',
      transition: { delay: 0.3 }
    })

    setActive(true)
  }

  const showLess = () => {
    controls.start({
      width: '0px',
      display: 'none',
      transition: { duration: 0.001 }
    })

    controlText.start({
      opacity: 0,
      display: 'none'
    })

    setActive(false)
  }
  return (
    <>
      <div className='lg:hidden'>
        <SidebarMobile
          controls={controls}
          controlText={controlText}
          active={active}
          showMore={showMore}
          showLess={showLess}
        />
      </div>
      <nav className='flex justify-between items-center p-5 flex-1'>
        {session?.user?.name ? (
          <div className='hidden lg:inline-block'>
            <h2 className='text-2xl font-semibold text-secondary-500'>{`Hi ${session?.user?.name}`}</h2>
            <p className='text-base font-medium text-secondary-400'>Let&apos;s finish your task today!</p>
          </div>
        ) : (
          <div className='hidden lg:block lg:space-y-2'>
            <Skeleton className='h-6 w-[250px]' />
            <Skeleton className='h-6 w-[200px]' />
          </div>
        )}

        <Button variant='ghost' className='border-gray-300 border rounded-full p-2 lg:hidden' onClick={showMore}>
          <MenuIcon />
        </Button>
        <div className='flex items-center justify-end space-x-4 flex-1'>
          {status === 'loading' && <Skeleton className='h-12 w-12 rounded-full' />}
          {status === 'authenticated' && (
            <>
              <div className='relative border-gray-200 border rounded-full p-2'>
                <NotificationIcon />
                <div className='absolute top-0 right-0'>
                  <NotifBadgeIcon />
                </div>
              </div>
              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger>
                    <Avatar size={50} />
                  </MenubarTrigger>
                  <MenubarContent>
                    <MenubarSeparator />
                    <MenubarItem className='focus-visible:outline-none'>
                      <Button onClick={() => signOut()}>Sign out</Button>
                    </MenubarItem>
                    <MenubarSeparator />
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            </>
          )}
          {status === 'unauthenticated' && <Button onClick={() => signIn('google')}>Sign in</Button>}
        </div>
      </nav>
      <Separator className='border-b-2 border-secondary-100 lg:hidden' />
    </>
  )
}

export default Header
