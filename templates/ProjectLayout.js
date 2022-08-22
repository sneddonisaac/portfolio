import Navbar from '@/components/molecules/Navbar'
import Footer from '@/components/molecules/Footer'
import RelatedProject from '@/components/organisms/RelatedProject'
import SEO from '@/components/atoms/SEO'
import ThemeSelector from '@/components/atoms/ThemeSelector'

export default function ProjectLayout({ children, data, type }) {
    return (
        <>
            {data?.seo && <SEO {...data.seo} />}
            <div
                id="ProjectLayout"
                className="relative h-full min-h-screen font-satoshi-regular"
            >
                <Navbar />
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
                <ThemeSelector />
            </div>
        </>
    )
}
