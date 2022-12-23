import { useEffect, useRef, useState } from 'react'
import {
    ArrowRightIcon,
    ArrowTopRightIcon,
    CheckIcon,
    CursorTextIcon,
    HomeIcon,
    ImageIcon,
    OpenInNewWindowIcon,
    Share1Icon,
    SwitchIcon,
} from '@radix-ui/react-icons'

export default function Cursor() {
    const ref = useRef(null)
    const [Icon, setIcon] = useState(ArrowTopRightIcon)

    useEffect(() => {
        if (ref.current == null) return

        let trailer = ref.current

        const animateTrailer = (e, interacting) => {
            let x = e.clientX - trailer.offsetWidth / 2
            let y = e.clientY - trailer.offsetHeight / 2

            const keyframes = {
                transform: `translate(${x}px, ${y}px) scale(${
                    interacting ? 4 : 1
                })`,
            }

            trailer.animate(keyframes, {
                duration: 800,
                fill: 'forwards',
            })
        }

        const getTrailerClass = (type) => {
            switch (type) {
                case 'image':
                    return ImageIcon
                case 'switch':
                    return SwitchIcon
                case 'next':
                    return ArrowRightIcon
                case 'social':
                    return Share1Icon
                case 'home':
                    return HomeIcon
                case 'new-window':
                    return OpenInNewWindowIcon
                case 'submit':
                    return CheckIcon
                case 'input':
                    return CursorTextIcon
                default:
                    return ArrowTopRightIcon
            }
        }

        window.onmousemove = (e) => {
            const interactable = e.target.closest('.interactable'),
                interacting = interactable !== null

            animateTrailer(e, interacting)

            trailer.dataset.type = interacting ? interactable.dataset.type : ''

            if (interacting) {
                setIcon(getTrailerClass(interactable.dataset.type))
            }
        }
    }, [])

    return (
        <div
            className="border-2 border-black bg-black bg-opacity-60 dark:border-white dark:bg-white dark:bg-opacity-60"
            id="cursor"
            ref={ref}
        >
            <Icon
                id="cursor-icon"
                className="h-auto w-1/2 text-white dark:text-black"
            />
        </div>
    )
}
