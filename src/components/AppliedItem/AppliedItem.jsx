import React from 'react';
import './AppliedItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const AppliedItem = ({ job }) => {
    const { id, logo, company_name, job_title, remote_or_onsite, salary,
        location, job_type } = job
    console.log(job);
    return (
        <div className='item'>
            <div className='flex'>
                <img src={logo} alt="" />
                <div>
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
                </div>
            </div>
            <Link to={`/job/${id}`}> <button>View Details</button></Link>
        </div>
    );
};

export default AppliedItem;