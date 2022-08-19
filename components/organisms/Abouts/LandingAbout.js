import { motion } from 'framer-motion'

// UI
import ImageWithCaption from '../../atoms/assets/ImageWithCaption'

export default function LandingAbout({ data }) {
    return (
        <div className="flex h-fit w-full items-start justify-end py-8">
            <div className="mt-20 h-3/4 w-full columns-1 gap-10 px-12 py-12 sm:columns-2 md:py-4 md:px-4 lg:w-5/6">
                <div className="relative flex h-full w-full flex-col items-center md:items-start md:justify-between">
                    <div className="pb-6 font-satoshi-bold text-4xl lg:absolute lg:-left-32 lg:top-10 lg:-rotate-90 lg:pr-6">
                        {data?.title}
                    </div>
                    <p className="w-full pb-8 text-justify xl:pb-0">
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
