import React from 'react';
import './Job.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const Job = ({ job }) => {
    const { company_name, job_title, job_type, location, salary, logo, remote_or_onsite, id } = job
    return (
        <div className='job'>
            <img src={logo} alt="" />
            <p className='job-title'>{job_title}</p>
            <p className='company-name'>{company_name}</p>
            <div className='flex'>
                <p className='box'>{remote_or_onsite}</p>
                <p className='box'>{job_type}</p>
            </div>
            <div className='flex'>
                <p className='location'><span><FontAwesomeIcon icon={faLocationDot} />
                </span> {location}</p>
                <p className='salary'> <span><FontAwesomeIcon icon={faMoneyBill} /></span> Salary: {salary}</p>
            </div>
            <Link to={`job/${id}`}> <button>View Details</button></Link>
        </div>
    );
};

export default Job;