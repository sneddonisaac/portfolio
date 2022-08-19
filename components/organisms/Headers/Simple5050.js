import Container from "../../atoms/Container";

export default function Simple5050({data}) {
    return (
        <div id={`block_name: ${data?.__typename}, block_id: ${data?.id}`}>
            <Container>
                <div id="content" className="grid grid-rows-3 md:grid-rows-1 md:grid-cols-2 gap-8">
                    <h1 id="heading" className="text-6xl font-satoshi-medium row-span-1">{data?.SimpleHeading}</h1>
                    <p id="paragraph" className=" text-lg font-satoshi-medium pt-8 md:pt-0 row-span-2">{data?.paragraph}</p>
                </div>
            </Container>
        </div>
    )
}