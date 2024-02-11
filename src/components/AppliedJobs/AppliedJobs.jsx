import React, { useEffect, useState } from 'react';
import './AppliedJobs.css'
import { useLoaderData } from 'react-router-dom';
import { getFromLocalStorage } from '../../utilities/localStorage';
import AppliedItem from '../AppliedItem/AppliedItem';
import Dropdown from '../Dropdown/Dropdown';

const AppliedJobs = () => {
    const jobs = useLoaderData()
    const [appliedJobs, setAppliedJobs] = useState([])
    const [displayedJobs, setDisplayedJobs] = useState([])
    const handleFilteredJobs = filter => {
        if (filter === "all") {
            setDisplayedJobs(appliedJobs)
        }
        else if (filter === 'Remote') {
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote')
            setDisplayedJobs(remoteJobs)
        }
        else if (filter === 'Onsite') {
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === "Onsite")
            setDisplayedJobs(onsiteJobs)
        }
    }
    useEffect(() => {
        const storedJobs = getFromLocalStorage()
        const jobApplied = []
        for (const id of storedJobs) {
            const job = jobs.find(job => job.id === id)
            jobApplied.push(job)
        }
        setAppliedJobs(jobApplied)
        setDisplayedJobs(jobApplied)

    }, [jobs])
    return (
        <>
            <h2 className='title'>Applied Jobs</h2>
            <div className='applied-jobs'>
                <Dropdown handleFilteredJobs={handleFilteredJobs}></Dropdown>
                <div className='applied-jobs-container'>
                    {
                        displayedJobs.map(job => <AppliedItem key={job.id} job={job}></AppliedItem>)
                    }
                </div>
            </div>
        </>
    );
};

export default AppliedJobs;