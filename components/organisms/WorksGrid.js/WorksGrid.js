import Link from "next/link";
import { urlFor } from "../../../utils/sanity-client";

export default function WorksGrid({ data }) {
    return (
        <div className="w-full px-10 py-10 lg:max-w-7xl grid grid-cols-1 sm:grid-cols-2 grid-flow-rows gap-6">
            {data?.map((item, index) => (
                <>
                    <Link href={`/work/${item?.slug.current}`} key={item.id + index}>
                        <a className="w-fit col-span-1 relative group overflow-hidden" >
                            <img className="shadow-sm mb-2 sm:mb-0 w-full object-cover group-hover:scale-105 transition-all duration-300 ease-in-out" src={urlFor(item?.imgUrl)} />
                            <span className="md:absolute md:inset-0 md:m-auto w-fit h-fit py-1 md:py-3 px-0 md:px-4 text-center md:bg-black md:text-white">
                                {item?.title}
                            </span>
                        </a>
                    </Link>
                    <div className="w-full md:col-span-1 hidden md:block" />
                    <div className="w-full md:col-span-1 hidden md:block" />
                </>
            ))}
        </div>
    )
}