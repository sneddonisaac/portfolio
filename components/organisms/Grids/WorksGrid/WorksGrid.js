import Link from "next/link";
import { urlFor } from "../../../../utils/sanity-client";
import { motion } from "framer-motion";

export default function WorksGrid({ data }) {
    return (
        <div className="w-full mx-auto px-10 py-10 lg:max-w-7xl grid grid-cols-1 sm:grid-cols-2 grid-flow-rows gap-6">
            {data?.map((item, index) => (
                <>
                    <motion.div
                        key={item.id + index}
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                        className="w-full col-span-1 relative group overflow-hidden"
                    >
                        <Link href={`/work/${item?.slug.current}`}>
                            <a>
                                {item?.imgUrl
                                    ?
                                    <img className="shadow-sm mb-2 sm:mb-0 w-full object-cover group-hover:scale-105 transition-all duration-300 ease-in-out"
                                        src={urlFor(item?.imgUrl)}
                                    />
                                    : <img className="shadow-sm mb-2 sm:mb-0 w-full border-2 border-black object-cover group-hover:scale-95 transition-all duration-300 ease-in-out" src="https://cdn.sanity.io/images/7c54tqh6/production/1277b4dbbcc3aa383e8608b3fab4de7753ab29cc-2560x1442.png" />
                                }
                                <span className="md:absolute md:inset-0 md:m-auto w-fit h-fit py-1 md:py-3 px-0 md:px-4 text-center md:bg-black md:text-white flex justify-center items-center">
                                    {item?.title}
                                </span>
                            </a>
                        </Link>
                    </motion.div>
                    <div className="w-full md:col-span-1 hidden md:block" role='none' />
                    <div className="w-full md:col-span-1 hidden md:block" role='none' />
                </>
            ))}
        </div>
    )
}