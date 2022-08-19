import ImageTypes from '../../../types/ImageTypes'

type Props = {
    className?: string
    data: ImageTypes
}

export default function BasicImage({ data, className }: Props) {
    return (
        <picture>
            <img
                className={className}
                src={data.url}
                alt={data.alt}
                width={data.width}
                height={data.height}
                id={data.id}
            />
        </picture>
    )
}
