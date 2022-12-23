import BasicLayout from '@/components/templates/BasicLayout'
import LetsChatForm from '@/components/forms/lets-chat-form'
import Container from '../components/generic/Container'

export default function LetsChat() {
    return (
        <BasicLayout cta={false}>
            <Container classname="flex flex-col items-center justify-center text-center pt-32">
                <p className="text-xl">
                    Got an exciting idea, or a new project you are working on?
                </p>
                <h1 className="mb-10 mt-6 text-6xl font-bold">
                    Let&apos;s Chat.
                </h1>
                <LetsChatForm />
            </Container>
        </BasicLayout>
    )
}
