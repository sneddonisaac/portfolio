// Data
import {allWorkPages} from '../../lib/API'

// UI
import BasicLayout from '../../templates/BasicLayout'
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
    <BasicLayout title="Work">
      <FilteredWorkGrid data={works} />
    </BasicLayout>
  )
}
