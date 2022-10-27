import Link from 'next/link'
import NoiseBG from '@/components/generic/NoiseBG'
import Container from '@/components/generic/Container'

export default function MainCTA() {
    return (
        <div id="Footer">
            <NoiseBG
                classNames="flex justify-center items-center text-white"
                gradient="light-gradient-bg-reverse"
            >
                <Container>
                    <div className="z-10 flex w-full flex-col items-center justify-center sm:flex-row sm:justify-around">
                        <span className="mb-6 font-satoshi-bold text-5xl sm:mb-0">
                            Get in touch.
                        </span>
                        <div className="flex flex-col items-center justify-center whitespace-nowrap sm:flex-row">
                            <Link href="mailto:hello@isaacsneddonjenkins.co.uk">
                                <a className="cursor-pointer border border-2 border-white py-4 px-6 text-white transition-all duration-300 ease-in-out hover:bg-white hover:text-black sm:mr-6">
                                    Email Me
                                </a>
                            </Link>
                            <Link href="https://www.buymeacoffee.com/sneddonisaac">
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 cursor-pointer border border-2 border-white bg-white py-4 px-6 text-black transition-all duration-300 ease-in-out hover:bg-transparent hover:text-white sm:mt-0"
                                >
                                    Buy Me A Coffee
                                </a>
                            </Link>
                        </div>
                    </div>
                </Container>
            </NoiseBG>
        </div>
    )
}
