import Layout from '../../templates/Layout'
import { CodeIcon, GlobeIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { allWorkPages, getWorkBySlug } from "../../lib/API";
import Img from '../../components/molecules/Img';

export default function Works({ work }) {
    return (
        <Layout>
            <div className="h-5/6 pt-32 sm:pt-24 overflow-clip flex justify-center items-center">
                {work?.projectImage?.image ?
                    <Img styles="w-5/6 h-auto" data={work?.projectImage} />
                    :
                    ""
                }
            </div>
            <div className="bg-white py-12 w-full flex flex-col justify-start items-center px-12">
                <span className="flex flex-col justify-center items-center text-7xl sm:text-8xl font-satoshi-bold text-center my-20 sm:my-24">
                    {work?.title}
                    {!work?.projectImage?.image && <span className="text-base mt-6">Unfortunately I am unable to provide images or links pertaining to this project.</span>}
                </span>
                <div className={`w-1/5 flex items-center pb-8 ${(work?.projectLink && work?.codeLink) ? 'justify-between' : 'justify-center'} ${(!work?.projectLink && !work?.codeLink) && 'hidden'} `}>
                    {work?.projectLink ? <Link href={work?.projectLink}>
                        <a target='_blank' rel="noopener noreferrer">
                            <GlobeIcon className="h-8 w-8" />
                        </a>
                    </Link> : ''}
                    {work?.codeLink ? <Link href={work?.projectLink}>
                        <a target='_blank' rel="noopener noreferrer">
                            <CodeIcon className="h-8 w-8" />
                        </a>
                    </Link> : ''}
                </div>
                <span className="text-center text-lg">{work?.description}</span>
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const works = await allWorkPages()
    return {
        paths: works?.map((work) => `/work/${work.slug}`) || [],
        fallback: true,
    }
}

export async function getStaticProps({ params }) {
    const data = await getWorkBySlug(params.slug)
    return {
        props: {
            work: {
                ...data,
            }
        },
    }
}