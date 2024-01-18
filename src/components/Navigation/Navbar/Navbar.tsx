import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import usericon from '../../../assets/icons/user-icon.svg';
import Searchbar from '../../Searchbar/Searchbar';
import ShoppingCartIcons from '../../ShoppingCartIcons/ShoppingCartIcons';
import MegaMenuHome from '../MegaMenuHome/MegaMenuHome';
import './Navbar.css';

const Navbar = () => {
  const [ isSearchOpen, setIsSearchOpen ] = useState(false);

  const toggleSearchBar = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <>
      <nav className='nav' aria-label='Main-navigation'>
        <ul className='nav-ul'>
          <li className='nav-li'>
            <button type='button' className='mega-menu' aria-expanded='false' aria-controls='home-mega-menu-dropdown'>
              Home
            </button>
            <MegaMenuHome />
          </li>
          <li className='nav-li'><button className='mega-menu' aria-expanded='false' aria-controls='shop-mega-menu-dropdown'>Shop</button></li>
          <li className='nav-li'><button className='mega-menu' aria-expanded='false' aria-controls='product-mega-menu-dropdown'>Product</button></li>
          <NavLink to='/contact' className={({ isActive }) => isActive ? 'mega-menu active' : 'mega-menu'}>Contact us</NavLink>
        </ul>
      </nav>
      <div className={isSearchOpen ? 'nav-icons open' : 'nav-icons'}>
        <Searchbar isSearchOpen={isSearchOpen} toggleSearchBar={toggleSearchBar} />
        <div className='nav-other-icons'>
          <NavLink to='/account' className={({ isActive }) => isActive ? 'mega-menu active' : 'mega-menu'}><img src={usericon} alt='User icon' className='nav-icon' /></NavLink>
          <ShoppingCartIcons />
        </div>
      </div>
      {/* {isShopOpen ? <MegaMenuShop /> : null} */}
      {/* {isProductOpen ? <MegaMenuProduct /> : null} */}
    </>
  );
};

export default Navbar;