import { Helmet } from "react-helmet-async";
import Banner from "../../Component/Banner/Banner";
import JobCategory from "../../Component/JobCategory/JobCategory";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Kajer khoj | home</title>
            </Helmet>
            <Banner></Banner>
            <JobCategory></JobCategory>
        </div>
    );
};

export default Home;