export default function BasicHero({ title }) {
    return (
        <div className="flex h-screen items-center justify-center pt-24">
            <h1 className="text-center text-6xl sm:text-8xl">{title}</h1>
        </div>
    )
}
