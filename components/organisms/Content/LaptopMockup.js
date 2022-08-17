export default function LaptopMockup({data}) {
    return (
        <div className='pb-20 px-8'>
            <Mockup {...data} />
        </div>
    )
}

function Mockup(props) {
    return (
        <div id={`device_id: ${props.id}`} className="relative h-[10rem] md:h-[30rem] xl:h-[50rem] flex justify-center items-center">
            <DeviceImage {...props.projectImage} />
        </div>
    )
}

function DeviceImage(props) {
    return (
        <div id="DeviceImage" className="relative h-full w-full flex justify-center items-center">
            <FeaturedImage {...props} />
            <picture className="w-full h-full absolute inset-0 object-contain object-center overflow-hidden z-10">
                <img className="object-cover object-center h-full overflow-hidden z-10"
                     src="/device-mbp-15.png" alt='iphone 13 no notch'
                />
            </picture>
        </div>
    )
}

function FeaturedImage(props) {
    return (
        <div id={`FeaturedImage: ${props.fileName}`} className='absolute top-0 mx-auto w-[75%] h-auto'>
            <picture>
                <img
                    className='object-contain h-full w-fit object-center overflow-clip rounded-[10%/5%] mt-[0.2vw] after:bg-[url("/device-mbp-15.png")]'
                    src={props.url}
                    alt={props.alt}/>
            </picture>
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