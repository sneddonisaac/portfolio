export default function WorkHero({ data }) {
    return (
        <div className="h-screen pt-24">
            {data?.map((item) => (
                <p>{item.title}</p>
            ))}
        </div>
    )
}