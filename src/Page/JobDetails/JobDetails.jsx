import { Helmet } from "react-helmet-async";
import { BiSolidShoppingBag } from "react-icons/bi";
import { FaRegCalendarAlt, FaRegMoneyBillAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { Link, useLoaderData, useParams } from "react-router-dom";


const JobDetails = () => {
    const jobdetail = useLoaderData();
    const { id } = useParams();
    const jobdetaillist = jobdetail?.find(detaillist => detaillist._id === id);
    const { name, email, jobtitle, jobcategory, imageurl, description, salaryrange, jobapplicants, jobpostdate, applicationdeadline, experience, address } = jobdetaillist;

    return (
        <div className="my-6">
            <Helmet>
                <title>Kajer khoj | jobdetails</title>
            </Helmet>
            <div>
                <div className="w-8/12 border-3xl mx-auto p-4 shadow-2xl bg-gray-50 text-gray-800">
                    <div className="text-end pb-4 border-bottom">
                        <h1 className="text-lg text-[#FF0000]">{jobcategory}</h1>
                    </div>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <img src={imageurl} alt="" className="w-full rounded-md  h-[500px] cover bg-gray-500" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-semibold text-default-600">{jobtitle}</h3>
                            <p className="leading-snug text-gray-600">{description}</p>
                        </div>
                        <div className="space-y-2 p-6">
                            <h2 className="flex items-center gap-3 text-lg"><span className="font-medium">Experience :</span> {experience}</h2>
                            <h2 className="flex items-center gap-3 text-lg"><FaRegMoneyBillAlt className="text-2xl text-[#00A550]" />{salaryrange}</h2>
                            <h2 className="flex items-center gap-3 text-lg"><BiSolidShoppingBag className="text-2xl text-[#7CB9E8]" /><span className="font-medium">Job Applicants :</span> {jobapplicants}</h2>
                            <div className="flex justify-between">
                                <h2 className="flex items-center gap-3 text-lg"><FaRegCalendarAlt className="text-2xl" /><span className="font-medium">Post Date :</span> {jobpostdate.slice(0, 10)}</h2>
                                <h2 className="flex items-center gap-3 text-lg"><FaRegCalendarAlt className="text-2xl" /><span className="font-medium">Deadline :</span> {applicationdeadline.slice(0, 10)}</h2>
                            </div>
                            <h2 className="flex items-center gap-3 text-lg"><IoLocationSharp className="text-2xl text-[#ff51008d]" />{address}</h2>
                        </div>
                        <div className="flex gap-7">
                                    <div className="text-2xl font-medium"><h1>Author :</h1></div>
                                    <div className="text-lg mt-11">
                                        <h1><span className="font-medium">Name :  </span>{name}</h1>
                                        <h1><span className="font-medium">Email :  </span>{email}</h1>
                                    </div>
                                </div>
                        <div className="text-end pr-5">
                            <Link className="btn btn-accent text-xl text-white">Apply</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;