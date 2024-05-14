import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";

const AppliedJob = () => {
    const Applylist = useLoaderData();
    const [Categoryselect, setCategoryselect] = useState("");

    const filteredApplylist = Categoryselect === "" ? Applylist : Applylist.filter(apply => apply.jobcategory === Categoryselect);

    return (
        <div className="w-10/12 mx-auto my-6">
            <Helmet>
                <title>Kajer khoj | appliedjob</title>
            </Helmet>
            <div className="mb-4">
                <label htmlFor="category" className="block text-lg font-medium text-gray-700">Select Job Category:</label>
                <select id="category" name="category" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" value={Categoryselect} onChange={(e) => setCategoryselect(e.target.value)}>
                    <option value="">All Categories</option>
                    <option value="On-Site Job">On-Site Job</option>
                    <option value="Remote Job">Remote Job</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="Part-Time">Part-Time</option>
                </select>
            </div>
            <div className="grid grid-cols-3 gap-7">
                {
                    filteredApplylist.map(apply => <div key={apply._id}><div className=" rounded-md shadow-xl bg-gray-50 text-gray-800">
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
                                <button className="btn btn-accent text-lg" >Download PDF</button>
                            </div>
                        </div>
                    </div></div>)
                }
            </div>
        </div>
    );
};

export default AppliedJob;