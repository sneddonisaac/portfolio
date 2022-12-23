import { ImageTypes } from '../../../types/ImageTypes'
import Image from 'next/image'

type Props = {
    className?: string
    data: ImageTypes
}

export default function BasicImage({ data, className }: Props) {
    return (
        <Image
            className={className}
            src={data.url}
            alt={data.alt}
            width={data.width}
            height={data.height}
            id={data.id}
        />
    )
}
