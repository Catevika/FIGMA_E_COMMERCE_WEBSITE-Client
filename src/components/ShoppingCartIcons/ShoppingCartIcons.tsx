import numbericon from '../../assets/icons/number-icon.svg';
import shoppingbagicon from '../../assets/icons/shopping-bag-icon.svg';
import './ShoppingCartIcons.css';


const ShoppingCartIcons = () => {
  return (
    <div className='shopping-cart'>
      <img src={shoppingbagicon} alt='Shopping bag icon' />
      <p><img src={numbericon} alt='Products in cart number icon' />
        <span>2</span></p>
    </div>
  );
};

export default ShoppingCartIcons;