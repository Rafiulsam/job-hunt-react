import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className='banner'>
            <div>
                <h1 className='banner-text'>One Step <br />Closer To Your <br /> <span className='gradient-text'>Dream Job</span></h1>
                <p className='banner-details'>
                    Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                </p>
                <button>Get Started</button>
            </div>
            <div>
                <img src="/src/assets/images/user.png" alt="" />
            </div>

        </div>
    );
};

export default Banner;