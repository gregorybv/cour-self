import { Link } from "react-router-dom";
import { StarRating } from "../StarRating";
import { useCartContext } from '../../context/cart_context';
import { CourseCard } from './Course.styles';
import { memo } from 'react';

export const Course = memo((props) => {
  const {id, image, course_name, creator, actual_price, discounted_price, rating_count, rating_star, category} = props;
  const {addToCart} = useCartContext();

  return (
    <CourseCard>
      <div className='item-img'>
        <img src={image} alt={course_name}/>
      </div>
      <div className='item-body'>
        <h5 className='item-name'>{course_name}</h5>
        <span className='item-creator'>{creator}</span>
        <div className='item-rating flex'>
          <span className='rating-star-val'>{rating_star}</span>
          <StarRating rating_star={rating_star}/>
          <span className='rating-count'>({rating_count})</span>
        </div>
        <div className='item-price'>
          <span className='item-price-new'>${discounted_price}</span>
          <span className='item-price-old'>${actual_price}</span>
        </div>
      </div>
      <div className='item-btns flex'>
        <Link to={`/courses/${id}`} className="item-btn see-details-btn">See details</Link>
        <Link to="/cart" className='item-btn add-to-cart-btn'
              onClick={() => addToCart(id, image, course_name, creator, discounted_price, category)}>Add to cart</Link>
      </div>
    </CourseCard>
  )
});
