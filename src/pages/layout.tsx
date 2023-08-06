import ProfileDropdown from '@/components/dropdown/profile'
import LoginButtonComponent from '@/components/login-btn'
import Link from 'next/link'
import React from 'react'
import { NextPage } from 'next/types'
import { siteConfig } from '@/constant/siteconfig'
import { Button } from '@nextui-org/react'

export default function Layout({ children }: { children: React.ReactNode } & NextPage) {
    return (
        <>
            <nav className='fixed flex items-center justify-between w-full px-40 py-4 border-b border-primary backdrop-blur-sm'>
                <div>
                    <Link className='text-xl font-bold text-primary' href={'/'}>{siteConfig.title}</Link>
                    <h1 className='text-sm font-light'>{siteConfig.description}</h1>
                </div>
                <div className='flex items-center gap-2'>
                    <Button variant='solid' color='primary' href={'/'}>Project</Button>
                    <Button variant='light' color='primary' href={'/'}>Portfolio</Button>
                    <Button variant='light' color='primary' href={'/'}>Contact</Button>

                    <ProfileDropdown />
                </div>
            </nav>
            <div>{children}</div>
            <div>{children}</div>
        </>
    )
}
