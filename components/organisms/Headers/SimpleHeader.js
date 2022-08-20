import Container from '@/components/atoms/Container'

export default function SimpleHeader(props) {
    return (
        <Container id={props.__typename}>
            <p className="mb-[1.5rem]">{props?.title}</p>
            <p className="max-w-[85vw] indent-[16.25vw] text-4xl tracking-tight sm:max-w-[50vw]">
                {props?.paragraph}
            </p>
        </Container>
    )
}
