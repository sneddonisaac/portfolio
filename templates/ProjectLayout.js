import Navbar from '../components/molecules/Navbar'
import Meta from '../components/atoms/Meta'
import Footer from "../components/molecules/Footer";
import RelatedProject from "../components/organisms/RelatedProject";

export default function ProjectLayout({ children, title, data }) {
    return (
        <div id='ProjectLayout' className='relative font-satoshi-regular min-h-screen h-full'>
            <Meta title={title} />
            <Navbar />
            <main className='relative min-h-[90vh]'>
                {children}
            </main>
            {data?.relatedProject && <RelatedProject {...data.relatedProject} />}
            <Footer />
        </div>
    )
}

