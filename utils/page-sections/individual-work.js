import DecreasingImageGrid from "../../components/organisms/Grids/DecreasingImageGrid";

export default function Components({ data }) {
    if (data.__typename === 'DecreasingImageGrid') {
        return <DecreasingImageGrid data={data} />;
    } else if (!data) {
        return <div><h1>Sorry no data found here...</h1></div>
    } else {
        return <div className="text-red-500">THIS AIN'T WORKING</div>
    }
}