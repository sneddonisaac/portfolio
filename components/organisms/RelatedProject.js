import Container from "../atoms/Container";
import Link from "next/link";
import NoiseBG from "../molecules/NoiseBG";

export default function RelatedProject(props) {
    return (
        <Link href={`/work/${props?.slug}`}>
            <a>
                <NoiseBG gradient='light-gradient-bg' classNames='text-white'>
                    <Container>
                        <div className='py-12 flex flex-col justify-center items-center group space-y-12'>
                            <div className='text-center'>
                            <span>{props?.client}</span>
                            <h1 className='text-6xl font-satoshi-bold'>{props?.title}</h1>
                            </div>

                            <div className='text-3xl'>
                                Next Project &rarr;
                                <div className='group-hover:underscore-hover h-[2px] w-0 mt-2 bg-white' />
                            </div>
                        </div>
                    </Container>
                </NoiseBG>
            </a>
        </Link>
    )
}