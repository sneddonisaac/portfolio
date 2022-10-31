import Link from 'next/link'

export default function Header() {
    return (
        <div
            id="Header"
            className="fixed z-[130] flex items-center justify-between px-5 pt-12 font-satoshi-bold text-5xl sm:px-20"
        >
            <Link href="/">
                <a id="interactable" data-type="link">
                    Isaac.
                </a>
            </Link>
        </div>
    )
}
