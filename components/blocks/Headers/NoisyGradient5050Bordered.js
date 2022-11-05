import Container from '@/components/generic/Container'
import clsx from 'clsx'
import dynamic from 'next/dynamic'

const NoiseBG = dynamic(() => import('@/components/generic/NoiseBG'), {
    ssr: false,
})

export default function NoisyGradient5050Bordered(props) {
    return (
        <div id={`block_name: ${props?.__typename}, block_id: ${props?.id}`}>
            <Container>
                <NoiseBG classNames="text-white">
                    <div className="z-10 grid h-fit auto-rows-[_0.5fr] place-content-center gap-16 py-12 px-16 text-center text-white text-white sm:grid-cols-3 sm:text-left">
                        <h1
                            className={clsx(
                                'col-span-2 h-fit font-satoshi-bold text-4xl sm:text-6xl',
                                !props.paragraph && 'col-span-3'
                            )}
                        >
                            {props.NoisyBorderedHeading}
                        </h1>
                        {props.paragraph && (
                            <>
                                <div className="col-span-1 hidden h-fit sm:block" />
                                <div className="col-span-1 hidden sm:block" />
                                <p className="col-span-2 text-justify">
                                    {props.paragraph}
                                </p>
                            </>
                        )}
                    </div>
                </NoiseBG>
            </Container>
        </div>
    )
}
