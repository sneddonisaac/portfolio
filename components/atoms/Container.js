export default function Container({ children }) {
    return (
        <div className="w-full px-10 py-12 xl:mx-auto xl:max-w-6xl">
            {children}
        </div>
    )
}
