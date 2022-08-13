// Libs
import Link from "next/link";

// External
import {motion} from "framer-motion";

// UI
import BasicImage from "../../atoms/assets/BasicImage"
import projectTypeConverter from "../../../utils/projectTypeConverter";
import {useState} from "react";
import clsx from "clsx";

export default function FilteredWorkGrid({data}) {
    const [value, setValue] = useState(null)
    let state = false;

    if (data.length % 2 === 0) {
        state
    } else {
        state = true
    }

    return (
        <div className='max-w-[92vw] mx-auto'>
            <Header props={data} value={value} setValue={() => setValue()} />
            <div
                className="w-full h-full mx-auto py-10 lg:max-w-7xl grid grid-cols-1 sm:grid-cols-2 grid-flow-row auto-rows-fr">
                {data?.map((item, index) => (
                    <Card item={item} index={state} key={index}/>
                ))}
            </div>
        </div>
    )
}


function Card({item, index}) {
    return (
        <motion.div
            title={item.title}
            whileInView={{opacity: [0, 1]}}
            transition={{duration: 1, ease: 'easeInOut'}}
            className={clsx("w-full overflow-hidden py-[3vw] sm:p-[1vw] border-t-2 sm:odd:border-r-2 sm:even:border-r-0 border-black",
                index && 'second-last-child:border-b-2 last:border-t-0 sm:third-last-child:border-b-2')}
        >
            <Link href={`/work/${item?.slug}`}>
                <a className={clsx('w-full h-full flex flex-col', !item?.projectImage ? 'justify-end items-end' : 'justify-center items-center')}>
                    {item.projectImage ?
                        <>
                            <BasicImage data={item?.projectImage} className="w-full object-cover h-full"/>
                        </>
                        :
                        <span className='w-full h-full flex justify-center items-center'>No Image Avaliable</span>
                    }
                    <CardDetails {...item} />
                </a>
            </Link>
        </motion.div>
    )
}

function CardDetails(props) {
    return (
        <div className='w-full pt-4'>
            <ul className='flex flex-wrap text-sm uppercase'>
                {props.projectTags.map((tag, index) => (
                    <li key={index} id={tag} className='after:content-["\00B7"] last:after:content-[""] mr-1'>
                        {tag} {' '}
                    </li>
                ))}
            </ul>
            <h1 className='text-lg'>
                {props.title}
            </h1>
        </div>
    )
}

function Header({props, value, setValue}) {
    let types = [];
    let options = [];

    props.forEach((item) => {
        types.push(item.projectType[0])
    })

    let uniqueTypes = [...new Set(types)]
    uniqueTypes.forEach(type => {
        options.push(projectTypeConverter(type))
    })

    console.log(value)

    return (
        <header className='pt-36 flex justify-between items-end'>
            <div className='relative w-min'>
                <h1 className='block text-8xl font-satoshi-bold'>Work</h1>
                <span className='absolute top-0 -right-3 text-lg'>{props.length}</span>
            </div>
            <select value={value} onChange={(e) => setValue(e.target.value)}>
                {options.map((option, index) => (
                    <option key={index} value={option.slug}>
                        {option.title}
                    </option>
                ))}
            </select>
        </header>
    )
}
