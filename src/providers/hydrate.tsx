'use client'

import { HydrateProps, Hydrate as HydrationBoundary } from 'react-query'
import React from 'react'

export default function Hydrate(props: HydrateProps) {
  return <HydrationBoundary {...props} />
}
