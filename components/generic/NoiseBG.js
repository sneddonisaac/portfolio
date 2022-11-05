import clsx from 'clsx'
import BasicImage from '@/components/generic/assets/BasicImage'
import { Gradient } from './assets/Gradient.js'

export default function NoiseBG({
    children,
    gradientType,
    classNames,
    canvas = true,
}) {
    const gradient = new Gradient()
    gradient.initGradient(`#gradient-canvas`)

    return canvas ? (
        <div
            id="CanvasNoiseBG"
            className={clsx('relative h-full w-full', classNames)}
        >
            <canvas
                id={`gradient-canvas`}
                data-js-darken-top
                data-transition-in
                className="noise-bg absolute inset-0 z-0"
            />
            <div className="relative">{children}</div>
        </div>
    ) : (
        <div
            id="GradientNoiseBG"
            className={clsx('relative h-full w-full', gradientType, classNames)}
        >
            <div className="noise-bg absolute inset-0 z-0" />
            {children}
        </div>
    )
}

function ImageNoiseBg({ classNames, image }) {
    return (
        <div
            id="ImageNoiseBG"
            className={clsx(
                'light-gradient-bg-reverse relative h-full w-full',
                classNames
            )}
        >
            <canvas
                id="gradient-canvas"
                data-js-darken-top
                data-transition-in
                className="absolute inset-0 z-0"
            />
            <BasicImage
                data={image}
                className="relative h-full w-full object-cover"
            />
        </div>
    )
}
