import Navbar from '../components/molecules/Navbar'
import Meta from '../components/atoms/Meta'
import Footer from '../components/molecules/Footer'
import RelatedProject from '../components/organisms/RelatedProject'

export default function ProjectLayout({ children, title, data }) {
    return (
        <div
            id="ProjectLayout"
            className="relative h-full min-h-screen font-satoshi-regular"
        >
            <Meta title={title} />
            <Navbar />
            <main className="relative min-h-[90vh]">
                {children}
                {data?.relatedProject && (
                    <RelatedProject {...data.relatedProject} />
                )}
            </main>
            <Footer />
        </div>
    )
}
