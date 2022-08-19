// Data
import { allWorkPages } from '../../lib/API'

// UI
import BasicLayout from '../../templates/BasicLayout'
import FilteredGrid from '../../components/organisms/Grids/FilteredGrid'

export async function getStaticProps() {
    const works = await allWorkPages()
    return {
        props: {
            works,
        },
    }
}

export default function Works({ works }) {
    return (
        <BasicLayout title="Work">
            <FilteredGrid data={works} title="Work" type="work" />
        </BasicLayout>
    )
}
