import React from 'react';
import './Category.css'

const Category = ({category}) => {
    const{availability, category_name, logo}= category
    return (
        <div className='category'>
            <img src={logo} alt="" />
            <p className='category-name'>{category_name}</p>
            <p className='availability'>{availability}</p>
        </div>
    );
};

export default Category;