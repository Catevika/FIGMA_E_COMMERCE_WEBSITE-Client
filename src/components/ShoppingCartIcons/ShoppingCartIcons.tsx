import { useLocation } from 'react-router-dom';
import numbericon from '../../assets/icons/number-icon.svg';
import shoppingbagicon from '../../assets/icons/shopping-bag-icon.svg';
import './ShoppingCartIcons.css';


const ShoppingCartIcons = () => {
  const location = useLocation();

  let colorStyle;
  if (location.pathname.includes('home/2')) {
    colorStyle = { 'color': 'var(--clr-orange)' };
  } else {
    colorStyle = { 'color': 'var(--clr-white)' };
  }


  return (
    <div className='shopping-cart'>
      <img src={shoppingbagicon} alt='Shopping bag icon' />
      <p><img src={numbericon} alt='Products in cart number icon' />
        <span style={colorStyle}>2</span></p>
    </div>
  );
};

export default ShoppingCartIcons;