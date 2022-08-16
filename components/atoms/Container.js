export default function Container({ children }) {
    return (
        <div className="xl:max-w-6xl xl:mx-auto w-full px-10 py-12">
            { children }
        </div>
    )
}
