import OverviewIcon from '@/icons/over-view'
import { ClipboardList, MessageCircle, Settings, UserSquare2 } from 'lucide-react'

export const ROUTES = [
  {
    id: 1,
    name: 'Overview',
    icon: OverviewIcon,
    path: '/'
  },
  {
    id: 2,
    name: 'Tasks',
    icon: ClipboardList,
    path: '/tasks'
  },
  {
    id: 3,
    name: 'Mentors',
    icon: UserSquare2,
    path: '/mentors'
  },
  {
    id: 4,
    name: 'Message',
    icon: MessageCircle,
    path: '/message'
  },
  {
    id: 5,
    name: 'Settings',
    icon: Settings,
    path: '/settings'
  }
]
