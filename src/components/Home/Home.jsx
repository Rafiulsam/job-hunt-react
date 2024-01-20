import React from 'react';
import Banner from '../Banner/Banner';
import './Home.css'
import CategoryList from '../CategoryList/CategoryList';

const Home = () => {
    return (
        <div>
            <section className='banner-section'>
             <Banner></Banner>
            </section>
            <CategoryList></CategoryList>
        </div>
    );
};

export default Home;