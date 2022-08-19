export default function BlockNotShowing(data) {
    console.error('Block Not Showing // DATA : ', data)
    return (
        <div className="flex h-fit w-full items-center justify-center py-20">
            <span>There seems to be a problem here...</span>
        </div>
    )
}
