// Data
import Blocks from '../../utils/page-sections/individual-work'
import { allWorkPages, getWorkBySlug } from '../../lib/API'

// UI
import ProjectHero from '../../components/organisms/Heros/ProjectHero'
import ProjectLayout from '../../templates/ProjectLayout'

export default function Works({ work }) {
    return (
        <ProjectLayout title={work?.title} data={work}>
            <ProjectHero {...work} />
            {work?.content ? (
                work.content.map((component, index) => (
                    <Blocks {...component} key={index} />
                ))
            ) : (
                <div className="flex w-full items-center justify-center">
                    <h1>
                        Sorry there doesn&apos;t seem to be any notes on this
                        project yet
                    </h1>
                </div>
            )}
        </ProjectLayout>
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
            },
        },
    }
}
