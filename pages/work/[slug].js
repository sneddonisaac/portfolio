import { client, urlFor } from "../../utils/sanity-client";
import groq from 'groq'
import Layout from '../../templates/Layout'
import { CodeIcon, GlobeIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Works({ work }) {


    return (
        <Layout>
            <div className="h-5/6 pt-32 sm:pt-24 overflow-clip flex justify-center items-center">
                {work?.imgUrl && (<img className="w-5/6 h-auto" src={urlFor(work?.imgUrl).url()} />)}

            </div>
            <div className="bg-white py-12 w-full flex flex-col justify-start items-center px-12">
                <span className="text-7xl sm:text-8xl font-satoshi-bold text-center my-20 sm:my-24">{work?.title}</span>
                <div className={`py-6 w-1/5 flex items-center mb-24 ${(work?.projectLink && work?.codeLink) ? 'justify-between' : 'justify-center'}`}>
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
                {work?.content}
            </div>
        </Layout>
    )
}

const query = groq`
    *[_type == "works" && slug.current == $slug][0]{
        title,
        description,
        imgUrl,
        projectLink,
        codeLink
    }
`


export async function getStaticPaths() {
    const paths = await client.fetch(
        groq`*[_type == "works" && defined(slug.current)][].slug.current`
    )

    return {
        paths: paths.map((slug) => ({ params: { slug } })),
        fallback: true,
    }
}

export async function getStaticProps(context) {
    const { slug = "" } = context.params
    const work = await client.fetch(query, { slug })
    return {
        props: {
            work
        }
    }
}