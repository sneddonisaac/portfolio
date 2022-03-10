import Layout from '../templates/Layout'
import LandingHero from '../components/organisms/Heros/LandingHero'
import LandingAbout from '../components/organisms/Abouts/LandingAbout'

export default function Home() {
  return (
    <Layout title='Home'>
      <LandingHero />
      <LandingAbout />
    </Layout>
  )
}

