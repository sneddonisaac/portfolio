// Data
import { getFeaturedWork, getLandingPage } from '../lib/API';

// UI
import Layout from '../templates/Layout';
import LandingHero from '../components/organisms/Heros/LandingHero';
import Components from '../utils/page-sections/landing-page';

export async function getStaticProps() {
  const page = await getLandingPage()
  const works = await getFeaturedWork()
  return {
    props: {
      page,
      works
    }
  }
}

export default function Home({page, works}) {
  console.log("🚀 ~ file: index.js ~ line 21 ~ Home ~ page", page)
  return (
    <Layout title={page.title}>
      <LandingHero data={works[0]} />
      {page?.content?.map(( component, index) => (
        <Components data={component} key={index} />
      ))}
    </Layout>
  )
}
