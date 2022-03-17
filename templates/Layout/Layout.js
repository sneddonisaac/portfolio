import Navbar from '../../components/molecules/Navbar'
import Footer from '../../components/molecules/Footer'
import Meta from '../../components/atoms/Meta'
import Link from 'next/link'
import { EnvelopeClosedIcon, InstagramLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import CustomCursor from '../../components/atoms/CustomCursor'

export default function Layout({ children, title }) {
    return (
        <div className='relative font-satoshi-regular text-black bg-white'>
            {/* <CustomCursor /> */}
            <Meta title={title} />
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}