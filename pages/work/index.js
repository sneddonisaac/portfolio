// Data
import { allWorkPages } from '../../lib/API'

// UI
import Layout from '../../templates/Layout'
import BasicHero from '../../components/organisms/Heros/BasicHero'
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
      <BasicHero title="Previous Work." />
      <WorksGrid data={works} />
    </Layout>
  )
}
