import Container from '@/components/generic/Container'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const NoiseBG = dynamic(() => import('@/components/generic/NoiseBG'), {
    ssr: false,
})

export default function RelatedProject({ data, type }) {
    return (
        <div id="Related Project">
            <Link
                href={`/${type}/${data?.slug}`}
                rel="preload"
                className="interactable"
                data-type="next"
            >
                <NoiseBG classNames="text-white">
                    <Container>
                        <div className="group flex flex-col items-center justify-center space-y-12 py-12">
                            <div className="text-center">
                                <span>{data?.client}</span>
                                <h1 className="text-6xl font-bold">
                                    {data?.title}
                                </h1>
                            </div>

                            <div className="text-3xl">
                                Next Project &rarr;
                                <div className="group-hover:underscore-hover mt-2 h-[2px] w-0 bg-white" />
                            </div>
                        </div>
                    </Container>
                </NoiseBG>
            </Link>
        </div>
    )
}
