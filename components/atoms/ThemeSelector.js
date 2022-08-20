import { useTheme } from 'next-themes'
import { useLoaded } from '@/utils/hooks/useLoaded'
import clsx from 'clsx'
import { useEffect } from 'react'

export default function ThemeSelector() {
    const { theme, setTheme } = useTheme()
    const loaded = useLoaded()

    useEffect(() => {
        setTheme(localStorage.theme)
    }, [])

    return (
        <div
            className={
                'z-100 fixed bottom-8 right-8 h-fit w-fit rounded-md bg-black py-2 px-3 shadow-2xl dark:bg-white'
            }
        >
            <button
                onClick={() => setTheme('light')}
                className={clsx(
                    'group w-fit text-black',
                    loaded && theme === 'light' && 'hidden'
                )}
            >
                <h1
                    className={
                        'whitespace-nowrap decoration-black decoration-2'
                    }
                >
                    Light Mode
                </h1>
                <div className="group-hover:underscore-hover h-[2px] w-0 bg-black" />
            </button>
            <button
                onClick={() => setTheme('dark')}
                className={clsx(
                    'group w-fit text-white',
                    loaded && theme === 'dark' && 'hidden'
                )}
            >
                <h1
                    className={
                        'whitespace-nowrap decoration-black decoration-2'
                    }
                >
                    Dark Mode
                </h1>
                <div className="group-hover:underscore-hover h-[2px] w-0 bg-white" />
            </button>
        </div>
    )
}
