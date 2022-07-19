import Layout from '../../templates/Layout'
import { allWorkPages, getWorkBySlug } from "../../lib/API";
import Components from '../../utils/page-sections/individual-work';
import ProjectHero from '../../components/organisms/Heros/ProjectHero';

export default function Works({ work }) {
    return (
        <Layout>
            <ProjectHero data={work} />
            {work.content.map((component, index) => (
                <Components data={component} key={index} />
            ))}
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