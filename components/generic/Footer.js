import Container from '@/components/generic/Container'
import { format } from 'date-fns'
import { useState } from 'react'
import Link from 'next/link'

export default function Footer() {
    const [date, setDate] = useState(format(new Date(), 'p'))
    const timezone = format(new Date(), 'O')
    const year = format(new Date(), 'y')

    function getDate() {
        setDate(format(new Date(), 'p'))
    }

    setInterval(getDate, 10000)

    return (
        <footer className="flex w-full items-center justify-between bg-black pb-12 text-white sm:pb-20">
            <Container>
                <div className="grid w-full gap-y-8 md:grid-cols-5 lg:grid-cols-6">
                    <div className="col-span-2 grid grid-flow-col grid-rows-1">
                        <div className="text-center sm:text-left">
                            <h1 className="text-sm text-gray-500">Version</h1>
                            <span>{year} &copy; Edition</span>
                        </div>
                        <div>
                            <h1 className="text-sm text-gray-500">
                                Local Time
                            </h1>
                            {date} {timezone}
                        </div>
                    </div>
                    <div className="hidden sm:block md:col-span-1 lg:col-span-2" />
                    <div className="col-span-2 text-center sm:text-left">
                        <h1 className="text-sm text-gray-500">Socials</h1>
                        <div className="grid grid-flow-col grid-rows-1 place-items-center gap-x-8 sm:place-items-start">
                            {socials.map((social, index) => (
                                <Link key={index} href={social.href}>
                                    <a
                                        className="group w-fit"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <h4>{social.name}</h4>
                                        <div className="group-hover:underscore-hover h-[2px] w-0 bg-white" />
                                    </a>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

const socials = [
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/isaacsneddonjenkins/',
    },
    { name: 'Instagram', href: 'https://www.instagram.com/snedothedevo/' },
    { name: 'Twitter', href: 'https://twitter.com/devsned' },
]
