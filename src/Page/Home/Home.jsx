import { Helmet } from "react-helmet-async";
import Banner from "../../Component/Banner/Banner";
import JobCategory from "../../Component/JobCategory/JobCategory";
import CarrierInfo from "../../Component/CarrierInfo/CarrierInfo";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Kajer khoj | home</title>
            </Helmet>
            <Banner></Banner>
            <JobCategory></JobCategory>
            <CarrierInfo></CarrierInfo>
        </div>
    );
};

export default Home;