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
    return (
        <div
            id="Navbar"
            className="fixed inset-x-0 bottom-5 z-[130] mx-auto flex h-fit w-full justify-around bg-transparent font-satoshi-regular sm:bottom-16 sm:justify-between sm:px-16"
        >
            <div className="hidden w-11 sm:flex" />
            <MenuBar />
            <ThemeSelector />
        </div>
    )
}

function MenuBar() {
    const router = useRouter()
    return (
        <div className="z-[130] flex h-11 w-2/3 items-center justify-between rounded-md bg-gray-300 py-3 px-5 text-sm shadow-lg dark:bg-gray-50 dark:text-black sm:w-1/3">
            {nav.map((item, index) => (
                <Link key={index} href={item.path}>
                    <a
                        id="interactable"
                        data-type="link"
                        className={`cursor-pointer uppercase decoration-2 underline-offset-4 ${
                            `/${router.pathname.split('/')[1]}` === item.path
                                ? 'underline'
                                : ''
                        }`}
                    >
                        {item.title}
                    </a>
                </Link>
            ))}
        </div>
    )
}
