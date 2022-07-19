import DecreasingImageGrid from "../../components/organisms/Grids/DecreasingImageGrid";

export default function Components({ data }) {
    if (data.__typename === 'DecreasingImageGrid') {
        return <DecreasingImageGrid data={data} />;
    } else {
        return <div className="w-full flex justify-center items-center py-8 text-center">Sorry, this project doesn't seem to have any notes right now</div>
    }
}