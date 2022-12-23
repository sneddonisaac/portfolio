import Navbar from '@/components/generic/Navbar'
import Footer from '@/components/generic/Footer'
import RelatedProject from '@/components/blocks/CTA/RelatedProject'
import SEO from '@/components/generic/SEO'
import Header from '../generic/Header'
import Cursor from '../generic/Cursor'

export default function ProjectLayout({ children, data, type }) {
    return (
        <>
            {data?.seo && <SEO {...data.seo} />}
            <div
                id="layout"
                className="font-regular relative h-full min-h-screen"
            >
                <Header />
                <main className="relative min-h-[90vh]">
                    {children}
                    {data?.relatedProject && (
                        <RelatedProject
                            type={type}
                            data={data.relatedProject}
                        />
                    )}
                </main>
                <Footer />
                <Navbar />
                <Cursor />
            </div>
        </>
    )
}
