import Container from '@/components/generic/Container'
import Link from 'next/link'

export default function LetsTalk() {
    return (
        <div id="Let's Talk CTA" className="my-16 h-fit w-full">
            <Container classname="justify-center items-center flex">
                <div className="flex w-full flex-col items-center justify-center text-center sm:w-3/4">
                    <h1 className="mb-10 text-4xl font-bold sm:text-6xl">
                        I occasionally take on freelance opportunities.
                    </h1>
                    <p className="w-full text-center sm:w-3/4 sm:text-xl">
                        Have an exciting project where you need some help? Send
                        me over a message, and{' '}
                        <Link
                            href="/lets-chat"
                            data-type="link"
                            className="interactable decoration-3 underline underline-offset-4 transition-all duration-300 ease-in-out hover:text-orange-600 hover:decoration-orange-600"
                        >
                            let&apos;s chat.
                        </Link>
                    </p>
                </div>
            </Container>
        </div>
    )
}
