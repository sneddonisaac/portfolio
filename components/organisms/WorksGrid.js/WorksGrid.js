import Link from "next/link";
import { urlFor } from "../../../utils/sanity-client";

export default function WorksGrid({ data }) {
    return (
        <div className="w-full px-10 py-10 lg:max-w-7xl grid grid-cols-2 grid-flow-rows gap-6">
            {data?.map((item, index) => (
                <>
                    <Link href={`/work/${item?.slug.current}`} key={item.id + index}>
                        <a className="w-fit col-span-1 relative group overflow-hidden shadow-sm" >
                            <img className="w-full object-cover group-hover:scale-105 transition-all duration-300 ease-in-out" src={urlFor(item?.imgUrl)} />
                            <span className="absolute inset-0 m-auto w-fit h-fit py-3 px-4 bg-black text-white">
                                {item?.title}
                            </span>
                        </a>
                    </Link>
                    <div className="w-full col-span-1" />
                    <div className="w-full col-span-1" />
                </>
            ))}
        </div>
    )
}