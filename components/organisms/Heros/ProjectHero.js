import projectTypeConverter from "../../../utils/projectTypeConverter";
import Link from 'next/link'
import Container from "../../atoms/Container";

export default function ProjectHero({data}) {
    return (
        <div id={`block_name: ProjectHero, block_id: ${data?.id}`}>
            <Container>
                <div className="sm:pb-12 pt-36 sm:pt-24 w-full flex flex-col justify-start items-center px-12">
                <span
                    className="flex flex-col justify-center items-center text-7xl sm:text-8xl font-satoshi-bold text-center my-12">
                    {data?.title}
                    {!data?.projectImage?.url &&
                        <span className="text-base mt-6">Unfortunately I am unable to provide images pertaining to this project.</span>}
                </span>
                </div>
                <div className='grid grid-rows-1 md:grid-cols-2'>
                    <div className='hidden md:block'/>
                    <div className='grid grid-rows-3 md:grid-cols-3 md:grid-rows-1'>
                        <div className='flex flex-col'>
                            <h1 className='text-sm text-gray-500'>Client</h1>
                            <span>{data?.client}</span>
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='text-sm text-gray-500'>Services</h1>
                            {data?.projectType?.map((type, index) => (
                                <span className='text-lg' key={index}>
                                {projectTypeConverter(type).title}
                            </span>
                            ))}
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='text-sm text-gray-500'>Links</h1>
                            {data?.codeLink &&
                                <Link href={data.codeLink}>
                                    <a className='text-lg after:content-["_↗"]' target='_blank' rel='noopener nofollow'>
                                        Code
                                    </a>
                                </Link>
                            }
                            {data?.projectLink &&
                                <Link href={data.projectLink}>
                                    <a className='text-lg after:content-["_↗"]' target='_blank' rel='noopener nofollow'>
                                        Site
                                    </a>
                                </Link>
                            }
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

