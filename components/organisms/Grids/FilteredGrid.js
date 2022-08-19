// Libs/Utils
import projectTypeConverter from '../../../utils/projectTypeConverter'

// External
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import clsx from 'clsx'

// UI
import BasicImage from '../../atoms/assets/BasicImage'

export default function FilteredGrid({ data, title, type }) {
    const [value, setValue] = useState('all')
    const [filteredData, setFilteredData] = useState(data)
    let state = false
    state = data.length % 2 !== 0

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        if (value === 'all') {
            setFilteredData(data)
            // eslint-disable-next-line react-hooks/exhaustive-deps
            state = data.length % 2 !== 0
        } else {
            setFilteredData(
                data.filter((filter) => filter.projectType[0] === value)
            )
            state = data.length % 2 !== 0
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    return (
        <div className="mx-auto max-w-[92vw]">
            <Header
                props={data}
                title={title}
                value={value}
                projects={filteredData}
                setValue={setValue}
            />
            <div className="mx-auto grid h-full w-full grid-cols-1 py-10 sm:grid-cols-2">
                {filteredData?.map((item, index) => (
                    <Card item={item} index={state} key={index} type={type} />
                ))}
            </div>
        </div>
    )
}

function Card({ item, index, type }) {
    return (
        <motion.div
            title={item.title}
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className={clsx(
                'col-span-1 row-span-2 h-fit w-full overflow-hidden border-2 border-b-0 border-black py-[3vw] last:border-b-2 odd:border-r-0 odd:border-l-0 even:border-l-0 even:border-r-0 dark:border-white sm:p-[1vw] sm:odd:border-r-[1px] sm:odd:border-l-2 sm:odd:last:border-r-2 sm:even:border-r-2 sm:even:border-l-[1px] sm:odd:second-last-child:border-b-2',
                index && 'sm:odd:last:col-span-2 sm:odd:last:row-span-2'
            )}
        >
            <Link href={`/${type}/${item?.slug}`}>
                <a
                    className={clsx(
                        'flex h-fit w-full flex-col',
                        !item?.projectImage
                            ? 'items-end justify-end'
                            : 'items-center justify-center'
                    )}
                >
                    {item.projectImage ? (
                        <>
                            <BasicImage
                                data={item?.projectImage}
                                className="aspect-[41/26] h-full w-full object-cover"
                            />
                        </>
                    ) : (
                        <span className="flex aspect-[41/26] h-full w-full items-center justify-center">
                            No Image Available
                        </span>
                    )}
                    <CardDetails {...item} />
                </a>
            </Link>
        </motion.div>
    )
}

function CardDetails(props) {
    return (
        <div className="w-full pt-4">
            <ul className="flex flex-wrap text-sm uppercase">
                {props.projectTags.map((tag, index) => (
                    <li
                        key={index}
                        id={tag}
                        className='mr-1 after:content-["\00B7"] last:after:content-[""]'
                    >
                        {tag}{' '}
                    </li>
                ))}
            </ul>
            <h1 className="text-lg">{props.title}</h1>
        </div>
    )
}

function Header({ props, projects, value, setValue, title }) {
    let types = []
    let options = [{ title: 'All', slug: 'all' }]

    props.forEach((item) => {
        types.push(item.projectType[0])
    })

    let uniqueTypes = [...new Set(types)]
    uniqueTypes.forEach((type) => {
        options.push(projectTypeConverter(type))
    })

    useEffect(() => {
        setValue(options[0].slug)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <header className="flex flex-col items-start justify-between pt-36 sm:flex-row sm:items-end">
            <div className="relative w-min">
                <h1 className="block font-satoshi-bold text-8xl">{title}</h1>
                <span className="absolute top-0 -right-3 text-lg">
                    {projects.length}
                </span>
            </div>
            <div className="w-full space-y-2 py-4 font-satoshi-bold sm:w-fit">
                <select
                    className="w-full bg-white text-center text-black dark:bg-black dark:text-white sm:w-fit"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                >
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
