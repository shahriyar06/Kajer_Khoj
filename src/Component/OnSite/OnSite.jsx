import { useEffect, useState } from "react";
import JobTab from "../JobTab/JobTab";


const OnSite = () => {
    const [ alljob, setalljob ] =useState([])

    useEffect(() => {
        fetch('https://kajer-khoj-server.vercel.app/joblist')
            .then(res => res.json())
            .then(data => {
                setalljob(data)
            });
    } , [])
    const Onsite = alljob.filter(job => job.jobcategory === 'On-Site Job');
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
            {
                Onsite.map( joblist => <JobTab joblist={joblist} key={joblist._id}></JobTab>)
            }
        </div>
    );
};

export default OnSite;