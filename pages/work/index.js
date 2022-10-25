// Data
import { allWorkPages } from '@/lib/cms'

// UI
import BasicLayout from '@/components/templates/BasicLayout'
import FilteredGrid from '@/components/blocks/Grids/FilteredGrid'

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
        <BasicLayout
            title="Work"
            desc="Check out some of the client projects I have worked on..."
        >
            <FilteredGrid data={works} title="Work" type="work" />
        </BasicLayout>
    )
}
