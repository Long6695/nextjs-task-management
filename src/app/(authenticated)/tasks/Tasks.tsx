'use client'

import { useGetTasks } from '@/store/server/features/tasks/queries'
import React from 'react'

const Tasks = () => {
  const { data } = useGetTasks()
  console.log('data', data)
  return <div>Tasks</div>
}

export default Tasks
