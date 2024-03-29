import * as Progress from '@radix-ui/react-progress'

export default function Loading({ value }) {
    return (
        <div className="z-100 flex h-screen w-full items-center justify-center bg-white px-12">
            <Progress.Root value={value} className="w-full">
                <Progress.Indicator
                    style={{ width: `${value}%` }}
                    className="h-4 w-full bg-black"
                    max={110}
                />
            </Progress.Root>
            <span className="text-5xl">{value}</span>
        </div>
    )
}
