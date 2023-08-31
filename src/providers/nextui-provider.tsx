'use client'

import { NextUIProvider as NextUIProviders } from '@nextui-org/react'

export function NextUIProvider({ children }: { children: React.ReactNode }) {
  return <NextUIProviders>{children}</NextUIProviders>
}
