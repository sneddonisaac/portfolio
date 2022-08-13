import Img from "../../molecules/Img";

export default function ProjectHero({ data }) {
    return (
        <div id={`block_name: ProjectHero, block_id: ${data?.id}`}>
            <div className="h-5/6 pt-36 sm:pt-24 overflow-clip flex justify-center items-center">
                {data?.projectImage?.url ?
                    <div className='md:w-5/6 h-auto'>
                        <Img data={data?.projectImage} />
                    </div>
                    :
                    ""
                }
            </div>
            <div className="bg-white sm:pb-12 w-full flex flex-col justify-start items-center px-12">
                <span className="flex flex-col justify-center items-center text-7xl sm:text-8xl font-satoshi-bold text-center my-12">
                    {data?.title}
                    {!data?.projectImage?.url && <span className="text-base mt-6">Unfortunately I am unable to provide images pertaining to this project.</span>}
                </span>
            </div>
        </div>
    )
}
