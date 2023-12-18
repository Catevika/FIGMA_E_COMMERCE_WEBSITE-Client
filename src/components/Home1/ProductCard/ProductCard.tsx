import { useState } from 'react';
import favoriteIconBlack from '../../../assets/icons/heart-icon-black.svg';
import favoriteIconWhite from '../../../assets/icons/heart-icon-white.svg';
import { Product } from '../../../types';
import StarRating from '../StarRating/StarRating';
import './ProductCard.css';

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  const { url, newItem, percent, buttonLabel, name, price, oldPrice } = product;

  const [ isFavorite, setIsFavorite ] = useState(false);
  const toggleFavorite = () => setIsFavorite(!isFavorite);

  return (
    <>
      <div className='product-card-top'>
        <img src={url} alt={name} />
        <div className='product-card-labels-container'>
          <p className='product-card-labels-top'>
            {newItem ? <span className='product-card-new-label label-1'>New</span> : null}
            <span className='product-card-favorite-icon' onClick={toggleFavorite}>{isFavorite ? <img src={favoriteIconBlack} /> : <img src={favoriteIconWhite} />}</span>
          </p>
          <p className='product-card-percent-label label-1'>{percent}&#37;</p>
          <button className='product-card-button btn-small'>{buttonLabel}</button>
        </div>
      </div>
      <div className='product-card-bottom'>
        <StarRating />
        <p className='text-1'>{name}</p>
        <p className='text-1'>${price.toFixed(2)} <s className='text-1-strikethrough'>${oldPrice?.toFixed(2)}</s></p>
      </div>
    </>
  );
};

export default ProductCard;