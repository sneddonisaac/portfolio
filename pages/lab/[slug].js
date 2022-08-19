// Data
import Components from '../../utils/page-sections/individual-work';
import {allLabPages, getLabBySlug} from "../../lib/API";

// UI
import ProjectHero from '../../components/organisms/Heros/ProjectHero';
import ProjectLayout from "../../templates/ProjectLayout";

export default function Works({lab}) {
    console.log(lab);
    return (
        <ProjectLayout title={lab?.title} data={lab}>
            <ProjectHero data={lab}/>
            {lab?.content ?
                lab.content.map((component, index) => (
                    <Components data={component} key={index}/>
                ))
                :
                <div className='w-full flex justify-center items-center'>
                    <h1>Sorry there doesn&apos;t seem to be any notes on this project yet</h1>
                </div>
            }
        </ProjectLayout>
    )
}

export async function getStaticPaths() {
    const data = await allLabPages();
    return {
        paths: data?.map((lab) => `/lab/${lab.slug}`) || [],
        fallback: true,
    }
}

export async function getStaticProps({params}) {
    const data = await getLabBySlug(params.slug)
    return {
        props: {
            lab: {
                ...data,
            }
        },
    }
}