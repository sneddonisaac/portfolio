import Navbar from '../components/molecules/Navbar'
import Meta from '../components/atoms/Meta'
import WorkFooter from "../components/molecules/WorkFooter";
import RelatedProject from "../components/organisms/RelatedProject";

export default function ProjectLayout({ children, title, data }) {
    return (
        <div className='relative font-satoshi-regular'>
            <Meta title={title} />
            <Navbar />
            <div className='relative'>
                {children}
            </div>
            {data?.relatedProject && <RelatedProject {...data.relatedProject} />}
            <WorkFooter />
        </div>
    )
}

