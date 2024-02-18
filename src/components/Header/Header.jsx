import React, { useState } from 'react';
import "./Header.css"
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <nav className='header'>
                <Link to='/'><h1>JobHunt</h1></Link>
                <div className='navLinks'>
                    <NavLink className={({ isActive }) => isActive ? 'active' : ''} to='statistics'>Statistics</NavLink>
                    <NavLink to='appliedJobs'>Applied Jobs</NavLink>
                    <NavLink to='blog'>Blog</NavLink>
                </div>
                <button className='apply-btn'>Star Applying</button>

            </nav>
        </>
    );
};

export default Header;