// Data
import { getFeaturedWork, getLandingPage } from '@/lib/cms'

// UI
import BasicLayout from '@/components/templates/BasicLayout'
import LandingHero from '@/components/blocks/Heros/LandingHero'
import Components from '@/utils/page-sections/landing-page'
import CardHoverHero from '../components/blocks/Heros/CardHoverHero'

export async function getStaticProps() {
    const page = await getLandingPage()
    const works = await getFeaturedWork()
    return {
        props: {
            page,
            works,
        },
    }
}

export default function Home({ page, works }) {
    return (
        <BasicLayout title={page.title}>
            <CardHoverHero {...works} />
            {page?.content?.map((component, index) => (
                <Components data={component} key={index} />
            ))}
        </BasicLayout>
    )
}
