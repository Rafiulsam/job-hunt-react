import Category from '../Category/Category';
import './CategoryList.css'

const CategoryList = ({categories}) => {
    return (
        <div className='categories'>
            <h1 className='categories-title'>Job Category List</h1>
            <p className='categories-details'>Explore thousands of job opportunities with all the information you need. Its your future</p> 
            <div className='categories-container'>
                {
                    categories.map(category => <Category key={category.id} category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default CategoryList;