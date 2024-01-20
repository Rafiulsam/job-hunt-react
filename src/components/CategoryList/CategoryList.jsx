import './CategoryList.css'

const CategoryList = ({categories}) => {
        console.log(categories);
    return (
        <div className='categories'>
            <h1 className='categories-title'>Job Category List</h1>
            <p className='categories-details'>Explore thousands of job opportunities with all the information you need. Its your future</p> 
        </div>
    );
};

export default CategoryList;