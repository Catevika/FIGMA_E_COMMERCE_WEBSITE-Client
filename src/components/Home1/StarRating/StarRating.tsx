import { useState } from 'react';
import starBlack from '../../../assets/icons/star-icon-black.svg';
import starGold from '../../../assets/icons/star-icon-gold.svg';
import './StarRating.css';

const StarRating = () => {
  const [ rating, setRating ] = useState(0);
  const [ hover, setHover ] = useState(0);

  return (
    <p className='star-rating'>
      {[ ...Array(5) ].map((_, index) => {
        index += 1;
        return (
          <span key={index}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
            onDoubleClick={() => {
              setRating(0);
              setHover(0);
            }}
            className='star-rating-stars'>
            {index <= (hover || rating) ? <img src={starGold} /> : <img src={starBlack} />}
          </span>
        );
      })}
    </p >
  );
};

export default StarRating;