import LandingAbout from '@/components/blocks/Abouts/LandingAbout'

export default function Components({ data }) {
    if (data.__typename === 'AboutMe') {
        return <LandingAbout data={data} />
    }
}
