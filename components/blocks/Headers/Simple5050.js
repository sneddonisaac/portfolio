import Container from '@/components/generic/Container'

export default function Simple5050(data) {
    return (
        <div id={`block_name: ${data?.__typename}, block_id: ${data?.id}`}>
            <Container>
                <div
                    id="content"
                    className="grid grid-rows-3 gap-8 md:grid-cols-2 md:grid-rows-1"
                >
                    <h1
                        id="heading"
                        className="row-span-1 font-satoshi-medium text-6xl leading-snug"
                    >
                        {data?.SimpleHeading}
                    </h1>
                    <p
                        id="paragraph"
                        className=" row-span-2 pt-8 font-satoshi-medium text-lg md:pt-0"
                    >
                        {data?.paragraph}
                    </p>
                </div>
            </Container>
        </div>
    )
}
