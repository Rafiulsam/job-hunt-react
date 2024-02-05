import React, { useEffect, useState } from 'react';
import './FeaturedJobs.css';
import Job from '../Job/Job';

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const response = await fetch('/jobs.json');
            const data = await response.json();
            setJobs(data.slice(0, 4));
        };

        loadData();
    }, []);

    const handleSeeAllBtn = async () => {
        const response = await fetch('/jobs.json');
        const data = await response.json();
        setJobs(data);
    };

    return (
        <div className='featured-jobs'>
            <h1>Featured Jobs</h1>
            <p>Explore thousands of job opportunities with all the information you need. It's your future.</p>
            <div className='job-container'>
                {jobs.map(job => (
                    <Job key={job.id} job={job}></Job>
                ))}
            </div>
            {jobs.length === 4 && (
                <button onClick={handleSeeAllBtn}>See All Jobs</button>
            )}
        </div>
    );
};

export default FeaturedJobs;
