import { MouseEventHandler, useState } from 'react';
import { NavLink } from 'react-router-dom';
import searchicon from '../../assets/icons/search-icon.svg';
import shoppingbagicon from '../../assets/icons/shopping-bag-icon.svg';
import usericon from '../../assets/icons/user-icon.svg';
import MegaMenuHome from '../MegaMenuHome/MegaMenuHome';
import './Navbar.css';


const Navbar = () => {
  const [ isHomeOpen, setIsHomeOpen ] = useState(false);
  const [ isShopOpen, setIsShopOpen ] = useState(false);
  const [ isProductOpen, setIsProductOpen ] = useState(false);

  const toggleMegaMenuHome = () => {
    setIsHomeOpen(!isHomeOpen);
  };

  const toggleMegaMenuShop = () => {
    setIsShopOpen(!isShopOpen);
  };

  const toggleMegaMenuProduct = () => {
    setIsProductOpen(!isProductOpen);
  };

  const handleMouseLeave: MouseEventHandler<HTMLDivElement> = () => toggleMegaMenuHome();

  return (
    <>
      <nav className='nav'>
        <div className={isHomeOpen ? 'mega-menu active' : 'mega-menu'} onClick={toggleMegaMenuHome}>Home</div>
        <div className={isShopOpen ? 'mega-menu active' : 'mega-menu'} onClick={toggleMegaMenuShop}>Shop</div>
        <div className={isProductOpen ? 'mega-menu active' : 'mega-menu'} onClick={toggleMegaMenuProduct}>Product</div>

        <NavLink to='/contact' className={({ isActive }) => isActive ? "mega-menu active" : "mega-menu"}>Contact us</NavLink>
      </nav>
      <div className='nav-icons'>
        <img src={searchicon} alt="Search icon" />
        <img src={usericon} alt="User icon" />
        <div className='shopping-cart'>
          <img src={shoppingbagicon} alt="Shopping bag icon" />
          <span className='nav-cart-number-icon'>2</span>
        </div>
      </div>
      {isHomeOpen ? <MegaMenuHome handleMouseLeave={handleMouseLeave} /> : null}
      {/* {isShopOpen ? <MegaMenuShop /> : null} */}
      {/* {isProductOpen ? <MegaMenuProduct /> : null} */}
    </>
  );
};

export default Navbar;