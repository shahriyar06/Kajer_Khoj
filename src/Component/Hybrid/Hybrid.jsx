import { useEffect, useState } from "react";
import JobTab from "../JobTab/JobTab";

const Hybrid = () => {

    const [ alljob, setalljob ] =useState([])

    useEffect(() => {
        fetch('https://kajer-khoj-server.vercel.app/joblist')
            .then(res => res.json())
            .then(data => {
                setalljob(data)
            });
    } , [])
    const hybrid = alljob.filter(job => job.jobcategory === 'Hybrid');

    return (
        <div className="grid grid-cols-3 gap-5 mt-4">
            {
                hybrid.map( joblist => <JobTab joblist={joblist} key={joblist._id}></JobTab>)
            }
        </div>
    );
};

export default Hybrid;