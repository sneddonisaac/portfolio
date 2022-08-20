import { useTheme } from 'next-themes'
import { useLoaded } from '@/utils/hooks/useLoaded'
import clsx from 'clsx'
import { useEffect, useState } from 'react'

export default function ThemeSelector() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
    const loaded = useLoaded()

    useEffect(() => {
        setTheme(localStorage.theme)
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <div
            className={
                'fixed bottom-8 right-8 z-[130] h-fit w-fit rounded-md bg-black py-2 px-3 shadow-2xl dark:bg-white'
            }
        >
            <Button setTheme={setTheme} loaded={loaded} theme={theme} />
        </div>
    )
}

function Button(props) {
    console.log(props.theme)
    return (
        <button
            onClick={() =>
                props.setTheme(props.theme !== 'light' ? 'light' : 'dark')
            }
            className={clsx('group w-fit text-white')}
        >
            <div className={clsx('whitespace-nowrap capitalize')}>
                <h1 className="text-white dark:text-black">
                    {props.theme !== 'light' ? 'light' : 'dark'} Mode
                </h1>
                <div
                    className={clsx(
                        'group-hover:underscore-hover h-[2px] w-0',
                        props.theme === 'light' ? 'bg-white' : 'bg-black'
                    )}
                />
            </div>
        </button>
    )
}
