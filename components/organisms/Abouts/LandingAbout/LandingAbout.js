import { useEffect, useState } from "react";
import { client, urlFor } from "../../../../utils/sanity-client";

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
            <div className="lg:w-5/6 w-full px-12 py-12 md:py-4 md:px-4 h-3/4 mt-20 items-end grid md:grid-cols-5 md:grid-rows-1 grid-flow-row gap-8">
                <div className="col-span-3 md:col-span-2 h-full w-full relative flex flex-col md:justify-between items-center md:items-end">
                    <div className="lg:-rotate-90 lg:absolute lg:-left-32 lg:bottom-32 text-4xl pr-6 pb-6 font-satoshi-bold">{data?.title}</div>
                    <p className="lg:w-5/6 w-full text-justify sm:text-left">
                        {data?.paragraphLeft}
                    </p>
                </div>
                <div className="col-span-3 lg:grid grid-cols-5 grid-flow-row gap-8">
                    <div className="col-span-4 text-justify sm:text-left">
                        <p className="pb-8">
                            {data?.paragraphRight}
                        </p>
                        {data?.imgUrl && (<img className="pb-8" src={urlFor(data?.imgUrl).url()} />)}
                    </div>
                    <div className="col-span-1" />
                </div>
            </div>
        </div>
    )
}