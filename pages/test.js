import BasicLayout from '../components/templates/BasicLayout'
import CarouselHero from '../components/blocks/Heros/CarouselHero'
import { getFeaturedWork, getLandingPage } from '../lib/cms'
import CardHoverHero from '../components/blocks/Heros/CardHoverHero'

export default function Test({ works }) {
    return (
        <BasicLayout title="Test">
            <CardHoverHero {...works} />
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
