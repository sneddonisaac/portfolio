import { Carousel, CarouselItem } from '../../generic/carousel'
import Link from 'next/link'
import Image from 'next/image'

export default function CarouselHero(props) {
    console.log(props)
    return (
        <div className="flex h-screen justify-end">
            <Carousel
                containerClasses="w-full h-screen"
                navigation={false}
                infinite={true}
            >
                {Object.values(props).map((item, index) => (
                    <CarouselItem key={index} className="text-black">
                        <Link
                            data-type="link"
                            href={`/work/${item.slug}`}
                            className="interactable relative h-fit w-2/3 text-center"
                        >
                            <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl">
                                <Image
                                    src={item.projectImage.url}
                                    alt={item.projectImage.alt}
                                    width={item.projectImage.width}
                                    height={item.projectImage.height}
                                    className="-z-10 h-auto w-full bg-black bg-opacity-40 object-center"
                                />
                                <div className="absolute inset-0 z-0 h-full w-full rounded-xl bg-black opacity-40" />
                            </div>
                            <div className="absolute inset-0 z-10 flex items-center justify-center">
                                <h1 className="text-6xl font-semibold text-white">
                                    {item.title}
                                </h1>
                            </div>
                        </Link>
                    </CarouselItem>
                ))}
            </Carousel>
        </div>
    )
}
