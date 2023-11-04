'use client'

import { useGetTasks } from '@/store/server/features/tasks/queries'
import { signOut } from 'next-auth/react'
import React from 'react'

const Tasks = () => {
  const { data } = useGetTasks()
  return (
    <div>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  )
}

export default Tasks
