import clsx from 'clsx'
import BasicImage from '../atoms/assets/BasicImage'

export default function NoiseBG({ children, classNames, gradient, image }) {
    if (gradient) {
        return (
            <div
                id="GradientNoiseBG"
                className={clsx('relative h-full w-full', gradient, classNames)}
            >
                <div className="noise-bg absolute inset-0 z-0" />
                {children}
            </div>
        )
    } else {
        return (
            <div
                id="ImageNoiseBG"
                className={clsx(
                    'light-gradient-bg-reverse relative h-full w-full',
                    classNames
                )}
            >
                <div className="noise-bg absolute inset-0 z-0" />
                <BasicImage
                    data={image}
                    className="h-full w-full object-cover"
                />
            </div>
        )
    }
}
