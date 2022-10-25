import Image from 'next/image'
import Container from '@/components/generic/Container'

export default function TripleMobileMockup(data) {
    return (
        <div
            id={`block_name: ${data?.__typename}, block_id: ${data?.id}`}
            className="bg-black bg-opacity-10 dark:bg-gray-500"
        >
            <Container>
                <div className="relative grid grid-cols-1 grid-rows-3 items-center justify-center gap-8 py-12 lg:grid-cols-3 lg:grid-rows-1">
                    {data.assets.map((item, index) => (
                        <Mockup key={index} data={item} />
                    ))}
                </div>
            </Container>
        </div>
    )
}

function Mockup({ data }) {
    return (
        <div
            id={`device_id: ${data.id}`}
            className="relative flex h-[30rem] items-center justify-center"
        >
            <DeviceImage data={data} />
        </div>
    )
}

function DeviceImage({ data }) {
    return (
        <div
            id="DeviceImage"
            className="absolute flex h-full w-fit items-center justify-center"
        >
            {data.video ? (
                <FeaturedVideo video={data.video} />
            ) : (
                <FeaturedImage image={data.image} />
            )}
            <picture className="z-10 h-full overflow-hidden object-cover object-center">
                <img
                    className="z-10 h-full overflow-hidden object-cover object-center"
                    src="/public/device-iphone13-nonotch.png"
                    alt="iphone 13 no notch"
                />
            </picture>
        </div>
    )
}

function FeaturedImage({ image }) {
    return (
        <div
            id={`FeaturedImage: ${image.fileName}`}
            className="absolute z-0 h-[98%] w-[90%]"
        >
            <Image
                className="h-full overflow-clip rounded-[10%/5%] object-cover object-center"
                src={image.url}
                layout="fill"
                alt={image.fileName}
            />
        </div>
    )
}

function FeaturedVideo({ video }) {
    return (
        <div
            id={`FeaturedVideo: Video`}
            className="absolute z-0 h-[98%] w-[90%]"
        >
            {video && (
                <video
                    className="h-full overflow-clip rounded-[10%/5%] object-cover object-center"
                    controls=""
                    playsInline
                    loop
                    muted
                    autoPlay
                >
                    <source src={video.url} />
                </video>
            )}
        </div>
    )
}
