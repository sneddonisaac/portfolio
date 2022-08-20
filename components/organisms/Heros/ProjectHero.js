import projectTypeConverter from '@/utils/functions/projectTypeConverter'
import Link from 'next/link'
import Container from '@/components/atoms/Container'
import clsx from 'clsx'

export default function ProjectHero(data) {
    return (
        <div id={`block_name: ProjectHero, block_id: ${data?.id}`}>
            <Container>
                <div className="flex w-full flex-col items-center justify-start px-12 pt-36 sm:pb-12 sm:pt-24">
                    <span className="my-12 flex flex-col items-center justify-center text-center font-satoshi-bold text-7xl sm:text-8xl">
                        {data?.title}
                        {!data?.projectImage?.url && (
                            <span className="mt-6 text-base">
                                Unfortunately I am unable to provide images
                                pertaining to this project.
                            </span>
                        )}
                    </span>
                </div>
                <div className="grid grid-rows-1 md:grid-cols-2">
                    <div className="hidden md:block" />
                    <div
                        className={clsx(
                            'grid grid-rows-3 space-y-4 md:grid-rows-1 md:space-y-0',
                            data?.client ? 'md:grid-cols-3' : 'md:grid-cols-2'
                        )}
                    >
                        {data?.client && (
                            <div className="flex flex-col">
                                <h1 className="text-sm text-gray-500">
                                    Client
                                </h1>
                                <span>{data?.client}</span>
                            </div>
                        )}
                        <div className="flex flex-col">
                            <h1 className="text-sm text-gray-500">Services</h1>
                            {data?.projectType?.map((type, index) => (
                                <span className="text-lg" key={index}>
                                    {projectTypeConverter(type).title}
                                </span>
                            ))}
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-sm text-gray-500">Links</h1>
                            {data?.codeLink || data?.projectLink ? (
                                <>
                                    {data?.codeLink && (
                                        <Links
                                            href={data?.codeLink}
                                            name="Code"
                                        />
                                    )}
                                    {data?.projectLink && (
                                        <Links
                                            href={data?.projectLink}
                                            name="Site"
                                        />
                                    )}
                                </>
                            ) : (
                                <>
                                    <h1 className="text-lg">
                                        There doesn&apos;t seem to be any links
                                        for this project
                                    </h1>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

function Links(props) {
    return (
        <Link href={props?.href}>
            <a
                className='text-lg after:content-["_↗"]'
                target="_blank"
                rel="noopener nofollow"
            >
                {props?.name}
            </a>
        </Link>
    )
}
