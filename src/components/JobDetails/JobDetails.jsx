import React from 'react';
import './JobDetails.css'
import { useLoaderData, useParams } from 'react-router-dom';
import { addToLocalStorage, getFromLocalStorage } from '../../utilities/localStorage';
import toast from 'react-hot-toast';
const JobDetails = () => {
    const jobData = useLoaderData()
    const { id } = useParams()
    const idStr = parseInt(id)
    const job = jobData.find(job => job.id === idStr)
    console.log(job);
    const { job_description, job_responsibility, company_name, educational_requirements, experiences, salary, job_title, contact_information } = job

    const handleApplyBtn = () => {
        const exist = getFromLocalStorage()
        if (!exist.includes(idStr)) {
            addToLocalStorage(idStr)
            toast.success('You have applied successfully')
        }
        else{
            toast.error('You have already applied for this job')
        }
    }
    return (
        <div>
            <h2 className='title'>Job Details</h2>
            <div className='job-details'>
                <div className='job-description'>
                    <p><strong>Job Description: </strong> {job_description}</p>
                    <p><strong>Job Responsibility: </strong>{job_responsibility}</p>
                    <p><strong>Educational Requirements: </strong>{educational_requirements}</p>
                    <p><strong>Experiences: </strong> {experiences}</p>
                </div>
                <div>
                    <div className='job-info'>
                        <div>
                            <h3>Job Details</h3>
                            <hr />
                            <p><strong>Salary: </strong>{salary}</p>
                            <p><strong>Job Title: </strong>{job_title}</p>
                        </div>
                        <div>
                            <h3>Contact Information</h3>
                            <hr />
                            <p><strong>Phone: </strong>{contact_information.phone}</p>
                            <p><strong>Email: </strong>{contact_information.email}</p>
                            <p><strong>Address: </strong>{contact_information.address}</p>
                        </div>
                    </div>
                    <button onClick={handleApplyBtn}>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;