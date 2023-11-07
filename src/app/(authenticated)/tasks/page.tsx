import { getQueryClient } from '@/lib/utils'
import Hydrate from '@/providers/hydrate'
import { GET_TASKS_KEY, getTasks } from '@/store/server/features/tasks/queries'
import { dehydrate } from '@tanstack/react-query'
import Tasks from './Tasks'

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
