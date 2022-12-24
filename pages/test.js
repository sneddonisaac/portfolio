import BasicLayout from '../components/templates/BasicLayout'
import CarouselHero from '../components/blocks/Heros/CarouselHero'
import { getFeaturedWork, getLandingPage } from '../lib/cms'

export default function Test({ works }) {
    return (
        <BasicLayout title="Test">
            <CarouselHero {...works} />
        </BasicLayout>
    )
}

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
