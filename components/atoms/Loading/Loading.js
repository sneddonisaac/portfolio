/* export default function Loading({ value }) {
    return (
        <div className="z-100 flex h-screen w-full items-center justify-center bg-white px-12">
            <progress className="w-full bg-black text-black" max='100' value={value} />
        </div>
    )
} */

import * as Progress from '@radix-ui/react-progress';

export default function Loading({ value }) {
    return (
        <div className="z-100 flex h-screen w-full items-center justify-center bg-white px-12">
            <Progress.Root value={value} className="w-full">
                <Progress.Indicator style={{ width: `${value}%` }} className="w-full bg-black" max={100} />
            </Progress.Root>
        </div>
    )
}