import React, { useState } from 'react';
import './Dropdown.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'
const Dropdown = ({handleFilteredJobs}) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <a  className='dropdown' onClick={()=>setIsOpen(!isOpen)} >Filter By <span><FontAwesomeIcon icon={faSortDown} /></span></a>
            <div>
                {isOpen && ( <div className='dropdown-content'>
                    <ul>
                        <li onClick={()=>handleFilteredJobs('all')}>All</li>
                        <li onClick={()=>handleFilteredJobs('Onsite')}>Onsite</li>
                        <li onClick={()=>handleFilteredJobs('Remote')}>Remote</li>
                    </ul>
                </div>

                )}
            </div>
        </div>

    );
};

export default Dropdown;