/* eslint-disable @next/next/no-img-element */
import { useSession } from "next-auth/react"
import Layout from './layout'
import Head from "next/head"
import { siteConfig } from "@/constant/siteconfig"

export default function Home() {
  const { data: session } = useSession()
  return (
    <Layout>
      <Head>
        <title>{siteConfig.title}</title>
      </Head>
      <main className='flex flex-col items-center justify-center min-h-screen'>
        <h1>Home</h1>

      </main>

    </Layout>
  )
}
