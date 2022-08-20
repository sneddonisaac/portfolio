import Container from '@/components/atoms/Container'
import Link from 'next/link'
import NoiseBG from '@/components/molecules/NoiseBG'

export default function RelatedProject(props) {
    return (
        <Link href={`/work/${props?.slug}`}>
            <a>
                <NoiseBG gradient="light-gradient-bg" classNames="text-white">
                    <Container>
                        <div className="group flex flex-col items-center justify-center space-y-12 py-12">
                            <div className="text-center">
                                <span>{props?.client}</span>
                                <h1 className="font-satoshi-bold text-6xl">
                                    {props?.title}
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
