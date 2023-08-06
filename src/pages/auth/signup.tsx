import { Button, Input } from '@nextui-org/react'
import axios from 'axios'
import Head from 'next/head'
import { SyntheticEvent, useState } from 'react'
import { useRouter } from 'next/router'
import { siteConfig } from '@/constant/siteconfig'
export default function Login() {
    const route = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [loading, setLoading] = useState(false)
    const handleLogin = async (e: SyntheticEvent) => {
        e.preventDefault()
        setLoading(true)
        await axios.post("http://localhost:3000/api/users", {
            email: email,
            password: password,
            name: name
        },
        );
        setLoading(false)
        route.back()
    }
    return (
        <>
            <Head>
                <title>Sign up - {siteConfig.title}</title>
            </Head>
            <div className='flex flex-col items-center justify-center min-h-screen'>
                <h1 className='mb-5 text-4xl font-bold'>Signup</h1>
                <form className='flex w-[300px] flex-col gap-2 px-4 text-black' onSubmit={(e) => { handleLogin(e) }}>
                    <Input placeholder='Masukkan nama' type='text' onChange={(e) => { setName(e.target.value) }} />
                    <Input placeholder='Masukkan email' type='email' onChange={(e) => { setEmail(e.target.value) }} />
                    <Input placeholder='Masukkan password' type='password' onChange={(e) => { setPassword(e.target.value) }} />
                    <Button className='text-white' color='primary' variant='shadow' type='submit' >{loading ? "Loading" : "Kirim"}</Button>
                </form>
            </div>
        </>
    )
}
