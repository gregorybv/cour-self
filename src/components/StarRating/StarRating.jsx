import React, { memo, useCallback } from 'react';
import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";
import { Star } from './StarRating.styles';

export const StarRating = memo(({rating_star}) => {
  const renderStars = useCallback(() => {
    return Array.from({length: 5}, (_, idx) => {
      const currentValue = idx + 1;
      const halfValue = idx + 0.5;
      return (
        <Star key={idx}>
          {rating_star >= currentValue ? (
            <BsStarFill/>
          ) : rating_star >= halfValue ? (
            <BsStarHalf/>
          ) : (
            <BsStar/>
          )}
        </Star>
      );
    });
  }, [rating_star]);

  return <div>{renderStars()}</div>;
});
