import Image from "next/image";
import Container from "../../atoms/Container";

export default function TripleMobileMockup({data}) {
    return (
        <div id={`block_name: ${data?.__typename}, block_id: ${data?.id}`} className="bg-black bg-opacity-10">
            <Container>
                <div
                    className="py-12 relative grid grid-rows-3 grid-cols-1 lg:grid-rows-1 gap-8 lg:grid-cols-3 justify-center items-center">
                    {data.assets.map((item, index) => (
                        <Mockup key={index} data={item}/>
                    ))}
                </div>
            </Container>
        </div>
    )
}

function Mockup({data}) {
    return (
        <div id={`device_id: ${data.id}`} className="relative h-[30rem] flex justify-center items-center">
            <DeviceImage data={data}/>
        </div>
    )
}

function DeviceImage({data}) {
    return (
        <div id="DeviceImage" className="w-fit absolute h-full flex justify-center items-center">
            {data.video ? <FeaturedVideo video={data.video}/> : <FeaturedImage image={data.image}/>}
            <picture className="object-cover object-center h-full overflow-hidden z-10">
                <img className="object-cover object-center h-full overflow-hidden z-10"
                     src="/device-iphone13-nonotch.png" alt='iphone 13 no notch'
                />
            </picture>
        </div>
    )
}

function FeaturedImage({image}) {
    return (
        <div id={`FeaturedImage: ${image.fileName}`} className="absolute w-[90%] h-[98%] z-0">
            <Image className="object-cover h-full object-center overflow-clip rounded-[10%/5%]" src={image.url}
                   layout="fill" alt={image.fileName}/>
        </div>
    )
}

function FeaturedVideo({video}) {
    return (
        <div id={`FeaturedVideo: Video`} className="absolute w-[90%] h-[98%] z-0">
            {video &&
                <video className="object-cover object-center h-full overflow-clip rounded-[10%/5%]"
                       controls='' playsInline loop muted autoPlay>
                    <source src={video.url}/>
                </video>
            }
        </div>
    )
}