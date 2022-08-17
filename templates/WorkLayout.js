import Navbar from '../components/molecules/Navbar'
import Meta from '../components/atoms/Meta'
import WorkFooter from "../components/molecules/WorkFooter";

export default function WorkLayout({ children, title }) {
    return (
        <div className='relative font-satoshi-regular text-black bg-white'>
            <Meta title={title} />
            <Navbar />
            <div className='relative'>
                {children}
            </div>
            <WorkFooter />
        </div>
    )
}