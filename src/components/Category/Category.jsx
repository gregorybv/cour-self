import { Link } from "react-router-dom";
import { CategoryItemWrapper } from './Category.styles';
import { memo } from 'react';

export const Category = memo(({image, category}) => {
  return (
    <Link to={`/category/${category}`}>
      <CategoryItemWrapper className='flex flex-column bg-alice-blue'>
        <div className='category-item-img'>
          <img src={image} alt={category}/>
        </div>
        <div className='category-item-name'>
          <h6>{category}</h6>
        </div>
      </CategoryItemWrapper>
    </Link>
  )
});
