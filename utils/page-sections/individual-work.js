import DecreasingImageGrid from "../../components/organisms/Grids/DecreasingImageGrid";

export default function Components({ data }) {
    if (data.__typename === 'DecreasingImageGrid') {
        return <DecreasingImageGrid data={data} />;
    } else {
        return <div className="text-red-500">THIS AIN'T WORKING</div>
    }
}