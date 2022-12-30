import Link from 'next/link'

export default function Header() {
    return (
        <div
            id="Header"
            className="fixed z-[130] flex items-center justify-between px-5 pt-12 text-5xl sm:p-20"
        >
            <Link href="/" className="interactable" data-type="home">
                ISJ
            </Link>
        </div>
    )
}
