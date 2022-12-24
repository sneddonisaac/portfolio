import { Carousel, CarouselItem } from '../generic/Carousel'

const data = [
    { id: 1, title: 'Item 1' },
    { id: 2, title: 'Item 2' },
    { id: 3, title: 'Item 3' },
]

export default function CarouselTest() {
    return (
        <Carousel
            containerClasses="mx-auto h-screen w-2/3 py-24"
            navigation={false}
        >
            {data.map((item, index) => (
                <CarouselItem key={index} className="text-black">
                    <div className="m-2 h-full w-full bg-white text-center">
                        {item.title}
                    </div>
                </CarouselItem>
            ))}
        </Carousel>
    )
}
