import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
    const cursorRef = useRef(null)
    const [expand, setExpand] = useState(false)

    useEffect(() => {
        if (cursorRef.current == null || cursorRef == null) return
        document.addEventListener('mousemove', (e) => {
            if (cursorRef.current == null) return
            var pageX = e.pageX
            var pageY = e.pageY
            cursorRef.current.setAttribute(
                'style',
                'top: ' + pageY + 'px; left: ' + pageX + 'px;'
            )
        })

        document.addEventListener(
            'mouseover',
            (e) => {
                let el = document.querySelectorAll('a')
                for (let i = 0; i < el.length; i++) {
                    const element = el[i]
                    if (element === document.getElementById('link'))
                        setExpand(true)
                }
            },
            false
        )
        /* document.addEventListener('mouseleave', (e) => {
            let el = document.querySelectorAll("a")
            for (let i = 0; i < el.length; i++) {
                const element = el[i];
                if (element === document.getElementById('link')) setExpand(false)
            }
        }, false) */
    }, [])

    return (
        <div
            className={`absolute z-[150] h-10 w-10 cursor-none rounded-full bg-black transition-all duration-200 ease-out ${
                expand ? 'bg-red-600' : ''
            }`}
            ref={cursorRef}
        />
    )
}
