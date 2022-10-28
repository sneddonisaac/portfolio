import Navbar from '@/components/generic/Navbar'
import Footer from '@/components/generic/Footer'
import RelatedProject from '@/components/blocks/CTA/RelatedProject'
import SEO from '@/components/generic/SEO'
import Header from '../generic/Header'

export default function ProjectLayout({ children, data, type }) {
    return (
        <>
            {data?.seo && <SEO {...data.seo} />}
            <div
                id="ProjectLayout"
                className="relative h-full min-h-screen font-satoshi-regular"
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
            </div>
        </>
    )
}