import Image from 'next/image'

export default function LaptopMockup({ data }) {
    return (
        <div className="px-8 pb-20">
            <Mockup {...data} />
        </div>
    )
}

function Mockup(props) {
    return (
        <div
            id={`device_id: ${props.id}`}
            className="relative flex h-[10rem] items-center justify-center md:h-[30rem] xl:h-[50rem]"
        >
            <DeviceImage {...props.projectImage} />
        </div>
    )
}

function DeviceImage(props) {
    return (
        <div
            id="DeviceImage"
            className="relative flex h-full w-full items-center justify-center"
        >
            <FeaturedImage {...props} />
            <picture className="absolute inset-0 z-10 h-full w-full overflow-hidden object-contain object-center">
                <Image
                    className="z-10 h-full overflow-hidden object-cover object-center"
                    src="/public/device-mbp-15.png"
                    alt="iphone 13 no notch"
                />
            </picture>
        </div>
    )
}

function FeaturedImage(props) {
    return (
        <div
            id={`FeaturedImage: ${props.fileName}`}
            className="absolute top-0 mx-auto h-auto w-[75%]"
        >
            <picture>
                <img
                    className='mt-[0.2vw] h-full w-fit overflow-clip rounded-[10%/5%] object-contain object-center after:bg-[url("/device-mbp-15.png")]'
                    src={props.url}
                    alt={props.alt}
                />
            </picture>
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
