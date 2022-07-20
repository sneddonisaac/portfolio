// Libs
import Link from 'next/link';

// Data
import Components from '../../utils/page-sections/individual-work';
import { allWorkPages, getWorkBySlug } from "../../lib/API";

// UI
import Layout from '../../templates/Layout'
import ProjectHero from '../../components/organisms/Heros/ProjectHero';

export default function Works({ work }) {
    return (
        <Layout>
            <ProjectHero data={work} />
            {work?.content ?
                work.content.map((component, index) => (
                    <Components data={component} key={index} />
                ))
                :
                <div className='w-full flex justify-center items-center'>
                    <h1>Sorry there doesn't see be any notes on this project yet</h1>
                </div>
            }
            {work?.projectLink && <ProjectButtons data={work.projectLink} />}
        </Layout>
    )
}

function ProjectButtons({ data }) {
    return (
        <div className='fixed right-8 bottom-16 z-[120]'>
            <Link href={data}>
                <a className='px-10 py-6 sm:px-14 rounded-full border-2 border-black shadow-lg bg-black text-white hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 ease-in-out'>
                    Visit Site
                </a>
            </Link>
        </div>
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