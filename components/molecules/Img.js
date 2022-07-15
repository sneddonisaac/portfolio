import Image from 'next/image';

export default function Img({ data, styles }) {
    return (
        <div className={"relative overflow-hidden " + styles}>
            <div className='pb-6'>
                <Image
                    className="object-cover"
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