import Layout from '../../templates/Layout'
import { allWorkPages, getWorkBySlug } from "../../lib/API";
import Components from '../../utils/page-sections/individual-work';
import ProjectHero from '../../components/organisms/Heros/ProjectHero';
import Link from 'next/link';

export default function Works({ work }) {
    return (
        <Layout>
            <ProjectHero data={work} />
            {work?.content ? (
                work.content.map((component, index) => (
                    <Components data={component} key={index} />
                ))
            ) : (
                <div className='w-full flex justify-center items-center'>
                    <h1>Sorry there doesn't see be any notes on this project yet</h1>
                </div>
            )}
            {work?.projectLink && <ProjectButtons data={work.projectLink} />}
        </Layout>
    )
}

function ProjectButtons({ data }) {
    return (
        <div className='fixed right-8 bottom-16'>
            <Link href={data}>
                <a className='px-10 py-6 sm:px-14 rounded-full border-2 border-black bg-black text-white hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 ease-in-out'>
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