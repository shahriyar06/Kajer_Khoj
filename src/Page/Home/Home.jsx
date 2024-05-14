import { Helmet } from "react-helmet-async";
import Banner from "../../Component/Banner/Banner";
import JobCategory from "../../Component/JobCategory/JobCategory";
import CarrierInfo from "../../Component/CarrierInfo/CarrierInfo";
import Teammember from "../../Component/Teammember/Teammember";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Kajer khoj | home</title>
            </Helmet>
            <Banner></Banner>
            <JobCategory></JobCategory>
            <CarrierInfo></CarrierInfo>
            <Teammember></Teammember>
        </div>
    );
};

export default Home;