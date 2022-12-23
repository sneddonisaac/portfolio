import { Carousel, CarouselItem } from '../generic/Carousel'

const data = [
    { id: 1, title: 'Item 1' },
    { id: 2, title: 'Item 2' },
    { id: 3, title: 'Item 3' },
]

export default function CarouselTest() {
    return (
        <Carousel className="mx-auto h-screen w-1/2 py-12">
            {data.map((item, index) => (
                <CarouselItem key={index}>{item.title}</CarouselItem>
            ))}
        </Carousel>
    )
}
