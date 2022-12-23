import Container from '../../generic/Container'
import Image from 'next/image'

export default function FullPageScreenshot(props) {
    return (
        <Container id={props.__typename}>
            <p className="mb-[1.5rem]">{props?.title}</p>
            <div className="flex sm:justify-end">
                <Image
                    className="w-full sm:w-1/2"
                    src={props.image.url}
                    alt={props.image.alt}
                    width={props.image.width}
                    height={props.image.height}
                />
            </div>
        </Container>
    )
}
