import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";
import { Helmet } from "react-helmet-async";
import MyjobPostlist from "../../Component/MyjobPostlist/MyjobPostlist";


const Myjobs = () => {
    const myJobs = useLoaderData();
    const { user } = useContext(AuthContext)
    const { email } = user;
    const allmyJobs = myJobs.filter(job => job.email === email);
    return (
        <div className="my-10">
            <Helmet>
                <title>Kajer khoj | myjobs</title>
            </Helmet>
            <div className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4">
                {
                    allmyJobs.map(myJobslist => <MyjobPostlist myJobslist={myJobslist} key={myJobslist._id}></MyjobPostlist>
                )
                }
            </div>
        </div>
    );
};

export default Myjobs;