import { useEffect, useRef } from 'react'
import clsx from 'clsx'
import internal from 'stream'

export default function Progress({ value, className }) {
    let ref = useRef(null)
    let radius,
        circumference,
        interval = 360,
        timer

    timer = setInterval(() => {
        interval = interval + 1
    }, value / 1000)

    useEffect(() => {
        if (ref) {
            let circle = ref.current
            radius = circle.r.baseVal.value
            circumference = radius * 2 * Math.PI

            circle.style.strokeDasharray = `${circumference} ${circumference}`
            circle.style.strokeDashoffset = `${circumference}`

            function setProgress(percent) {
                const offset = circumference - (percent / 100) * circumference
                circle.style.strokeDashoffset = offset
            }

            setProgress(interval)
        }
    }, [ref, interval])

    return (
        <svg
            className={clsx('progress-ring', className)}
            width="120"
            height="120"
        >
            <circle
                ref={ref}
                className="progress-ring__circle"
                stroke="white"
                strokeWidth="4"
                fill="transparent"
                r="52"
                cx="60"
                cy="60"
            />
        </svg>
    )
}
