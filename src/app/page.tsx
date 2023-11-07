'use client'

import { Button } from '@/components/ui/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import CircleProgressBarIcon from '@/icons/circle-progress-bar'
import { cn } from '@/lib/utils'
import { CategoryScale, Chart as ChartJS, LineElement, LinearScale, PointElement, Tooltip } from 'chart.js'
import { Check, ChevronsUpDown } from 'lucide-react'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { Line } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip)

const time = [
  {
    value: 'daily',
    label: 'Daily'
  },
  {
    value: 'weekly',
    label: 'Weekly'
  },
  {
    value: 'monthly',
    label: 'Monthly'
  },
  {
    value: 'quarterly',
    label: 'Quarterly'
  },
  {
    value: 'yearly',
    label: 'Yearly'
  }
]

const Home = () => {
  const { data: session } = useSession()
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')
  return (
    <div className='p-4 text-primary-0 lg:flex lg:items-center'>
      {session?.user?.name && (
        <div className='inline-block lg:hidden space-y-4'>
          <h2 className='text-2xl font-semibold text-secondary-500'>{`Hi ${session?.user?.name}`}</h2>
          <p className='text-base font-medium text-secondary-400'>Let&apos;s finish your task today!</p>
        </div>
      )}
      <div className='space-y-4 lg:flex lg:space-x-4 lg:space-y-0 w-full'>
        <div className='flex items-center justify-between bg-secondary-500 p-4 rounded-lg lg:flex-col lg:w-3/12'>
          <div className='space-y-4'>
            <p className='font-semibold text-base'>Running Task</p>
            <p className='font-semibold text-[32px]'>65</p>
          </div>
          <div className='flex items-center space-x-4'>
            <CircleProgressBarIcon className='w-20 h-20' percentage={70} />
            <div className='space-y-2'>
              <p className='font-semibold text-xl'>100</p>
              <p className='font-medium text-sm text-secondary-300'>Tasks</p>
            </div>
          </div>
        </div>
        <div className='lg:w-9/12 bg-gray-200 rounded-lg p-4 space-y-4'>
          <div className='flex items-center justify-between'>
            <p className='font-semibold text-secondary-500 text-base'>Activity</p>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant='ghost'
                  role='combobox'
                  aria-expanded={open}
                  className='justify-between text-secondary-500'
                >
                  {value ? time.find((time) => time.value === value)?.label : 'Select time...'}
                  <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
                </Button>
              </PopoverTrigger>
              <PopoverContent className='w-48 p-0'>
                <Command>
                  <CommandInput placeholder='Search time...' />
                  <CommandEmpty>No time found.</CommandEmpty>
                  <CommandGroup>
                    {time.map((time) => (
                      <CommandItem
                        key={time.value}
                        value={time.value}
                        onSelect={(currentValue) => {
                          setValue(currentValue === value ? '' : currentValue)
                          setOpen(false)
                        }}
                      >
                        <Check className={cn('mr-2 h-4 w-4', value === time.value ? 'opacity-100' : 'opacity-0')} />
                        {time.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>
          </div>

          <div className='w-full bg-primary-0 rounded-lg p-4'>
            <Line
              data={{
                labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
                datasets: [
                  {
                    label: new Date().getFullYear().toString(),
                    backgroundColor: 'black',
                    borderColor: 'black',
                    data: [65, 78, 66, 44, 56, 67, 75],
                    fill: false,
                    pointStyle: 'circle',
                    pointRadius: 1,
                    pointHoverRadius: 10,
                    pointHoverBackgroundColor: '#FFFFFF',
                    pointHoverBorderColor: '#546fff',
                    pointHoverBorderWidth: 5,
                    tension: 0.5
                  },
                  {
                    label: (new Date().getFullYear() - 1).toString(),
                    fill: false,
                    backgroundColor: 'gray',
                    borderColor: 'gray',
                    data: [40, 68, 86, 74, 56, 60, 87],
                    pointStyle: 'circle',
                    pointRadius: 1,
                    pointHoverRadius: 10,
                    pointHoverBackgroundColor: '#FFFFFF',
                    pointHoverBorderColor: '#546fff',
                    pointHoverBorderWidth: 5,
                    tension: 0.5
                  }
                ]
              }}
              options={{
                maintainAspectRatio: false,
                responsive: true,
                hover: {
                  mode: 'nearest',
                  intersect: true
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
