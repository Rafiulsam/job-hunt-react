import React from 'react';
import Banner from '../Banner/Banner';
import './Home.css'
import CategoryList from '../CategoryList/CategoryList';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const categories = useLoaderData()
    console.log(categories);
    return (
        <div>
            <section className='banner-section'>
             <Banner></Banner>
            </section>
            <CategoryList categories ={categories}></CategoryList>
        </div>
    );
};

export default Home;