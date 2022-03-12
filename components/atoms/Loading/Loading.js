export default function Loading({ value }) {
    return (
        <div className="z-100 flex h-screen w-full items-center justify-center bg-white px-12">
            <progress className="w-full" max='100' value={value} />
        </div>
    )
}