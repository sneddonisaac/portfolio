import Link from 'next/link'

export default function Footer() {
    return (
        <div id='Footer' className="bg-black text-white flex justify-center items-center py-20">
            <div className='w-full sm:w-2/3 flex flex-col justify-center sm:justify-evenly items-center sm:flex-row'>
                <span className='text-5xl font-satoshi-bold mb-6 sm:mb-0'>Get in touch.</span>
                <div className='flex flex-col justify-center items-center sm:flex-row whitespace-nowrap'>
                    <Link href='mailto:hello@isaacsneddonjenkins.co.uk'>
                        <a className='py-4 px-6 sm:mr-6 cursor-pointer border border-2 border-white bg-white text-black hover:bg-black hover:text-white transition-all duration-300 ease-in-out'>
                            Email Me
                        </a>
                    </Link>
                    <Link href='https://www.buymeacoffee.com/sneddonisaac'>
                        <a target='_blank' rel='noopener noreferrer' className='py-4 px-6 cursor-pointer border border-2 mt-4 sm:mt-0 border-white bg-black text-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out'>
                            Buy Me A Coffee
                        </a>
                    </Link>
                </div>
            </div>

        </div>
    )
}