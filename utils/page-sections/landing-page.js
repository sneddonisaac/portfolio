import LandingAbout from "../../components/organisms/Abouts/LandingAbout";

export default function Components({ data }) {    
    if (data.__typename === 'AboutMe') {
        return <LandingAbout data={data} />;
    }
}