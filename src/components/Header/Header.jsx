import React from 'react';
import "./Header.css"
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header'>
            <h1><Link to='/'>JobHut</Link></h1>
            <div className='navLinks'>
                <NavLink to='statistics'>Statistics</NavLink>
                <NavLink to='appliedJobs'>Applied Jobs</NavLink>
                <NavLink to='blog'>Blog</NavLink>
            </div>
            <button className='apply-btn'>Star Applying</button>
        </nav>
    );
};

export default Header;