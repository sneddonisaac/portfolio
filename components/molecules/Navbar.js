import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import clsx from "clsx";

const nav = [
    { title: 'Main', path: '/' },
    { title: 'Work', path: '/work' },
    { title: 'Lab', path: '/lab' },
]

export default function Navbar() {
    const router = useRouter();

    return (
        <div id="Navbar" className="font-satoshi-regular fixed bg-transparent w-full h-fit z-[120]">
            <div className="font-satoshi-bold text-5xl pt-12 px-5 sm:px-20 flex justify-between items-center">
                <Link href="/">
                    <a className=''>
                        Isaac.
                    </a>
                </Link>
                <HamburgerMenu />
            </div>
            <div className="sm:w-1/3 w-2/3 absolute inset-x-0 mx-auto top-4 text-sm flex justify-between items-center">
                {nav.map((item, index) => (
                    <Link key={index} href={item.path}>
                        <a className={`cursor-pointer decoration-2 underline-offset-4 uppercase ${router.pathname === item.path ? 'underline' : ''}`}>
                            {item.title}
                        </a>
                    </Link>
                ))}
            </div>
        </div >
    )
}

function HamburgerMenu() {
    const [open, setOpen] = useState(false)

    function handleClick(e) {
        e.preventDefault();
        setOpen(!open);
    }

    return (
        <div className="h-6">
            <button onClick={(e) => handleClick(e)} className="z-[130] h-full flex flex-col justify-between content-between">
                <div className={clsx(open && '-rotate-45 translate-y-[10px] transition-transform duration-300', 'bg-black dark:bg-white h-0.5 w-8')} />
                <div className={clsx(open && "rotate-45 transition-transform duration-300", 'bg-black dark:bg-white h-0.5 w-8')} />
                <div className={`${open ? 'duration-150 bg-transparent' : 'bg-black dark:bg-white'} h-0.5 w-6`} />
            </button>
            <Menu open={open} />
        </div>
    )
}

function Menu({ open }) {
    return (
        <div className={open ? 'bg-black w-5/6 absolute inset-0 z-[120] h-screen transition-all duration-300 translate-x-100' : ''}>
            <div className={open ? 'transition-all duration-300 text-white flex flex-col justify-evenly items-center h-full py-16' : 'hidden'}>
                {nav.map((item, index) => (
                    <Link key={index} href={item.path}>
                        <a>
                            {item.title}
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    )
}