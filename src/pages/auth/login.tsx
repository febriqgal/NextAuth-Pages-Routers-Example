import { signIn, useSession } from 'next-auth/react'
import { SyntheticEvent, useState } from 'react'

import { useRouter } from 'next/router'
import { Button, Input } from '@nextui-org/react'
import Head from 'next/head'
import { NextPage } from 'next'
import { siteConfig } from '@/constant/siteconfig'

const Login: NextPage = () => {
    const route = useRouter()
    const { data: session } = useSession()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleLogin = async (e: SyntheticEvent) => {
        e.preventDefault()
        try {
            const res = await signIn('credentials', {
                email, password, callbackUrl: `${window.location.origin}/`
            })
            return res
        } catch (error) {
            console.log(`dddd ${error}`);

        }

    }
    if (session?.user) {
        route.replace('/')
    } else {
        return (
            <>
                <Head>
                    <title>Login - {siteConfig.title}</title>
                </Head>
                <div className='flex flex-col items-center justify-center min-h-screen'>
                    <h1 className='mb-5 text-4xl font-bold'>Login</h1>
                    <form className='flex w-[300px] flex-col gap-2 px-4 text-black' onSubmit={(e) => { handleLogin(e) }}>
                        <Input placeholder='Masukkan email' type='email' onChange={(e) => { setEmail(e.target.value) }} />
                        <Input placeholder='Masukkan password' type='password' onChange={(e) => { setPassword(e.target.value) }} />
                        <Button onPress={() => { route.push('/auth/signup') }} color='primary' variant='ghost'>Belum Punya Akun?</Button>
                        <Button className='text-white' color='primary' variant='shadow' type='submit' >Masuk</Button>
                    </form>

                </div>
            </>
        )
    }
}
export default Login