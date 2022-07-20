import TripleMobileMockup from "../../components/organisms/Content/TripleMobileMockup";
import DecreasingImageGrid from "../../components/organisms/Grids/DecreasingImageGrid";
import Simple5050 from "../../components/organisms/Headers/Simple5050";

export default function Components({ data }) {
    if (data.__typename === 'DecreasingImageGrid') {
        return <DecreasingImageGrid data={data} />;
    } else if (data.__typename === 'Simple5050Header') {
        return <Simple5050 data={data} />;
    } else if (data.__typename === 'TripleMobileMockup') {
        return <TripleMobileMockup data={data} />;
    }
}