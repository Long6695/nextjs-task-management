import { getQueryClient } from '@/lib/utils'
import Hydrate from '@/providers/hydrate'
import React from 'react'
import { dehydrate } from 'react-query'
import Tasks from './Tasks'
import { GET_TASKS_KEY, getTasks } from '@/store/server/features/tasks/queries'

const TasksPage = async () => {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery({ queryKey: [GET_TASKS_KEY], queryFn: getTasks })
  const dehydratedState = dehydrate(queryClient, {
    shouldDehydrateQuery: () => true
  })
  return (
    <Hydrate state={dehydratedState}>
      <Tasks />
    </Hydrate>
  )
}

export default TasksPage
