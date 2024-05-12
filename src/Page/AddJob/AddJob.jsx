import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";
import Swal from "sweetalert2";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { FaCalendarDays } from "react-icons/fa6";
import "react-datepicker/dist/react-datepicker.css";


const AddJob = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [deadlineDate, setdeadlineDate] = useState(new Date());

    const { user } = useContext(AuthContext)

    const handlesubmitjob = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const jobtitle = form.jobtitle.value;
        const jobcategory = form.jobcategory.value;
        const imageurl = form.imageurl.value;
        const description = form.description.value;
        const salaryrange = form.salaryrange.value;
        const jobapplicants = form.jobapplicants.value;
        const jobpostdate = startDate;
        const applicationdeadline = deadlineDate;

        const jobPost = { name, email, jobtitle, jobcategory, imageurl, description, salaryrange, jobapplicants, jobpostdate, applicationdeadline }

        console.log(jobPost)
        // set data to server
        // fetch('', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(newcraft)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         if (data.insertedId) {
        //             Swal.fire({
        //                 title: 'Success!',
        //                 text: 'Craft Item Added Successfully',
        //                 icon: 'success',
        //                 confirmButtonText: 'Done'
        //             })
        //             form.reset();
        //         }
        //     })

    }


    return (
        <div>
            <Helmet>
                <title>Kajer khoj | add job</title>
            </Helmet>
            <div className="bg-cover bg-center p-28" style={{ backgroundImage: "url('https://i.ibb.co/CbL19DJ/annie-spratt-Qckxruozj-Rg-unsplash.jpg')" }}>
                <div className="card card-side glass flex flex-col w-10/12 mx-auto p-12">
                    <div>
                        <h1 className="text-center lg:text-5xl text-3xl font-bold text-[#a7542dc7]">Add Job</h1>
                        <p className="text-center my-5 text-xl">Craft your legacy in our Collection! Introduce your artisanal marvels.Describe your masterpiece and add images to exhibit your craftsmanship to the world.</p>
                    </div>
                    <div>
                        <form onSubmit={handlesubmitjob} className="">
                            {/* Email and name */}
                            <div className="md:flex gap-6 justify-between">
                                <div className="w-full">
                                    <label className="label">
                                        <span className="label-text text-lg font-medium text-white">Name</span>
                                    </label>
                                    <input type="text" name="name" defaultValue={user.displayName} placeholder={user.displayName} className="input border-b-2 border-b-[#ffffffa7] w-full" style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: '#080808' }} disabled />
                                </div>
                                <div className="w-full">
                                    <label className="label">
                                        <span className="label-text text-lg font-medium text-white">Email</span>
                                    </label>
                                    <input type="text" name="email" defaultValue={user.email} placeholder={user.email} className="input border-b-2 border-b-[#ffffffa7] w-full" style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: '#080808' }} disabled />
                                </div>
                            </div>
                            {/* Job Title and Category */}
                            <div className="md:flex gap-6 justify-between">
                                <div className="w-full">
                                    <label className="label">
                                        <span className="label-text text-lg font-medium text-white">Job Title</span>
                                    </label>
                                    <input type="Text" name="jobtitle" placeholder="Item Title" className="input  w-full border-b-2 border-b-[#ffffffa7] bg-transparent placeholder-[#080808]" required />
                                </div>
                                <div className="w-full">
                                    <label className="label">
                                        <span className="label-text text-lg font-medium text-white">Job Category</span>
                                    </label>
                                    <select type="dropdown" name='jobcategory' className="px-3 w-full rounded-lg h-12 border-b-2 border-b-[#ffffffa7] bg-transparent placeholder-[#080808]" required >
                                        <option value=" ">Select Category</option>
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
                                    <span className="label-text text-lg font-medium text-white">Image</span>
                                </label>
                                <input type="url" name="imageurl" placeholder="Image Url" className="input  w-full border-b-2 border-b-[#ffffffa7] bg-transparent placeholder-[#080808]" required />
                            </div>
                            {/* Job Description */}
                            <div className="w-full">
                                <label className="label">
                                    <span className="label-text text-lg font-medium text-white">Job Description</span>
                                </label>
                                <input type="text" name="description" placeholder="Job Short Description" className="input  w-full border-b-2 border-b-[#ffffffa7] bg-transparent placeholder-[#080808]" required />
                            </div>
                            {/* Salary Range and Job Applicants Number */}
                            <div className="md:flex gap-6 justify-between">
                                <div className="w-full">
                                    <label className="label">
                                        <span className="label-text text-lg font-medium text-white">Salary Range</span>
                                    </label>
                                    <input type="Text" name="salaryrange" placeholder="$ 700 - 900" className="input  w-full border-b-2 border-b-[#ffffffa7] bg-transparent placeholder-[#080808]" required />
                                </div>
                                <div className="w-full">
                                    <label className="label">
                                        <span className="label-text text-lg font-medium text-white">Job Applicants</span>
                                    </label>
                                    <input type="Text" name="jobapplicants" defaultValue={0} placeholder="0" className="input  w-full border-b-2 border-b-[#ffffffa7] bg-transparent placeholder-[#080808]" style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: '#080808' }} disabled />
                                </div>
                            </div>
                            {/* Posting Date and Deadline Date */}
                            <div className="md:flex gap-6 justify-between">
                                <div className="w-full">
                                    <label className="label">
                                        <span className="label-text text-lg font-medium">Posting Date</span>
                                    </label>
                                    <div className="w-full flex gap-6 items-center">
                                        <FaCalendarDays className=" text-2xl" />
                                        <DatePicker
                                            selected={startDate}
                                            onChange={(date) => setStartDate(date)}
                                            className=" w-[430px] rounded-lg h-12 border-b-2 border-b-[#ffffffa7] bg-transparent text-[#080808] items-center text-center flex"
                                            disabled
                                        />
                                    </div>
                                </div>
                                <div className="w-full">
                                    <label className="label">
                                        <span className="label-text text-lg font-medium">Applicantion Deadline</span>
                                    </label>
                                    <div className="w-full flex gap-6 items-center">
                                        <FaCalendarDays className=" text-2xl" />
                                        <DatePicker
                                            selected={deadlineDate}
                                            onChange={(date) => setdeadlineDate(date)}
                                            className="w-[430px] rounded-lg h-12 border-b-2 border-b-[#ffffffa7] bg-transparent text-[#080808] items-center text-center flex"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full my-10">
                                <button className="btn w-full text-lg bg-[#ded5c7] ">Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddJob;