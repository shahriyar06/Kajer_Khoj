import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const AllJobs = () => {

    const loadalljobs = useLoaderData();
    const [searchtitle, setsearchtitle] = useState("");

    // Filter jobs based on search query
    const filteredJobs = loadalljobs.filter(job => {
        return job.jobtitle.toLowerCase().includes(searchtitle.toLowerCase());
    });


    return (
        <div>
            <div className="text-center"><h1 className="text-5xl font-bold">Here All of Our Jobs</h1></div>
            <div className='lg:w-6/12 w-11/12 mx-auto my-6 relative'>
                <input type="text" placeholder="Enter your email address" className="rounded-full h-14 pl-6 text-lg w-full text-[#080808] border border-[#947351]" value={searchtitle} onChange={(e) => setsearchtitle(e.target.value)} />

                <button className="btn rounded-r-full h-14 md:w-36 w-24 btn-outline text-[#947351] hover:text-[#FFFFFF] hover:bg-[#947351] hover:border-[#947351] text-xl absolute right-0">Signup</button>
            </div>
            <div className="container p-2 mx-auto sm:p-4 text-gray-100 dark:text-gray-800">
                <div className="overflow-x-auto text-center">
                    <table className="min-w-full">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                        </colgroup>
                        <thead className="bg-gray-700 dark:bg-gray-300">
                            <tr className="text-center">
                                <th className="p-3">#</th>
                                <th className="p-3 w-72">Title</th>
                                <th className="p-3">Name</th>
                                <th className="p-3">Posting Date</th>
                                <th className="p-3">Application Deadline</th>
                                <th className="p-3">Salary</th>
                                <th className="p-3 w-32">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                filteredJobs.map((alljobs, idx) => <tr key={alljobs._id} className="border-b border-opacity-20 border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50">
                                    <td className="p-3">
                                        <p>{idx + 1}</p>
                                    </td>
                                    <td className="p-3 w-72">
                                        <p>{alljobs.jobtitle}</p>
                                    </td>
                                    <td className="p-3">
                                        <p>{alljobs.name}</p>
                                    </td>
                                    <td className="p-3">
                                        <p>{alljobs.jobpostdate.slice(0, 10)}</p>
                                    </td>
                                    <td className="p-3">
                                        <p>{alljobs.applicationdeadline.slice(0, 10)}</p>
                                    </td>
                                    <td className="p-3">
                                        <p>$ {alljobs.salaryrange}</p>
                                    </td>
                                    <td className="p-3 ">
                                        <Link to={`/jobdetails/${alljobs._id}`} className="btn btn-primary">Details</Link>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllJobs;