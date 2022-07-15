// Data
import { allWorkPages } from '../../lib/API'

// UI
import Layout from '../../templates/Layout'
import WorkHero from '../../components/organisms/Heros/WorkHero'
import WorksGrid from '../../components/organisms/Grids/WorksGrid'

export async function getStaticProps() {
  const works = await allWorkPages();
  return {
    props: {
      works
    }
  }
}

export default function Works({ works }) {
  return (
    <Layout title="Work">
      <WorkHero />
      <WorksGrid data={works} />
    </Layout>
  )
}
