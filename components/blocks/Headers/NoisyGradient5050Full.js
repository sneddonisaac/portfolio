import Container from '../../generic/Container'
import clsx from 'clsx'
import NoiseBG from '@/components/generic/NoiseBG'

export default function NoisyGradient5050Full(props) {
    return (
        <div
            id={`block_name: ${props?.__typename}, block_id: ${props?.id}`}
            className="relative"
        >
            <NoiseBG classNames="text-white">
                <Container>
                    <div className="z-10 grid h-fit auto-rows-[_0.5fr] place-content-center gap-16 py-12 px-16 text-center text-white text-white sm:grid-cols-3 sm:text-left">
                        <h1
                            className={clsx(
                                'col-span-2 h-fit font-satoshi-bold text-6xl',
                                !props.paragraph && 'col-span-3 text-center'
                            )}
                        >
                            {props.NoisyFullHeading}
                        </h1>
                        {props.paragraph && (
                            <>
                                <div className="col-span-1 hidden h-fit sm:block" />
                                <div className="col-span-1 hidden sm:block" />
                                <p className="col-span-2">{props.paragraph}</p>
                            </>
                        )}
                    </div>
                </Container>
            </NoiseBG>
        </div>
    )
}
