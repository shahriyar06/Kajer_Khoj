import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";

const AppliedJob = () => {
    const Applylist = useLoaderData();
    
    return (
        <div className="w-10/12 mx-auto my-6">
            <Helmet>
                <title>Kajer khoj | appliedjob</title>
            </Helmet>
            <div className="grid grid-cols-3 gap-7">
                {
                    Applylist.map(apply => <div key={apply._id}><div className=" rounded-md shadow-xl bg-gray-50 text-gray-800">
                    <img src={apply.image} alt="" className=" w-full rounded-t-md h-72 bg-gray-500" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-semibold tracking-wide">{apply.jobtitle}</h2>
                            <p className="text-red-500">{apply.jobcategory}</p>
                        </div>
                        <div className="space-y-2">
                            <h1 className="text-2xl font-bold text-center mb-3">Applicant Information</h1>
                            <h2 className=" tracking-wide"> <span className="font-semibold">Name :</span> {apply.name}</h2>
                            <p className="text-gray-800"><span className="font-semibold">Email :</span> {apply.email}</p>
                            <h2 className=" tracking-wide"> <span className="font-semibold">Contact :</span> {apply.contact}</h2>
                            <p className="text-gray-800"><span className="font-semibold">Gender :</span> {apply.gender}</p>
                        </div>
                        <div className="text-end">
                            <button className="btn btn-accent text-lg">Download PDF</button>
                        </div>
                    </div>
                </div></div>)
                }
            </div>
        </div>
    );
};

export default AppliedJob;