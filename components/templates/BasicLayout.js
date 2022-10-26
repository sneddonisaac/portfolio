import Navbar from '@/components/generic/Navbar'
import Meta from '@/components/generic/Meta'
import Footer from '@/components/generic/Footer'
import ThemeSelector from '@/components/generic/ThemeSelector'
import NewProjectChat from '../blocks/CTA/new-project-chat'

export default function BasicLayout({ children, title, desc, cta = true }) {
    return (
        <div id="BasicLayout" className="relative font-satoshi-regular">
            <Meta title={title} desc={desc} />
            <Navbar />
            <main className="relative">{children}</main>
            {cta && <NewProjectChat />}
            <Footer />
            <ThemeSelector />
        </div>
    )
}
