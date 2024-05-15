import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";
import { Helmet } from "react-helmet-async";
import MyjobPostlist from "../../Component/MyjobPostlist/MyjobPostlist";
import Swal from "sweetalert2";


const Myjobs = () => {

    const [alljoblist, setalljoblist] = useState([]);

    useEffect(() => {
        fetch('https://kajer-khoj-server.vercel.app/joblist')
            .then(res => res.json())
            .then(data => {
                setalljoblist(data)
            });
    } , [])

    const { user } = useContext(AuthContext)
    const { email } = user;

    const handledelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://kajer-khoj-server.vercel.app/joblist/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remainigmyJobs = alljoblist.filter(jobs => jobs._id !== _id);
                            setalljoblist(remainigmyJobs)

                        }
                    })
            }
        });
    }

    const allmyJobs = alljoblist.filter(job => job.email === email);

    
    return (
        <div className="my-10">
            <Helmet>
                <title>Kajer khoj | myjobs</title>
            </Helmet>
            <div className="w-11/12 mx-auto grid grid-cols-1  lg:grid-cols-2 gap-4">
                {
                    allmyJobs.map(myJobslist => <MyjobPostlist myJobslist={myJobslist} key={myJobslist._id} handledelete={handledelete}></MyjobPostlist>
                )
                }
            </div>
        </div>
    );
};

export default Myjobs;