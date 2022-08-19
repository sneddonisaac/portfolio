// Libs
import Link from 'next/link'
import { motion } from 'framer-motion'

// UI
import BasicImage from '../../atoms/assets/BasicImage'

export default function WorksGrid({ data }) {
    return (
        <div className="grid-flow-rows mx-auto grid w-full grid-cols-1 gap-6 px-10 py-10 sm:grid-cols-2 lg:max-w-7xl">
            {data?.map((item, index) => (
                <>
                    <Card item={item} key={index + item?.id} />
                    <div
                        className="hidden w-full md:col-span-1 md:block"
                        role="none"
                    />
                    <div
                        className="hidden w-full md:col-span-1 md:block"
                        role="none"
                    />
                </>
            ))}
        </div>
    )
}

function Card({ item }) {
    return (
        <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="group relative col-span-1 w-full overflow-hidden"
        >
            <Link href={`/work/${item?.slug}`}>
                <a>
                    {item.projectImage ? (
                        <BasicImage
                            data={item?.projectImage}
                            className="h-full w-full border-2 border-black object-cover shadow-sm transition-all duration-300 ease-in-out group-hover:scale-105"
                        />
                    ) : (
                        <picture>
                            <img
                                className="w-full border-2 border-black object-cover shadow-sm transition-all duration-300 ease-in-out group-hover:scale-105"
                                alt="blank image for presentation"
                                role="presentation"
                                src="https://media.graphassets.com/RvMwK0BcSQaATVrGnbdF"
                            />
                        </picture>
                    )}
                    <span className="flex h-fit w-fit items-center justify-center py-1 px-0 text-center md:absolute md:inset-0 md:m-auto md:bg-black md:py-3 md:px-4 md:text-white">
                        {item?.title}
                    </span>
                </a>
            </Link>
        </motion.div>
    )
}
