import Navbar from '../components/molecules/Navbar'
import Meta from '../components/atoms/Meta'
import WorkFooter from "../components/molecules/WorkFooter";
import RelatedProject from "../components/organisms/RelatedProject";

export default function WorkLayout({ children, title, data }) {
    return (
        <div className='relative font-satoshi-regular text-black bg-white'>
            <Meta title={title} />
            <Navbar />
            <div className='relative'>
                {children}
            </div>
            {data.selectedWork && <RelatedProject {...data.selectedWork} />}
            <WorkFooter />
        </div>
    )
}

