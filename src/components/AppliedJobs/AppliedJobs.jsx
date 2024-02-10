import React, { useEffect, useState } from 'react';
import './AppliedJobs.css'
import { useLoaderData } from 'react-router-dom';
import { getFromLocalStorage } from '../../utilities/localStorage';
import AppliedItem from '../AppliedItem/AppliedItem';

const AppliedJobs = () => {
    const jobs = useLoaderData()
    const [appliedJobs, setAppliedJobs] = useState([])
    useEffect(() => {
        const storedJobs = getFromLocalStorage()
        const jobApplied = []
        for (const id of storedJobs) {
            const job = jobs.find(job => job.id === id)
            jobApplied.push(job)
        }
        setAppliedJobs(jobApplied)

    }, [jobs])
    return (
        <div>
            <h2 className='title'>Applied Jobs</h2>
            <div>
                {
                    appliedJobs.map(job=> <AppliedItem key={job.id} job ={job}></AppliedItem>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;