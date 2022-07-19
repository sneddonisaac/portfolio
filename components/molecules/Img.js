import Image from 'next/image';

export default function Img({ data, styles }) {
    return (
        <div id='ImgCaptionComponent' className={"relative overflow-hidden w-full h-full " + styles}>
            <div className={`object-cover object-center w-full h-full ${data.caption && 'pb-6'}`}>
                <Image
                    className="object-cover object-center"
                    alt={data?.altText}
                    src={data?.image.url}
                    width={data?.image.width}
                    height={data?.image.height}
                />
            </div>
            {data?.caption && <span className="absolute bottom-0 right-0">{data.caption}</span>}
        </div>
    )
}