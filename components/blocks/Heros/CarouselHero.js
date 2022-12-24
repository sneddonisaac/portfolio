import { Carousel, CarouselItem } from '../../generic/Carousel'
import Link from 'next/link'

export default function CarouselHero(props) {
    console.log(props)
    return (
        <div className="flex h-screen justify-end">
            <Carousel
                containerClasses="w-2/3 h-1/2"
                navigation={false}
                showAll={false}
            >
                {Object.values(props).map((item, index) => (
                    <CarouselItem key={index} className="text-black">
                        <Link
                            href={`/work/${item.slug}`}
                            className="h-full w-full bg-white text-center"
                        >
                            {item.title}
                        </Link>
                    </CarouselItem>
                ))}
            </Carousel>
        </div>
    )
}
