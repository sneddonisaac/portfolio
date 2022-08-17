import Container from "../../atoms/Container";
import clsx from "clsx";

export default function NoisyGradient5050Full(props) {
    console.log(props)
    return (
        <div id={`block_name: ${props?.__typename}, block_id: ${props?.id}`} className='relative'>
            <div className='gradient-bg w-full h-full'>
                <div className='noise-bg absolute inset-0'/>
                <Container>
                    <div className='noise-bg absolute inset-0 z-[-1]'/>
                    <div
                        className='text-white z-10 grid place-content-center auto-rows-[_0.5fr] sm:grid-cols-3 gap-16 py-12 px-16 text-white h-fit text-center sm:text-left'>
                        <h1 className={clsx('text-6xl h-fit font-satoshi-bold col-span-2', !props.paragraph && 'text-center col-span-3')}>
                            {props.NoisyFullHeading}
                        </h1>
                        {props.paragraph && (
                            <>
                                <div className='col-span-1 h-fit hidden sm:block'/>
                                <div className='col-span-1 hidden sm:block'/>
                                <p className='col-span-2'>
                                    {props.paragraph}
                                </p>
                            </>
                        )}
                    </div>
                </Container>
            </div>
        </div>
    )
}