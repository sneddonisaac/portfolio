export default function BasicHero({ title }) {
    return (
        <div className="h-screen pt-24 flex justify-center items-center">
            <h1 className="text-6xl text-center sm:text-8xl">{title}</h1>
        </div>
    )
}