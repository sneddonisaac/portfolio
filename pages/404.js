import BasicLayout from '../components/templates/BasicLayout'
import Link from 'next/link'

export default function ErrorPage() {
    return (
        <BasicLayout>
            <div className="flex min-h-[60vh] flex-col items-center justify-center">
                <div id="scroll">
                    <div id="scroll-title">
                        <div>
                            <h1>404&nbsp;</h1>
                            <h1>404&nbsp;</h1>
                            <h1>404&nbsp;</h1>
                            <h1>404&nbsp;</h1>
                            <h1>404&nbsp;</h1>
                            <h1>404&nbsp;</h1>
                            <h1>404&nbsp;</h1>
                            <h1>404&nbsp;</h1>
                            <h1>404&nbsp;</h1>
                            <h1>404&nbsp;</h1>
                            <h1>404&nbsp;</h1>
                            <h1>404&nbsp;</h1>
                            <h1>404&nbsp;</h1>
                        </div>
                    </div>
                </div>
            </div>
            <p className="-mt-16 text-center text-3xl">
                It looks like you are lost,{' '}
                <Link
                    href="/"
                    id="interactable"
                    data-type="home"
                    className="decoration-3 underline underline-offset-4 transition-all duration-300 ease-in-out hover:text-orange-600 hover:decoration-orange-600"
                >
                    let&apos;s get you back.
                </Link>
            </p>
        </BasicLayout>
    )
}
