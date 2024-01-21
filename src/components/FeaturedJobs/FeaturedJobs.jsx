import React, { useEffect, useState } from 'react';
import './FeaturedJobs.css'
import Job from '../Job/Job';

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        fetch('jobs.json')
        .then (res=> res.json())
        .then(data => setJobs(data))
    }, [])
    console.log(jobs);
    return (
        <div className='featured-jobs'>
            <h1>Featured Jobs</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='job-container'>
                {
                    jobs.map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;