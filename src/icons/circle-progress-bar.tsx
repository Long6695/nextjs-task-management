import { cn } from '@/lib/utils'
import React, { HTMLAttributes } from 'react'

interface CircleProgressBarIconProps extends HTMLAttributes<HTMLDivElement> {
  percentage: number
}

const CircleProgressBarIcon = ({ className, percentage }: CircleProgressBarIconProps) => {
  return (
    <div className={cn('relative w-40 h-40', className)}>
      <svg className='w-full h-full' viewBox='0 0 100 100'>
        <circle
          className='text-gray-200 stroke-current'
          stroke-width='6'
          cx='50'
          cy='50'
          r='40'
          fill='transparent'
        ></circle>
        <circle
          className='text-primary-500 progress-ring__circle stroke-current'
          strokeWidth='4'
          strokeLinecap='round'
          cx='50'
          cy='50'
          r='40'
          fill='transparent'
          strokeDashoffset='calc(400 - (400 * 45) / 100)'
        ></circle>

        <text x='50' y='50' textAnchor='middle' alignmentBaseline='middle' className='fill-primary-0'>
          {percentage}%
        </text>
      </svg>
    </div>
  )
}

export default CircleProgressBarIcon
