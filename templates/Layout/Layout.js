import Navbar from '../../components/molecules/Navbar'
import Footer from '../../components/molecules/Footer'

export default function Layout({ children }) {
    return (
        <div className='relative font-satoshi-regular text-black bg-white'>
            <Navbar />
            { children }
            <Footer />
        </div>
    )
}