import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons'

function CarouselItem({ children, width, className }) {
    return (
        <div
            className={clsx('carousel-item', className)}
            style={{ width: width }}
        >
            {children}
        </div>
    )
}

function Carousel({
    children,
    innerClasses,
    containerClasses,
    navigation = true,
    navType = 'text',
    position = 'bottom',
    showAll = true,
    gap = '1rem',
    infinite = true,
}) {
    const [activeIndex, setActiveIndex] = useState(0)
    function updateIndex(newIndex) {
        if (infinite) {
            if (newIndex < 0) {
                newIndex = React.Children.count(children) - 1
            } else if (newIndex >= React.Children.count(children)) {
                newIndex = 0
            }
        } else {
            if (newIndex < 0) {
                newIndex = 0
            } else if (newIndex >= React.Children.count(children)) {
                newIndex = React.Children.count(children) - 1
            }
        }
        setActiveIndex(newIndex)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            updateIndex(activeIndex + 1)
        }, 5000)

        return () => {
            if (interval) {
                clearInterval(interval)
            }
        }
    })

    return (
        <div data-show={showAll} className={clsx('carousel', containerClasses)}>
            <div
                className={clsx('inner', innerClasses)}
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
                {React.Children.map(children, (child) => {
                    return React.cloneElement(child, {
                        width: '100%',
                    })
                })}
            </div>
            {navigation && (
                <div
                    data-position={position}
                    data-type={navType}
                    className="indicators"
                >
                    <button
                        onClick={() => {
                            updateIndex(activeIndex - 1)
                        }}
                    >
                        {navType === 'text' ? (
                            'Prev'
                        ) : (
                            <ArrowLeftIcon className="h-8 w-8" />
                        )}
                    </button>
                    <button
                        onClick={() => {
                            updateIndex(activeIndex + 1)
                        }}
                    >
                        {navType === 'text' ? (
                            'Next'
                        ) : (
                            <ArrowRightIcon className="h-8 w-8" />
                        )}
                    </button>
                </div>
            )}
        </div>
    )
}

export { CarouselItem, Carousel }
