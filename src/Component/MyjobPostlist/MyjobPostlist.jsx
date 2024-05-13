import { BiSolidShoppingBag } from "react-icons/bi";
import { FaPen, FaRegCalendarAlt, FaRegMoneyBillAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { RiDeleteBinFill } from "react-icons/ri";
import { Link } from "react-router-dom";


const MyjobPostlist = ({ myJobslist , handledelete }) => {
    const { _id, jobtitle, jobcategory, jobapplicants, imageurl, applicationdeadline, salaryrange, location } = myJobslist;
    
    return (
        <div>
            <div className="grid grid-cols-7 gap-6 rounded-2xl shadow-lg p-3 items-center">
                <div className=" col-span-3">
                    <img src={imageurl} alt="" className="rounded-xl h-56" />
                </div>
                <div className="col-span-3 space-y-1 p-2">
                    <h1 className="text-3xl font-bold">{jobtitle}</h1>
                    <h2 className="text-lg text-[#FF0000]">{jobcategory}</h2>
                    <h2 className="flex items-center gap-3 text-lg"><FaRegMoneyBillAlt className="text-2xl text-[#00A550]" />{salaryrange}</h2>
                    <h2 className="flex items-center gap-3 text-lg"><BiSolidShoppingBag className="text-2xl text-[#7CB9E8]" /><span className="font-medium">Job Applicants :</span> {jobapplicants}</h2>
                    <h2 className="flex items-center gap-3 text-lg"><FaRegCalendarAlt className="text-2xl" /><span className="font-medium">Deadline :</span> {applicationdeadline.slice(0, 10)}</h2>
                    <h2 className="flex items-center gap-3 text-lg"><IoLocationSharp className="text-2xl text-[#ff51008d]" />{location}</h2>
                </div>
                <div className="col-span-1 flex flex-col gap-4">
                    <Link to={`/jobdetails/${_id}`} className="btn btn-outline btn-accent hover:text-white">Details</Link>
                    <Link className="btn btn-outline btn-accent"><FaPen className="text-xl hover:text-white" /></Link>
                    <button onClick={() => handledelete(_id)} className="btn btn-outline btn-accent"><RiDeleteBinFill className="text-2xl hover:text-white" /></button>
                </div>
            </div>
        </div>
    );
};

export default MyjobPostlist;