import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import clsx from 'clsx'

const nav = [
    { title: 'Main', path: '/' },
    { title: 'Work', path: '/work' },
    { title: 'Lab', path: '/lab' },
    { title: 'Chat', path: '/lets-chat' },
]

export default function Navbar() {
    const router = useRouter()
    return (
        <div
            id="Navbar"
            className="fixed z-[120] h-fit w-full bg-transparent font-satoshi-regular"
        >
            <div className="flex items-center justify-between px-5 pt-12 font-satoshi-bold text-5xl sm:px-20">
                <Link href="/">
                    <a className="">Isaac.</a>
                </Link>
                <HamburgerMenu />
            </div>
            <div className="absolute inset-x-0 top-4 mx-auto flex w-2/3 items-center justify-between text-sm sm:w-1/3">
                {nav.map((item, index) => (
                    <Link key={index} href={item.path}>
                        <a
                            className={`cursor-pointer uppercase decoration-2 underline-offset-4 ${
                                router.pathname === item.path ? 'underline' : ''
                            }`}
                        >
                            {item.title}
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    )
}

function HamburgerMenu() {
    const [open, setOpen] = useState(false)

    function handleClick(e) {
        e.preventDefault()
        setOpen(!open)
    }

    return (
        <div className="h-6">
            <button
                onClick={(e) => handleClick(e)}
                className="z-[130] flex h-full flex-col content-between justify-between"
            >
                <div
                    className={clsx(
                        open &&
                            'translate-y-[10px] -rotate-45 transition-transform duration-300',
                        'h-0.5 w-8 bg-black dark:bg-white'
                    )}
                />
                <div
                    className={clsx(
                        open && 'rotate-45 transition-transform duration-300',
                        'h-0.5 w-8 bg-black dark:bg-white'
                    )}
                />
                <div
                    className={`${
                        open
                            ? 'bg-transparent duration-150'
                            : 'bg-black dark:bg-white'
                    } h-0.5 w-6`}
                />
            </button>
            <Menu open={open} />
        </div>
    )
}

function Menu({ open }) {
    return (
        <div
            className={
                open
                    ? 'translate-x-100 absolute inset-0 z-[120] h-screen w-5/6 bg-black transition-all duration-300'
                    : ''
            }
        >
            <div
                className={
                    open
                        ? 'flex h-full flex-col items-center justify-evenly py-16 text-white transition-all duration-300'
                        : 'hidden'
                }
            >
                {nav.map((item, index) => (
                    <Link key={index} href={item.path}>
                        <a>{item.title}</a>
                    </Link>
                ))}
            </div>
        </div>
    )
}
