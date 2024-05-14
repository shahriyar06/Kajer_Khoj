import { useEffect, useState } from "react";
import JobTab from "../JobTab/JobTab";


const AllJobsoffer = () => {
    const [ alljob, setalljob ] =useState([])

    useEffect(() => {
        fetch('https://kajer-khoj-server.vercel.app/joblist')
            .then(res => res.json())
            .then(data => {
                setalljob(data)
            });
    } , [])

    return (
        <div className="grid grid-cols-3 gap-5 mt-4">
            {
                alljob.map( joblist => <JobTab joblist={joblist} key={joblist._id}></JobTab>)
            }
        </div>
    );
};

export default AllJobsoffer;