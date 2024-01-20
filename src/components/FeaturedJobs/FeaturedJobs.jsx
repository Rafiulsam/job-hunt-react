import React, { useEffect, useState } from 'react';
import './FeaturedJobs.css'
import fetchJobs from '../../loader/loadJobs';

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchJobs();
            setJobs(data);
        };

        fetchData();
    }, [])
    console.log(jobs);
    return (
        <div className='featured-jobs'>
            <h1>Featured Jobs</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div>

            </div>
        </div>
    );
};

export default FeaturedJobs;