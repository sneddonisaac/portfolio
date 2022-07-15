import { useEffect, useState } from "react";
import { client, urlFor } from "../../../../utils/sanity-client";
import { motion } from 'framer-motion'

export default function LandingAbout() {
    const [about, setAbout] = useState([]);

    useEffect(() => {
        const query = '*[_type == "about-me"]';

        client.fetch(query).then((data) => {
            setAbout(data);
        });
    }, []);

    const data = about[0]

    return (
        <div className="h-fit w-full flex justify-end items-start">
            <div className="lg:w-5/6 w-full px-12 py-12 md:py-4 md:px-4 h-3/4 mt-20 columns-1 sm:columns-2 gap-10">
                <div className="h-full w-full relative flex flex-col md:justify-between items-center md:items-start">
                    <div className="lg:-rotate-90 lg:absolute lg:-left-32 lg:top-10 text-4xl lg:pr-6 pb-6 font-satoshi-bold">{data?.title}</div>
                    <p className="w-full text-justify">
                        {data?.paragraph}
                    </p>
                </div>
                <motion.div
                    className="relative overflow-hidden"
                    initial={{ x: '100%' }}
                    whileInView={{ translateX: '-100%' }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                    {data?.imgUrl && (<img className="pt-8 pb-6 w-full h-full object-cover" alt={data?.imgUrl.attribution} src={urlFor(data?.imgUrl).url()} />)}
                    <span className="absolute bottom-0 right-0">{data?.imgUrl.caption}</span>
                </motion.div>
            </div>
        </div>
    )
}