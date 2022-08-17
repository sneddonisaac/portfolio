// Libs
import Link from 'next/link';

// Data
import Components from '../../utils/page-sections/individual-work';
import {allWorkPages, getWorkBySlug} from "../../lib/API";

// UI
import ProjectHero from '../../components/organisms/Heros/ProjectHero';
import LaptopMockup from "../../components/organisms/Content/LaptopMockup";
import WorkLayout from "../../templates/WorkLayout";

export default function Works({work}) {
    return (
        <WorkLayout title={work?.title}>
            <ProjectHero data={work}/>
            {/*{work?.projectImage && <LaptopMockup data={work}/>}*/}
            {work?.content ?
                work.content.map((component, index) => (
                    <Components data={component} key={index}/>
                ))
                :
                <div className='w-full flex justify-center items-center'>
                    <h1>Sorry there doesn&apos;t seem to be any notes on this project yet</h1>
                </div>
            }
        </WorkLayout>
    )
}

export async function getStaticPaths() {
    const works = await allWorkPages()
    return {
        paths: works?.map((work) => `/work/${work.slug}`) || [],
        fallback: true,
    }
}

export async function getStaticProps({params}) {
    const data = await getWorkBySlug(params.slug)
    return {
        props: {
            work: {
                ...data,
            }
        },
    }
}