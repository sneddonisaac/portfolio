// Data
import { allLabPages } from '../../lib/API'

// UI
import BasicLayout from '../../templates/BasicLayout'
import FilteredGrid from '../../components/organisms/Grids/FilteredGrid'

export async function getStaticProps() {
    const data = await allLabPages()
    return {
        props: {
            data,
        },
    }
}

export default function Works({ data }) {
    return (
        <BasicLayout title="Lab">
            <FilteredGrid data={data} title="Lab" type="lab" />
        </BasicLayout>
    )
}
