import { Helmet } from "react-helmet-async";
import Banner from "../../Component/Banner/Banner";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Kajer khoj | home</title>
            </Helmet>
            <Banner></Banner>
        </div>
    );
};

export default Home;