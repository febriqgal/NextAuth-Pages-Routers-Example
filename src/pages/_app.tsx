import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import { NextUIProvider } from '@nextui-org/react'
export default function App({ Component, pageProps }: AppProps, { session }: { session: any }) {
  return (
    <SessionProvider session={session}>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </SessionProvider>
  )
}
