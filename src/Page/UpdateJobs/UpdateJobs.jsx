import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaCalendarDays } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";


const UpdateJobs = () => {
    const [deadlineDate, setdeadlineDate] = useState(new Date());
    const updatemyjob = useLoaderData()
    const { _id, jobtitle, jobcategory, imageurl, description, salaryrange, applicationdeadline, experience, address } = updatemyjob;

    const handleUpdatejob = event => {
        event.preventDefault();

        const form = event.target;
        const jobtitle = form.jobtitle.value;
        const jobcategory = form.jobcategory.value;
        const imageurl = form.imageurl.value;
        const description = form.description.value;
        const salaryrange = form.salaryrange.value;
        const address = form.address.value;
        const experience = form.experience.value;
        const applicationdeadline = deadlineDate;

        const Updatejob = { jobtitle, jobcategory, imageurl, description, salaryrange, applicationdeadline, experience, address }

        // set data to server
        fetch(`http://localhost:5000/joblist/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Updatejob)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    Swal.fire({
                        position: "middle-center",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    form.reset();
                }
            })

    }
    return (
        <div>
            <Helmet>
                <title>Kajer khoj | updatejob</title>
            </Helmet>
            <div>
                <form onSubmit={handleUpdatejob} className="modal-box mx-auto w-11/12 max-w-5xl space-y-3 dark:bg-white">
                    {/* Job Title and Category */}
                    <div className="md:flex gap-6 justify-between">
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-lg font-medium text-black dark:text-white">Job Title</span>
                            </label>
                            <input type="Text" name="jobtitle" defaultValue={jobtitle} placeholder={jobtitle} className="input  w-full border-b-2 border-b-[#080808] dark:border-b-[#ffffffa7] bg-transparent placeholder-[#080808]" />
                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-lg font-medium text-black dark:text-white">Job Category</span>
                            </label>
                            <select type="dropdown" name='jobcategory' defaultValue={jobcategory} value={jobcategory} className="px-3 w-full rounded-lg h-12 border-b-2 border-b-[#080808] dark:border-b-[#ffffffa7] bg-transparent placeholder-[#080808]">
                                <option defaultValue={jobcategory} value={jobcategory}>Select Category</option>
                                <option value="On-Site Job">On-Site Job</option>
                                <option value="Remote Job">Remote Job</option>
                                <option value="Hybrid">Hybrid</option>
                                <option value="Part-Time">Part-Time</option>
                            </select>
                        </div>
                    </div>
                    {/* Photo Url */}
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text text-lg font-medium text-black dark:text-white">Image</span>
                        </label>
                        <input type="url" name="imageurl" defaultValue={imageurl} placeholder={imageurl} className="input  w-full border-b-2 border-b-[#080808] dark:border-b-[#ffffffa7] bg-transparent placeholder-[#080808]" required />
                    </div>
                    {/* Job Description */}
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text text-lg font-medium text-black dark:text-white">Job Description</span>
                        </label>
                        <input type="text" name="description" defaultValue={description} placeholder={description} className="input  w-full border-b-2 border-b-[#080808] dark:border-b-[#ffffffa7] bg-transparent placeholder-[#080808]" required />
                    </div>
                    {/* Salary Range and Job Applicants Number */}
                    <div className="md:flex gap-6 justify-between">
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-lg font-medium text-black dark:text-white">Salary Range</span>
                            </label>
                            <input type="Text" name="salaryrange" defaultValue={salaryrange} placeholder={salaryrange} className="input  w-full border-b-2 border-b-[#080808] dark:border-b-[#ffffffa7] bg-transparent placeholder-[#080808]" required />
                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-lg font-medium text-black dark:text-white">Applicantion Deadline</span>
                            </label>
                            <div className="flex gap-6 items-center">
                                <FaCalendarDays className=" text-2xl" />
                                <DatePicker
                                    defaultValue={applicationdeadline}
                                    placeholder={applicationdeadline}
                                    selected={deadlineDate}
                                    onChange={(date) => setdeadlineDate(date)}
                                    className="lg:w-[430px] md:w-[300px] rounded-lg h-12 border-b-2 border-b-[#080808] dark:border-b-[#ffffffa7] bg-transparent text-[#080808] items-center text-center flex"
                                />
                            </div>
                        </div>
                    </div>
                    {/* Experience and Address */}
                    <div className="md:flex gap-6 justify-between">
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-lg font-medium text-black dark:text-white">Address</span>
                            </label>
                            <input type="Text" name="address" defaultValue={address} placeholder={address} className="input  w-full border-b-2 border-b-[#080808] dark:border-b-[#ffffffa7] bg-transparent placeholder-[#080808]" required />
                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-lg font-medium text-black dark:text-white">Experience</span>
                            </label>
                            <input type="Text" name="experience" defaultValue={experience} placeholder={experience} className="input  w-full border-b-2 border-b-[#080808] dark:border-b-[#ffffffa7] bg-transparent placeholder-[#080808]" />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button className="btn btn-accent text-white">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateJobs;