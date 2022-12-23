import React, { useState } from 'react'
import clsx from 'clsx'

function CarouselItem({ children, width }) {
    return (
        <div className="carousel-item" style={{ width: width }}>
            {children}
        </div>
    )
}

function Carousel({ children, className }) {
    const [activeIndex, setActiveIndex] = useState(0)

    function updateIndex(newIndex) {
        if (newIndex < 0) {
            newIndex = 0
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = React.Children.count(children) - 1
        }

        setActiveIndex(newIndex)
    }
    return (
        <div className={clsx('carousel', className)}>
            <div
                className="inner"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
                {React.Children.map(children, (child) => {
                    return React.cloneElement(child, { width: '100%' })
                })}
            </div>
            <div className="indicators">
                <button
                    onClick={() => {
                        updateIndex(activeIndex - 1)
                    }}
                >
                    Prev
                </button>
                <button
                    onClick={() => {
                        updateIndex(activeIndex + 1)
                    }}
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export { CarouselItem, Carousel }
