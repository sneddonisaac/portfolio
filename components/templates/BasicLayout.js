import Navbar from '@/components/generic/Navbar'
import Meta from '@/components/generic/Meta'
import Footer from '@/components/generic/Footer'
import LetsTalk from '../blocks/CTA/LetsTalk'
import Header from '../generic/Header'

export default function BasicLayout({ children, title, desc, cta = true }) {
    return (
        <div id="BasicLayout" className="relative font-satoshi-regular">
            <Meta title={title} desc={desc} />
            <Header />
            <main className="relative">{children}</main>
            {cta && <LetsTalk />}
            <Footer />
            <Navbar />
        </div>
    )
}