export default function WorkPageContent({ details }) {
    return (
        <div className='w-full'>
            <div
                className='w-full my-8 prose prose-black max-w-full prose-headings:text-center prose-headings:pt-6 prose-h3:text-4xl text-center prose-p:text-lg'
                dangerouslySetInnerHTML={{ __html: details }}
            />
        </div>
    );
}