import Navbar from '../components/molecules/Navbar'
import MainCTA from '../components/molecules/MainCTA'
import Meta from '../components/atoms/Meta'
import Footer from "../components/molecules/Footer";

export default function BasicLayout({ children, title }) {
    return (
        <div className='relative font-satoshi-regular'>
            <Meta title={title} />
            <Navbar />
            <div className='relative'>
                {children}
            </div>
            <MainCTA />
            <Footer />
        </div>
    )
}