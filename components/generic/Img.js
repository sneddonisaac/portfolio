import Image from "next/legacy/image";

export default function Img({ data, styles }) {
    return (
        <div
            id="ImgCaptionComponent"
            className={'relative h-full w-full overflow-hidden ' + styles}
        >
            <div
                className={`h-full w-full object-cover object-center ${
                    data.caption && 'pb-6'
                }`}
            >
                <Image
                    className="object-cover object-center"
                    alt={data?.alt}
                    src={data?.url}
                    width={data?.width}
                    height={data?.height}
                />
            </div>
            {data?.caption && (
                <span className="absolute bottom-0 right-0">
                    {data.caption}
                </span>
            )}
        </div>
    )
}
