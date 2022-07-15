import { DoubleArrowDownIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function LandingHero({ data }) {
    return (
        <div className="h-screen w-full relative flex justify-end items-end sm:items-start">
            {data && (
                <WorkItem title={data.title} slug={data.slug} description={data.description} projectTags={data.projectTags} />
            )}
            <div className="absolute bottom-5 left-5">
                <DoubleArrowDownIcon className="h-8 w-8 sm:h-10 sm:w-10" />
            </div>
        </div>
    )
}

function WorkItem({ title, description, projectTags, slug }) {

    return (
        <div className="lg:w-4/5 w-full sm:h-5/6 h-full relative bg-black bg-opacity-10 z-0 flex justify-center sm:justify-start items-end">
            <div className="sm:ml-12 sm:mb-12 mb-20 px-4 h-full sm:w-4/5 md:w-1/2 w-full flex flex-col justify-end items-start">
                <span className="font-satoshi-bold text-4xl pb-4">{title}</span>
                <span className="pb-4">
                    {description}
                </span>
                <div className="font-satoshi-bold tracking-wider w-full flex justify-between items-center">
                    <div>
                        {projectTags?.map((tag, i) => (
                            <span key={i} className='pr-2'>{tag}</span>
                        ))}
                    </div>
                    <Link href={`/work/${slug}`}>
                        <a id="link" className="whitespace-nowrap underline underline-offset-4 decoration-black decoration-2 font-satoshi-bold hidden lg:block">
                            Learn More
                        </a>
                    </Link>
                </div>
            </div>
            <div className="absolute right-5 bottom-5 flex flex-col justify-end items-end">
                <Link href={`/work/${slug}`}>
                    <a className="underline underline-offset-4 decoration-black decoration-2 font-satoshi-bold sm:hidden">
                        Learn More
                    </a>
                </Link>
                Featured Work
            </div>
        </div>
    )
}