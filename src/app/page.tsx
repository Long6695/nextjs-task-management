'use client'

import { Button } from '@/components/ui/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import CircleProgressBarIcon from '@/icons/circle-progress-bar'
import { cn } from '@/lib/utils'
import { CategoryScale, Chart as ChartJS, LineElement, LinearScale, PointElement, Tooltip } from 'chart.js'
import { CalendarCheck, Check, ChevronLeft, ChevronRight, ChevronsUpDown, Clock4 } from 'lucide-react'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { Line } from 'react-chartjs-2'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import Avatar from '@/components/avatar'
import StarIcon from '@/icons/star'
import Image from 'next/image'
import { Progress } from '@/components/ui/progress'

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
    <div className='p-4 text-primary-0'>
      {session?.user?.name && (
        <div className='inline-block xl:hidden space-y-4'>
          <h2 className='text-2xl font-semibold text-secondary-500'>{`Hi ${session?.user?.name}`}</h2>
          <p className='text-base font-medium text-secondary-400'>Let&apos;s finish your task today!</p>
        </div>
      )}
      <div className='space-y-4 xl:flex xl:space-x-2 xl:space-y-0'>
        <div className='flex items-center justify-center bg-secondary-500 rounded-lg py-4 xl:py-0 xl:flex-col xl:w-3/12 xl:space-y-4'>
          <div className='space-y-4'>
            <p className='font-semibold text-base'>Running Task</p>
            <p className='font-semibold text-xl xl:text-[32px]'>65</p>
          </div>
          <div className='flex items-center space-x-4'>
            <CircleProgressBarIcon className='w-20 h-20 xl:w-30 xl:h-30' percentage={70} />
            <div className='space-y-2'>
              <p className='font-semibold text-lg xl:text-xl'>100</p>
              <p className='font-medium text-xs xl:text-sm text-secondary-300'>Tasks</p>
            </div>
          </div>
        </div>
        <div className='xl:w-9/12 bg-gray-200 rounded-lg p-4 space-y-4'>
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

      {/* Mentors */}
      <CarouselProvider naturalSlideWidth={200} naturalSlideHeight={70} totalSlides={3} visibleSlides={2}>
        <div className='flex justify-between items-center my-4'>
          <p className='text-secondary-500 text-2xl font-semibold'>Monthly Mentors</p>
          <div className='text-secondary-400'>
            <ButtonBack>
              <ChevronLeft className='w-6 h-6' />
            </ButtonBack>
            <ButtonNext>
              <ChevronRight className='w-6 h-6' />
            </ButtonNext>
          </div>
        </div>
        <Slider>
          <Slide index={0}>
            <div className='p-4 bg-primary-0 rounded-lg mx-4 shadow-md'>
              <div className='flex items-center justify-between mb-4'>
                <div className='flex items-center justify-between space-x-4'>
                  <Avatar />
                  <div>
                    <p className='text-secondary-500 text-base font-medium'>Long Thai</p>
                    <p className='text-secondary-400 text-sm'>Frontend</p>
                  </div>
                </div>
                <p className='text-primary-500 font-medium text-sm'>+Follow</p>
              </div>
              <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-2'>
                  <CalendarCheck className='text-secondary-500' />
                  <p className='text-secondary-500 text-base font-medium'>40 Tasks</p>
                </div>
                <div className='flex items-center space-x-2'>
                  <StarIcon /> <p className='text-secondary-500 text-base font-medium'>4.7 (450 Reviews)</p>
                </div>
              </div>
            </div>
          </Slide>
          <Slide index={1}>
            <div className='p-4 bg-primary-0 rounded-lg mx-4 shadow-md'>
              <div className='flex items-center justify-between mb-4'>
                <div className='flex items-center justify-between space-x-4'>
                  <Avatar />
                  <div>
                    <p className='text-secondary-500 text-base font-medium'>Long Thai</p>
                    <p className='text-secondary-400 text-sm'>Frontend</p>
                  </div>
                </div>
                <p className='text-primary-500 font-medium text-sm'>+Follow</p>
              </div>
              <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-2'>
                  <CalendarCheck className='text-secondary-500' />
                  <p className='text-secondary-500 text-base font-medium'>40 Tasks</p>
                </div>
                <div className='flex items-center space-x-2'>
                  <StarIcon /> <p className='text-secondary-500 text-base font-medium'>4.7 (450 Reviews)</p>
                </div>
              </div>
            </div>
          </Slide>
          <Slide index={2}>
            <div className='p-4 bg-primary-0 rounded-lg mx-4 shadow-md'>
              <div className='flex items-center justify-between mb-4'>
                <div className='flex items-center justify-between space-x-4'>
                  <Avatar />
                  <div>
                    <p className='text-secondary-500 text-base font-medium'>Long Thai</p>
                    <p className='text-secondary-400 text-sm'>Frontend</p>
                  </div>
                </div>
                <p className='text-primary-500 font-medium text-sm'>+Follow</p>
              </div>
              <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-2'>
                  <CalendarCheck className='text-secondary-500' />
                  <p className='text-secondary-500 text-base font-medium'>40 Tasks</p>
                </div>
                <div className='flex items-center space-x-2'>
                  <StarIcon /> <p className='text-secondary-500 text-base font-medium'>4.7 (450 Reviews)</p>
                </div>
              </div>
            </div>
          </Slide>
        </Slider>
      </CarouselProvider>

      {/* Upcoming Task */}
      <CarouselProvider naturalSlideWidth={100} naturalSlideHeight={100} totalSlides={3} visibleSlides={2}>
        <div className='flex justify-between items-center my-4'>
          <p className='text-secondary-500 text-2xl font-semibold'>Upcoming Task</p>
          <div className='text-secondary-400'>
            <ButtonBack>
              <ChevronLeft className='w-6 h-6' />
            </ButtonBack>
            <ButtonNext>
              <ChevronRight className='w-6 h-6' />
            </ButtonNext>
          </div>
        </div>
        <Slider>
          <Slide index={0}>
            <div className='p-4 bg-primary-0 rounded-lg mx-4 shadow-md'>
              <div className='relative w-full h-40 rounded-lg mb-2'>
                <Image src='/image.png' alt='picture' fill className='object-fill' />
              </div>
              <div>
                <p className='text-secondary-600 text-base font-semibold'>Creating Mobile App Design</p>
                <p className='text-secondary-400 text-sm'>Frontend</p>
              </div>
              <div className='flex items-center justify-between my-4'>
                <p className='text-secondary-500 text-base font-medium'>Progress</p>
                <p className='text-primary-500 font-medium text-sm'>75%</p>
              </div>
              <Progress value={75} />
              <div className='flex items-center justify-between mt-4'>
                <div className='flex items-center space-x-2'>
                  <Clock4 className='text-secondary-500' />
                  <p className='text-secondary-500 text-base font-medium'>3 Days left</p>
                </div>
                <div className='flex items-center -space-x-4'>
                  <Avatar />
                  <Avatar />
                  <Avatar />
                </div>
              </div>
            </div>
          </Slide>
          <Slide index={1}>
            <div className='p-4 bg-primary-0 rounded-lg mx-4 shadow-md'>
              <div className='relative w-full h-40 rounded-lg mb-2'>
                <Image src='/image.png' alt='picture' fill className='object-fill' />
              </div>
              <div>
                <p className='text-secondary-600 text-base font-semibold'>Creating Mobile App Design</p>
                <p className='text-secondary-400 text-sm'>Frontend</p>
              </div>
              <div className='flex items-center justify-between my-4'>
                <p className='text-secondary-500 text-base font-medium'>Progress</p>
                <p className='text-primary-500 font-medium text-sm'>75%</p>
              </div>
              <Progress value={75} />
              <div className='flex items-center justify-between mt-4'>
                <div className='flex items-center space-x-2'>
                  <Clock4 className='text-secondary-500' />
                  <p className='text-secondary-500 text-base font-medium'>3 Days left</p>
                </div>
                <div className='flex items-center -space-x-4'>
                  <Avatar />
                  <Avatar />
                  <Avatar />
                </div>
              </div>
            </div>
          </Slide>
          <Slide index={2}>
            <div className='p-4 bg-primary-0 rounded-lg mx-4 shadow-md'>
              <div className='relative w-full h-40 rounded-lg mb-2'>
                <Image src='/image.png' alt='picture' fill className='object-fill' />
              </div>
              <div>
                <p className='text-secondary-600 text-base font-semibold'>Creating Mobile App Design</p>
                <p className='text-secondary-400 text-sm'>Frontend</p>
              </div>
              <div className='flex items-center justify-between my-4'>
                <p className='text-secondary-500 text-base font-medium'>Progress</p>
                <p className='text-primary-500 font-medium text-sm'>75%</p>
              </div>
              <Progress value={75} />
              <div className='flex items-center justify-between mt-4'>
                <div className='flex items-center space-x-2'>
                  <Clock4 className='text-secondary-500' />
                  <p className='text-secondary-500 text-base font-medium'>3 Days left</p>
                </div>
                <div className='flex items-center -space-x-4'>
                  <Avatar />
                  <Avatar />
                  <Avatar />
                </div>
              </div>
            </div>
          </Slide>
        </Slider>
      </CarouselProvider>
    </div>
  )
}

export default Home
