import { DoubleArrowDownIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

export default function LandingHero({ data }) {
    return (
        <div
            id="LandingHero"
            className="relative flex h-screen w-full items-end justify-end sm:items-start"
        >
            {data && (
                <WorkItem
                    title={data.title}
                    slug={data.slug}
                    description={data.description}
                    projectTags={data.projectTags}
                />
            )}
            <div className="absolute bottom-5 left-5">
                <DoubleArrowDownIcon className="h-8 w-8 sm:h-10 sm:w-10" />
            </div>
        </div>
    )
}

function WorkItem({ title, description, projectTags, slug }) {
    return (
        <div className="relative z-0 flex h-full w-full items-end justify-center bg-black bg-opacity-10 dark:bg-white dark:bg-opacity-10 sm:h-5/6 sm:justify-start lg:w-4/5">
            <div className="mb-20 flex h-full w-full flex-col items-start justify-end px-4 sm:ml-12 sm:mb-12 sm:w-4/5 md:w-1/2">
                <h1 className="pb-4 text-4xl font-bold">{title}</h1>
                <h2 className="pb-4">{description}</h2>
                <div className="flex w-full items-center justify-between font-bold tracking-wider">
                    <div>
                        {projectTags?.map((tag, i) => (
                            <span key={i} className="pr-2">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <Link
                        href={`/work/${slug}`}
                        data-type="link"
                        className="interactable group hidden whitespace-nowrap font-bold lg:block"
                        aria-label="Featured project"
                    >
                        Learn More
                        <div className="group-hover:underscore-hover h-[2px] w-0 bg-black dark:bg-white" />
                    </Link>
                </div>
            </div>
            <div className="absolute right-5 bottom-5 flex flex-col items-end justify-end">
                <Link
                    href={`/work/${slug}`}
                    data-type="link"
                    className="interactable group font-bold sm:hidden"
                    aria-label="Featured project"
                >
                    Learn More
                    <div className="group-hover:underscore-hover h-[2px] w-0 bg-black dark:bg-white" />
                </Link>
                Featured Work
            </div>
        </div>
    )
}
