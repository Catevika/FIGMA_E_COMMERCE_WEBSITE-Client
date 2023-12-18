import wishlisticon from '../../assets/icons/heart-icon-white.svg';
import numbericon from '../../assets/icons/number-icon.svg';
import './WishListIcons.css';

const WishListIcons = () => {
  return (
    <div className='wishlist'>
      <img src={wishlisticon} alt='Wish list icon' />
      <p><img src={numbericon} alt='Wishes number icon' />
        <span>2</span></p>
    </div>
  );
};

export default WishListIcons;