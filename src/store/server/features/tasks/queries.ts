import { useQuery } from '@tanstack/react-query'

export const GET_TASKS_KEY = 'tasks'

export const getTasks = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  return res.json()
}

export const useGetTasks = () => useQuery({ queryKey: [GET_TASKS_KEY], queryFn: getTasks })
