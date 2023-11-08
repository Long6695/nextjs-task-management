'use client'

import { ROUTES } from '@/constants/side-bar'
import ArrowLeftSquareIcon from '@/icons/arrow-left-square'
import ArrowRightSquareIcon from '@/icons/arrow-right-square'
import clsx from 'clsx'
import { AnimationControls, motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { Button } from '../ui/button'

const SidebarMobile = ({
  active,
  showMore,
  showLess,
  controls,
  controlText
}: {
  active: boolean
  showMore: () => any
  showLess: () => any
  controls: AnimationControls
  controlText: AnimationControls
}) => {
  useEffect(() => {
    showLess()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const pathname = usePathname()
  return (
    <motion.div
      animate={controls}
      className='relative max-w-[250px] bg-primary-0 animate duration-300 p-4 h-screen overflow-y-auto z-50'
    >
      <ul className='space-y-8'>
        {active && (
          <Button variant='ghost' onClick={showLess} className='top-0 right-4 absolute text-primary-500 cursor-pointer'>
            <ArrowLeftSquareIcon />
          </Button>
        )}
        {!active && (
          <Button variant='ghost' onClick={showMore} className='top-0 right-4 absolute text-primary-500 cursor-pointer'>
            <ArrowRightSquareIcon />
          </Button>
        )}
        <li className='text-center'>
          <h1 className='text-2xl font-semibold'>Taskly</h1>
        </li>
        {ROUTES.map((route) => {
          const Icon = route.icon
          return (
            <li
              key={route.id}
              className={clsx('text-sm font-semibold rounded-sm', {
                'bg-gray-300 text-secondary-500': route.path === pathname,
                'text-secondary-300': route.path !== pathname,
                'flex justify-center': !active
              })}
            >
              <Link href={route.path}>
                <Button variant='ghost' className='flex justify-start w-full px-4 py-2'>
                  <div>{<Icon />}</div>
                  <motion.p animate={controlText} className='text-center w-full'>
                    {route.name}
                  </motion.p>
                </Button>
              </Link>
            </li>
          )
        })}
      </ul>
      <div className='relative'>
        <div className='w-10 h-10 bg-secondary-500 absolute top-0 -translate-y-1/2 right-1/2 translate-x-1/2 rounded-full border-4 border-primary-0 shadow-sm text-xl text-primary-0 flex items-center justify-center font-semibold'>
          ?
        </div>
        <div className='flex flex-col items-center justify-center text-center text-primary-0 bg-secondary-500 space-y-4 rounded-lg py-8'>
          <p className='text-xs'>Help Center</p>
          <p className='text-xs'>Having Trouble in Learning. Please contact us for more questions.</p>
          <Button className='bg-primary-0 text-foreground'>Go to help center</Button>
        </div>
      </div>
    </motion.div>
  )
}

export default SidebarMobile
