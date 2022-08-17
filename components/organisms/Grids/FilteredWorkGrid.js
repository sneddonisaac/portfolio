// Libs/Utils
import projectTypeConverter from "../../../utils/projectTypeConverter";

// External
import {useEffect, useState} from "react";
import {motion} from "framer-motion";
import Link from "next/link";
import clsx from "clsx";

// UI
import BasicImage from "../../atoms/assets/BasicImage"

export default function FilteredWorkGrid({data}) {
    const [value, setValue] = useState('all')
    const [filteredData, setFilteredData] = useState(data)
    let state = false;
    state = data.length % 2 !== 0;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        if (value === 'all') {
            setFilteredData(data)
            state = data.length % 2 !== 0;
        } else {
            setFilteredData(data.filter(filter => filter.projectType[0] === value))
            state = data.length % 2 !== 0;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    return (
        <div className='max-w-[92vw] mx-auto'>
            <Header props={data} value={value} projects={filteredData} setValue={setValue}/>
            <div
                className="w-full h-full mx-auto py-10 grid grid-cols-1 sm:grid-cols-2">
                {filteredData?.map((item, index) => (
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
            className={clsx("w-full h-fit col-span-1 row-span-2 overflow-hidden py-[3vw] sm:p-[1vw] border-2 border-b-0 border-black even:border-l-0 odd:border-r-0 odd:border-l-0 even:border-r-0 sm:odd:border-r-[1px] sm:odd:border-l-2 sm:even:border-r-2 sm:odd:second-last-child:border-b-2 sm:odd:last:border-r-2 sm:even:border-l-[1px] last:border-b-2",
                index && 'sm:odd:last:col-span-2 sm:odd:last:row-span-2')}
        >
            <Link href={`/work/${item?.slug}`}>
                <a className={clsx('w-full h-fit flex flex-col', !item?.projectImage ? 'justify-end items-end' : 'justify-center items-center')}>
                    {item.projectImage ?
                        <>
                            <BasicImage data={item?.projectImage} className="w-full object-cover h-full aspect-[41/26]"/>
                        </>
                        :
                        <span className='w-full h-full flex justify-center items-center aspect-video'>No Image Avaliable</span>
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

function Header({props, projects, value, setValue}) {
    let types = [];
    let options = [{title: 'All', slug: 'all'}];

    props.forEach((item) => {
        types.push(item.projectType[0])
    })

    let uniqueTypes = [...new Set(types)]
    uniqueTypes.forEach(type => {
        options.push(projectTypeConverter(type))
    })

    useEffect(() => {
        setValue(options[0].slug)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <header className='pt-36 flex flex-col sm:flex-row justify-between items-start sm:items-end'>
            <div className='relative w-min'>
                <h1 className='block text-8xl font-satoshi-bold'>Work</h1>
                <span className='absolute top-0 -right-3 text-lg'>{projects.length}</span>
            </div>
            <div className='w-full sm:w-fit py-4 space-y-2 font-satoshi-bold'>
                <select className='w-full sm:w-fit text-center' value={value} onChange={(e) => setValue(e.target.value)}>
                    {options.map((option, index) => (
                        <option key={index} value={option.slug}>
                            {option.title}
                        </option>
                    ))}
                </select>
            </div>
        </header>
    )
}
