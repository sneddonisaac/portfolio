import Link from 'next/link'
import { useRouter } from 'next/router'
import ThemeSelector from './ThemeSelector'

const nav = [
    { title: 'Main', path: '/' },
    { title: 'Work', path: '/work' },
    { title: 'Lab', path: '/lab' },
    { title: 'Chat', path: '/lets-chat' },
]

export default function Navbar() {
    const router = useRouter()
    console.log(router.pathname.split('/')[1])
    return (
        <div
            id="Navbar"
            className="z-[130] h-fit w-full bg-transparent font-satoshi-regular"
        >
            <div className="fixed inset-x-0 bottom-16 z-[130] mx-auto flex w-2/3 items-center justify-between rounded-md bg-gray-300 py-3 px-5 text-sm shadow-lg dark:bg-gray-50 dark:text-black sm:w-1/3">
                {nav.map((item, index) => (
                    <Link key={index} href={item.path}>
                        <a
                            className={`cursor-pointer uppercase decoration-2 underline-offset-4 ${
                                `/${router.pathname.split('/')[1]}` ===
                                item.path
                                    ? 'underline'
                                    : ''
                            }`}
                        >
                            {item.title}
                        </a>
                    </Link>
                ))}
            </div>
            <ThemeSelector />
        </div>
    )
}
