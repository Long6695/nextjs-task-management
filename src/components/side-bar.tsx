'use client'

import { ROUTES } from '@/constants/side-bar'
import ArrowLeftSquareIcon from '@/icons/arrow-left-square'
import ArrowRightSquareIcon from '@/icons/arrow-right-square'
import clsx from 'clsx'
import { motion, useAnimation } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Button } from './ui/button'

const Sidebar = () => {
  const [active, setActive] = useState(false)
  const controls = useAnimation()
  const controlText = useAnimation()
  const showMore = () => {
    controls.start({
      width: '250px',
      transition: { duration: 0.001 }
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
      width: '100px',
      transition: { duration: 0.001 }
    })

    controlText.start({
      opacity: 0,
      display: 'none'
    })

    setActive(false)
  }

  useEffect(() => {
    showMore()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const pathname = usePathname()
  return (
    <motion.div animate={controls} className={clsx('max-w-[250px] bg-primary-0 animate duration-300 relative')}>
      <ul className='p-4 space-y-8'>
        {active && (
          <Button
            variant='ghost'
            onClick={showLess}
            className='top-0 -right-4 absolute text-2xl text-primary-500 cursor-pointer lg:block'
          >
            <ArrowLeftSquareIcon />
          </Button>
        )}
        {!active && (
          <Button
            variant='ghost'
            onClick={showMore}
            className='top-0 -right-4 absolute text-2xl text-primary-500 cursor-pointer lg:block'
          >
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
    </motion.div>
  )
}

export default Sidebar
