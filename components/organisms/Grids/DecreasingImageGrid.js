// Lib
import clsx from 'clsx'

// UI
import Container from '../../atoms/Container'

export default function DecreasingImageGrid(data) {
    return (
        <div id={`block_name: ${data?.__typename}, block_id: ${data?.id}`}>
            <Container>
                <div
                    className={clsx(
                        data.thinWideImage
                            ? 'lg:grid-rows-5'
                            : 'lg:grid-rows-4',
                        'grid w-full grid-flow-row grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-7'
                    )}
                >
                    <Img
                        data={data.largeSquareImage}
                        styles="lg:col-span-3 lg:row-span-3 md:col-span-2 aspect-square"
                    />
                    <Img
                        data={data.tallThinImage}
                        styles="lg:col-span-2 lg:row-span-3 md:col-span-1"
                    />
                    <Img
                        data={data.smallSquareImage}
                        styles="lg:col-span-2 lg:row-span-2 md:col-span-3"
                    />
                    <div
                        className={clsx(
                            'col-span-2 row-span-1 hidden lg:flex',
                            data.thinWideImage ? 'flex' : 'hidden'
                        )}
                    />
                    <Img
                        data={data.thinWideImage}
                        styles="lg:col-span-3 lg:row-span-2 md:col-span-3"
                    />
                </div>
            </Container>
        </div>
    )
}

function Img({ data, styles }) {
    return (
        <picture
            id={data?.id}
            className={`${styles} h-full w-full overflow-clip border-2 md:border-0`}
        >
            <img
                className="h-full object-cover object-center lg:object-contain"
                src={data.url}
                width={data.width}
                height={data.height}
                alt={data.fileName}
            />
        </picture>
    )
}
