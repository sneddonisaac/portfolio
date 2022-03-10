import Navbar from '../../components/molecules/Navbar'
import Footer from '../../components/molecules/Footer'
import Meta from '../../components/atoms/Meta'

export default function Layout({ children, title }) {
    return (
        <div className='relative font-satoshi-regular text-black bg-white'>
            <Meta title={title} />
            <Navbar />
            { children }
            <Footer />
        </div>
    )
}