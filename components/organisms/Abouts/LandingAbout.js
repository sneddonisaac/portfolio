import { motion } from 'framer-motion'

// UI
import ImageWithCaption from "../../atoms/assets/ImageWithCaption"

export default function LandingAbout({ data }) {
    return (
        <div className="h-fit w-full flex justify-end items-start py-8">
            <div className="lg:w-5/6 w-full px-12 py-12 md:py-4 md:px-4 h-3/4 mt-20 columns-1 sm:columns-2 gap-10">
                <div className="h-full w-full relative flex flex-col md:justify-between items-center md:items-start">
                    <div className="lg:-rotate-90 lg:absolute lg:-left-32 lg:top-10 text-4xl lg:pr-6 pb-6 font-satoshi-bold">{data?.title}</div>
                    <p className="w-full text-justify pb-8 xl:pb-0">
                        {data?.paragraph}
                    </p>
                </div>
                {data?.image.url && (
                    <motion.div
                        className="relative overflow-hidden"
                        initial={{ x: '100%' }}
                        whileInView={{ translateX: '-100%' }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                    >
                        <ImageWithCaption data={data?.image} />
                    </motion.div>
                )}
            </div>
        </div>
    )
}