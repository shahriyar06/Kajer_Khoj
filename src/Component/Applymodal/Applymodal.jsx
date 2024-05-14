import { useContext } from "react";
import { AuthContext } from "../../Page/FirebaseProvider/FirebaseProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const Applymodal = () => {

    const { user } = useContext(AuthContext)
    const jobdetaillist = useLoaderData();
    const { jobtitle } = jobdetaillist;
    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const resumeurl = form.resumeurl.value;
        const contact = form.contact.value;
        const gender = form.gender.value;
        const image = form.image.value;
        const jobtitle = jobdetaillist.jobtitle;
        const jobcategory = jobdetaillist.jobcategory;
        const imageurl = jobdetaillist.imageurl;
        const description = jobdetaillist.description;
        const salaryrange = jobdetaillist.salaryrange;
        const address = jobdetaillist.address;
        const experience = jobdetaillist.experience;
        const applicationdeadline = jobdetaillist.applicationdeadline;
        const jobapplicants = parseInt(jobdetaillist.jobapplicants) + 1;

        const appliedjob = { name, email, image, contact, gender, resumeurl, jobtitle, jobcategory, imageurl, description, salaryrange, applicationdeadline, experience, address, jobapplicants }
        
        // set data to server
        fetch('https://kajer-khoj-server.vercel.app/applylist', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appliedjob)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    Swal.fire({
                        position: "middle-center",
                        icon: "success",
                        title: "You have been applied.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    form.reset();
                }
            })

         // update applicants database


         fetch(`https://kajer-khoj-server.vercel.app/joblist/${jobdetaillist._id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appliedjob)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })


    }

    return (
        <div>
            <Helmet>
                <title>Kajer khoj | apply</title>
            </Helmet>
            <div className="my-6">
                <form onSubmit={handleSubmit} className="w-9/12 mx-auto bg-[#cff7f0ba] p-4 rounded-2xl">
                    <h1 className="text-4xl font-semibold text-center">{jobtitle}</h1>
                    {/* Email and name */}
                    <div className="md:flex gap-6 justify-between">
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-lg font-medium">Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={user.displayName} placeholder={user.displayName} className="input w-full border-b-2 border-b-[#080808] dark:border-b-[#ffffffa7] bg-transparent" style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: '#080808' }} disabled />
                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-lg font-medium">Email</span>
                            </label>
                            <input type="text" name="email" defaultValue={user.email} placeholder={user.email} className="input w-full border-b-2 border-b-[#080808] dark:border-b-[#ffffffa7] bg-transparent" style={{ backgroundColor: 'rgba(0, 0, 0, 0)', color: '#080808' }} disabled />
                        </div>
                    </div>
                    {/* Contact number and Gender */}
                    <div className="md:flex gap-6 justify-between">
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-lg font-medium">Contact Number</span>
                            </label>
                            <input type="text" name="contact" placeholder='Contact Number' className="input w-full border-b-2 border-b-[#080808] dark:border-b-[#ffffffa7] bg-transparent" required />
                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-lg font-medium">Gender</span>
                            </label>
                            <input type="text" name="gender" placeholder="Gender" className="input w-full border-b-2 border-b-[#080808] dark:border-b-[#ffffffa7] bg-transparent"  required/>
                        </div>
                    </div>
                    {/* Photo Url */}
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text text-lg font-medium text-black dark:text-white">Applicant Image</span>
                        </label>
                        <input type="url" name="image" placeholder='Image Url' className="input  w-full border-b-2 border-b-[#080808] dark:border-b-[#ffffffa7] bg-transparent placeholder-[#080808]" required />
                    </div>
                    <div className="w-full">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Resume</span>
                        </label>
                        <input type="url" name="resumeurl" placeholder="Resume Url" className="input  w-full bg-transparent placeholder-[#080808] border-b-2 border-b-[#080808] dark:border-b-[#ffffffa7]" required />
                    </div>
                    <div className="text-center my-6">
                        <button className="btn btn-accent text-lg text-white">
                            Submit Application
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Applymodal;