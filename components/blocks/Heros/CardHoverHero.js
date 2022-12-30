import Link from 'next/link'
import Container from '../../generic/Container'
import Image from 'next/image'
import { ArrowDownIcon } from '@radix-ui/react-icons'

export default function CardHoverHero(props) {
    return (
        <div
            id="card-hover-hero"
            className="relative flex min-h-screen items-center justify-start py-8 md:px-12"
        >
            <Container>
                <div id="hero-cta" className="pb-4 text-lg md:pb-2 md:text-xl">
                    <p>Available for work</p>
                    <Link
                        href="/lets-chat"
                        className="font-serif text-xl font-bold md:text-2xl"
                    >
                        &#47;&#47;&#47; Let&apos;s Chat
                    </Link>
                </div>
                <div id="heading">
                    <h1 className="flex flex-col text-6xl md:w-[70%] md:text-9xl">
                        <span className="heading1 w-fit cursor-pointer font-serif font-semibold">
                            Creative
                            <Image
                                src={Object.values(props)[0].projectImage.url}
                                alt={Object.values(props)[0].projectImage.alt}
                                className="image absolute right-6 top-10 h-auto w-96 shadow-md md:top-32 md:right-12 md:w-[30rem]"
                                width={
                                    Object.values(props)[0].projectImage.width
                                }
                                height={
                                    Object.values(props)[0].projectImage.height
                                }
                            />
                        </span>
                        <span className="heading2 cursor-pointer text-right font-thin">
                            Developer
                            <Image
                                src={Object.values(props)[1].projectImage.url}
                                alt={Object.values(props)[1].projectImage.alt}
                                className="image absolute bottom-8 left-12 h-auto w-96 shadow-md"
                                width={
                                    Object.values(props)[1].projectImage.width
                                }
                                height={
                                    Object.values(props)[1].projectImage.height
                                }
                            />
                        </span>
                    </h1>
                </div>
                <div className="absolute right-10 bottom-24 flex space-x-8 md:right-32">
                    <div className="flex h-16 flex-col justify-center text-xl">
                        <h3>Based in Cotswolds</h3>
                        <h3>United Kingdom</h3>
                    </div>
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black bg-opacity-20">
                        <ArrowDownIcon className="h-8 w-8" />
                    </div>
                </div>
            </Container>
        </div>
    )
}
