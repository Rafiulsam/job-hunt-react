import React from 'react';
import Banner from '../Banner/Banner';
import './Home.css'
import CategoryList from '../CategoryList/CategoryList';
import { useLoaderData } from 'react-router-dom';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Home = () => {
    return (
        <div>
            <section className='banner-section'>
             <Banner></Banner>
            </section>
            <CategoryList></CategoryList>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;