import Navbar from '../components/molecules/Navbar'
import MainCTA from '../components/molecules/MainCTA'
import Meta from '../components/atoms/Meta'
import Footer from '../components/molecules/Footer'
import ThemeSelector from '../components/atoms/ThemeSelector'

export default function BasicLayout({ children, title, desc }) {
    return (
        <div id="BasicLayout" className="relative font-satoshi-regular">
            <Meta title={title} desc={desc} />
            <Navbar />
            <main className="relative">{children}</main>
            <MainCTA />
            <Footer />
            <ThemeSelector />
        </div>
    )
}
