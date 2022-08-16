// Data
import {allWorkPages} from '../../lib/API'

// UI
import Layout from '../../templates/Layout'
import FilteredWorkGrid from "../../components/organisms/Grids/FilteredWorkGrid";

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
      <FilteredWorkGrid data={works} />
    </Layout>
  )
}
