import React from 'react';
import './JobDetails.css'
import { useLoaderData, useParams } from 'react-router-dom';
const JobDetails = () => {
    const jobData = useLoaderData()
    const {id} = useParams()
    const idStr = parseInt(id)
    const job = jobData.find(job=> job.id === idStr)
    console.log(job);

    return (
        <div>
            <h2>Job Details: {job.job_title} </h2>
        </div>
    );
};

export default JobDetails;