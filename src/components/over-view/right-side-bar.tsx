'use client'
import { ChevronLeft, ChevronRight, Clock4 } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Avatar from '../avatar'
import { Progress } from '../ui/progress'
import { Separator } from '../ui/separator'
import { Button } from '../ui/button'
import { clsx } from 'clsx'
import useWindowDimensions from '@/hooks/useWindowDimensions'

const RightSidebar = () => {
  const { isDesktop } = useWindowDimensions()
  return (
    <div className='space-y-4'>
      <div className='bg-primary-0 rounded-lg shadow-lg p-2'>
        <div className='flex justify-between items-center'>
          <ChevronLeft className='w-6 h-6' />
          <p className='text-secondary-500 text-sm font-semibold'>July 2023</p>
          <ChevronRight className='w-6 h-6' />
        </div>
        <div className='flex items-center justify-center space-x-2 mt-4'>
          <div className='flex items-center text-secondary-500'>
            <div className='flex flex-col items-center justify-center rounded-full w-9 h-16 space-y-2'>
              <p className='text-xs font-semibold'>S</p>
              <div className='flex items-center justify-center w-7 h-7 rounded-full bg-secondary-100'>
                <p className='text-xs font-semibold'>6</p>
              </div>
            </div>
          </div>
          <div className='flex items-center text-primary-0'>
            <div className='flex flex-col items-center justify-center bg-secondary-500 rounded-full w-9 h-16 space-y-2'>
              <p className='text-xs font-semibold'>M</p>
              <div className='flex items-center justify-center w-7 h-7 rounded-full bg-primary-500'>
                <p className='text-xs font-semibold'>7</p>
              </div>
            </div>
          </div>
          <div className='flex items-center text-secondary-500'>
            <div className='flex flex-col items-center justify-center rounded-full w-9 h-16 space-y-2'>
              <p className='text-xs font-semibold'>T</p>
              <div className='flex items-center justify-center w-7 h-7 rounded-full bg-secondary-100'>
                <p className='text-xs font-semibold'>8</p>
              </div>
            </div>
          </div>
          <div className='flex items-center text-secondary-500'>
            <div className='flex flex-col items-center justify-center rounded-full w-9 h-16 space-y-2'>
              <p className='text-xs font-semibold'>W</p>
              <div className='flex items-center justify-center w-7 h-7 rounded-full bg-secondary-100'>
                <p className='text-xs font-semibold'>9</p>
              </div>
            </div>
          </div>
          <div className='flex items-center text-secondary-500'>
            <div className='flex flex-col items-center justify-center rounded-full w-9 h-16 space-y-2'>
              <p className='text-xs font-semibold'>T</p>
              <div className='flex items-center justify-center w-7 h-7 rounded-full bg-secondary-100'>
                <p className='text-xs font-semibold'>10</p>
              </div>
            </div>
          </div>
          <div className='flex items-center text-secondary-500'>
            <div className='flex flex-col items-center justify-center rounded-full w-9 h-16 space-y-2'>
              <p className='text-xs font-semibold'>F</p>
              <div className='flex items-center justify-center w-7 h-7 rounded-full bg-secondary-100'>
                <p className='text-xs font-semibold'>11</p>
              </div>
            </div>
          </div>
          <div className='flex items-center text-secondary-500'>
            <div className='flex flex-col items-center justify-center rounded-full w-9 h-16 space-y-2'>
              <p className='text-xs font-semibold'>S</p>
              <div className='flex items-center justify-center w-7 h-7 rounded-full bg-secondary-100'>
                <p className='text-xs font-semibold'>12</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='p-4 bg-primary-0 rounded-lg shadow-md'>
        <div className='relative w-full h-40 rounded-lg mb-2'>
          <Image
            src='/image.png'
            alt='picture'
            fill
            className={clsx({
              'object-fill': isDesktop,
              'object-contain': !isDesktop
            })}
          />
        </div>
        <div>
          <p className='text-secondary-600 text-base font-semibold'>Creating Mobile App Design</p>
          <p className='text-secondary-400 text-sm'>Frontend</p>
        </div>
        <div className='flex items-center justify-between my-4'>
          <p className='text-secondary-500 text-base font-medium'>Progress</p>
          <p className='text-primary-500 font-medium text-sm'>90%</p>
        </div>
        <Progress value={90} />
        <div className='flex items-center justify-between mt-4'>
          <div className='flex items-center space-x-2'>
            <Clock4 className='text-secondary-500' />
            <p className='text-secondary-500 text-base font-medium'>1 Hour</p>
          </div>
          <div className='flex items-center -space-x-4'>
            <Avatar />
            <Avatar />
            <Avatar />
          </div>
        </div>
        <Separator className='my-4' />
        <div>
          <div className='flex items-center justify-between'>
            <p className='text-secondary-500 font-semibold'>Detail Task</p>
            <p className='text-secondary-400 font-medium'>UI/UX Designer</p>
          </div>
          <div className='space-y-4 mt-4'>
            <div className='flex justify-start items-center rounded-lg'>
              <div className='flex items-center justify-center w-8 h-8 bg-secondary-100'>
                <p className='text-sm text-secondary-500 font-semibold'>1</p>
              </div>
              <p className='text-secondary-500 font-medium text-sm ml-4'>Understanding the tools in Figma</p>
            </div>
            <div className='flex justify-start items-center rounded-lg'>
              <div className='flex items-center justify-center w-8 h-8 bg-secondary-100'>
                <p className='text-sm text-secondary-500 font-semibold'>2</p>
              </div>
              <p className='text-secondary-500 font-medium text-sm ml-4'>Understand the basics of making designs</p>
            </div>
            <div className='flex justify-start items-center rounded-lg'>
              <div className='flex items-center justify-center w-8 h-8 bg-secondary-100'>
                <p className='text-sm text-secondary-500 font-semibold'>3</p>
              </div>
              <p className='text-secondary-500 font-medium text-sm ml-4'>Design a mobile application with figma</p>
            </div>
          </div>
        </div>
        <Button className='w-full mt-8'>Go to detail</Button>
      </div>
    </div>
  )
}

export default RightSidebar
