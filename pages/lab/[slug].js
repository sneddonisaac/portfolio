// Data
import Blocks from '@/utils/page-sections/Blocks'
import { allLabPages, getLabBySlug } from '@/lib/API'

// UI
import ProjectHero from '@/components/organisms/Heros/ProjectHero'
import ProjectLayout from '@/templates/ProjectLayout'

export default function Labs({ lab }) {
    return (
        <ProjectLayout title={lab?.title} data={lab} type="lab">
            <ProjectHero {...lab} />
            {lab?.content ? (
                lab.content.map((component, index) => (
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
    const data = await allLabPages()
    return {
        paths: data?.map((lab) => `/lab/${lab.slug}`) || [],
        fallback: true,
    }
}

export async function getStaticProps({ params }) {
    const data = await getLabBySlug(params.slug)
    return {
        props: {
            lab: {
                ...data,
            },
        },
    }
}
