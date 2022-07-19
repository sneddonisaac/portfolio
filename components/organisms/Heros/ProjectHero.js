import { CodeIcon, GlobeIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import Img from "../../molecules/Img";

export default function ProjectHero({ data }) {
    return (
        <div id="ProjectHero">
            <div className="h-5/6 pt-32 sm:pt-24 overflow-clip flex justify-center items-center">
                {data?.projectImage?.image ?
                    <div className='w-5/6 h-auto'>
                        <Img data={data?.projectImage} />
                    </div>
                    :
                    ""
                }
            </div>
            <div className="bg-white py-12 w-full flex flex-col justify-start items-center px-12">
                <span className="flex flex-col justify-center items-center text-7xl sm:text-8xl font-satoshi-bold text-center my-20 sm:my-24">
                    {data?.title}
                    {!data?.projectImage?.image && <span className="text-base mt-6">Unfortunately I am unable to provide images or links pertaining to this project.</span>}
                </span>
                <div className={`w-1/5 flex items-center pb-8 ${(data?.projectLink && data?.codeLink) ? 'justify-between' : 'justify-center'} ${(!data?.projectLink && !data?.codeLink) && 'hidden'} `}>
                    {data?.projectLink ? <Link href={data?.projectLink}>
                        <a target='_blank' rel="noopener noreferrer">
                            <GlobeIcon className="h-8 w-8" />
                        </a>
                    </Link> : ''}
                    {data?.codeLink ? <Link href={data?.projectLink}>
                        <a target='_blank' rel="noopener noreferrer">
                            <CodeIcon className="h-8 w-8" />
                        </a>
                    </Link> : ''}
                </div>
                <span className="text-center text-lg">{data?.description}</span>
            </div>
        </div>
    )
}
