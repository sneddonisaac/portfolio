// Libs
import Link from "next/link";
import {motion} from "framer-motion";

// UI
import BasicImage from "../../atoms/assets/BasicImage"

export default function WorksGrid({data}) {
    return (
        <div className="w-full mx-auto px-10 py-10 lg:max-w-7xl grid grid-cols-1 sm:grid-cols-2 grid-flow-rows gap-6">
            {data?.map((item, index) => (
                <>
                    <Card item={item} key={index + item?.id}/>
                    <div className="w-full md:col-span-1 hidden md:block" role='none'/>
                    <div className="w-full md:col-span-1 hidden md:block" role='none'/>
                </>
            ))}
        </div>
    )
}

function Card({item}) {
    return (
        <motion.div
            whileInView={{opacity: [0, 1]}}
            transition={{duration: 1, ease: 'easeInOut'}}
            className="w-full col-span-1 relative group overflow-hidden"
        >
            <Link href={`/work/${item?.slug}`}>
                <a>
                    {item.projectImage ?
                        <BasicImage data={item?.projectImage}
                                    className="shadow-sm w-full object-cover border-2 border-black group-hover:scale-105 transition-all duration-300 ease-in-out h-full"/>
                        :
                        <picture>
                            <img
                                className="shadow-sm w-full object-cover border-2 border-black group-hover:scale-105 transition-all duration-300 ease-in-out"
                                alt='blank image for presentation'
                                role='presentation'
                                src="https://media.graphassets.com/RvMwK0BcSQaATVrGnbdF"
                            />
                        </picture>
                    }
                    <span
                        className="md:absolute md:inset-0 md:m-auto w-fit h-fit py-1 md:py-3 px-0 md:px-4 text-center md:bg-black md:text-white flex justify-center items-center">
                        {item?.title}
                    </span>
                </a>
            </Link>
        </motion.div>
    )
}