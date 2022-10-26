import clsx from 'clsx'

export default function Container({ children, id, classname }) {
    return (
        <div
            id={id}
            className={clsx(
                'w-full px-10 py-12 xl:mx-auto xl:max-w-6xl',
                classname
            )}
        >
            {children}
        </div>
    )
}
