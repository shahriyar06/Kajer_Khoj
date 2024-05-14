import { BiSolidShoppingBag } from "react-icons/bi";
import { FaRegCalendarAlt, FaRegMoneyBillAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";


const JobTab = ({ joblist }) => {
    const { _id, jobtitle, jobcategory, jobapplicants, imageurl, applicationdeadline, salaryrange, address, experience } = joblist;
    return (
        <div className="border-2 border-orange-500">
            <div className="max-w-lg p-4 shadow-2xl bg-gray-50 text-gray-800">
                <div className="flex justify-between pb-4 border-bottom">
                    <div className="text-end border-bottom">
                        <h1 className="text-lg text-[#FF0000]">{jobcategory}</h1>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <img src={imageurl} alt="" className="w-full rounded-md h-80 cover bg-gray-500" />
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-default-600 h-10">{jobtitle}</h3>
                    </div>
                    <div className="col-span-3 space-y-2 p-2">
                        <h2 className="flex items-center gap-3 text-lg"><FaRegMoneyBillAlt className="text-2xl text-[#00A550]" />{salaryrange}</h2>
                        <h2 className="flex items-center gap-3 text-lg"><BiSolidShoppingBag className="text-2xl text-[#7CB9E8]" /><span className="font-medium">Job Applicants :</span> {jobapplicants}</h2>
                        <h2 className="flex items-center gap-3 text-lg"><FaRegCalendarAlt className="text-2xl" /><span className="font-medium">Deadline :</span> {applicationdeadline.slice(0, 10)}</h2>
                        <h2 className="flex items-center gap-3 text-lg"><IoLocationSharp className="text-2xl text-[#ff51008d]" />{address}</h2>
                        <h2 className="flex items-center gap-3 text-lg"><span className="font-medium">Experience :</span> {experience}</h2>
                    </div>
                    <div className="text-end">
                        <Link to={`/jobdetails/${_id}`} className="btn btn-outline btn-accent hover:text-[#FFFFF]">Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobTab;