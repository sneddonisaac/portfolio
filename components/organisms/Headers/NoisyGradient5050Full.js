import Container from "../../atoms/Container";

export default function NoisyGradient5050Full(props) {
    console.log(props)
    return (
        <div id={`block_name: ${props?.__typename}, block_id: ${props?.id}`} className='relative'>
            <div className='gradient-bg w-full h-full'>
                <div className='noise-bg absolute inset-0'/>
                <Container>
                    <div
                        className='grid place-content-center auto-rows-[_0.5fr] sm:grid-cols-3 gap-16 text-white h-fit'>
                        <h1 className='text-white text-6xl h-fit font-satoshi-bold col-span-2'>{props.NoisyFullHeading}</h1>
                        <div className='col-span-1 h-fit hidden sm:block'/>
                        <div className='col-span-1 hidden sm:block'/>
                        <p className='col-span-2'>
                            {props.paragraph}
                        </p>
                    </div>
                </Container>
            </div>
        </div>
    )
}