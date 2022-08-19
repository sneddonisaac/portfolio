export default function Prose({ details }) {
    return (
        <div className="w-full">
            <div
                className="prose-black prose my-8 w-full max-w-full text-center prose-headings:pt-6 prose-headings:text-center prose-h3:text-4xl prose-p:text-lg"
                dangerouslySetInnerHTML={{ __html: details }}
            />
        </div>
    )
}
