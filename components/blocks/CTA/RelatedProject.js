import Container from '@/components/generic/Container'
import Link from 'next/link'
import NoiseBG from '@/components/generic/NoiseBG'

export default function RelatedProject({ data, type }) {
    return (
        <Link href={`/${type}/${data?.slug}`}>
            <a>
                <NoiseBG gradient="light-gradient-bg" classNames="text-white">
                    <Container>
                        <div className="group flex flex-col items-center justify-center space-y-12 py-12">
                            <div className="text-center">
                                <span>{data?.client}</span>
                                <h1 className="font-satoshi-bold text-6xl">
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
            </a>
        </Link>
    )
}
