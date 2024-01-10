import { ChangeEvent, MouseEventHandler, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import chevronDownIcon from '../../../assets/icons/chevron-down.svg';
import closeicon from '../../../assets/icons/close-icon.svg';
import searchicon from '../../../assets/icons/search-icon.svg';
import { homeLinks } from '../../../data';
import Logo from '../../Logo/Logo';
import ShoppingCartIcons from '../../ShoppingCartIcons/ShoppingCartIcons';
import SocialLineIcons from '../../SocialLineIcons/SocialLineIcons';
import WishListIcons from '../../WishListIcons/WishListIcons';
import './HamburgerNavbar.css';

type Props = {
  toggleHamburgerMenu: MouseEventHandler<HTMLDivElement>;
};

const HamburgerNavbar = ({ toggleHamburgerMenu }: Props) => {
  const [ searchTerm, setSearchTerm ] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className='hamburgerNavbar-container'>
      <div className='hamburgerNavbar-content'>
        <div className='hamburgerNavbar-left'>
          <div className='hamburgerNavbar-left-top'>
            <Logo />
            <img src={closeicon} alt='Close icon' onClick={toggleHamburgerMenu} className='hamburgerNavbar-close-icon' />
          </div>
          <div className='hamburgerNavbar-search'>
            <img src={searchicon} alt='Search icon' className='hamburgerNavbar-nav-icon' />
            <input type='text' placeholder='Search' value={searchTerm} onChange={handleChange} name='search' />
          </div>
          <div className='hamburgerNavbar-left-middle'>
            <nav className='hamburgerNavbar-nav'>
              <ul className='hamburgerNavbar-ul'>
                <li className='hamburgerNavbar-li'>
                  <button type='button' className='mini-menu btn-xsmall' aria-expanded='false' aria-controls='home-mini-menu-dropdown'>Home <img src={chevronDownIcon} alt='Chevron down icon' className='hamburgerNavbar-icon' /></button>
                  <div className='home-mini-menu-container' id='home-mini-menu-dropdown'>
                    <div className='home-mini-menu-content' >
                      {homeLinks.map((homeLink) => <Link to={`/home/${homeLink.id}`} key={homeLink.id} className='home-mini-menu-item text-1'>{homeLink.link}</Link>)}
                    </div>
                  </div>
                </li>
                <li className='hamburgerNavbar-li'>
                  <button type='button' className='mini-menu btn-xsmall' aria-expanded='false' aria-controls='shop-mini-menu-dropdown'>Shop <img src={chevronDownIcon} alt='Chevron down icon' className='hamburgerNavbar-icon' /></button>
                </li>
                <li className='hamburgerNavbar-li'>
                  <button type='button' className='mini-menu btn-xsmall' aria-expanded='false' aria-controls='product-mini-menu-dropdown'>Product <img src={chevronDownIcon} alt='Chevron down icon' className='hamburgerNavbar-icon' /></button>
                </li>
                <NavLink to='/contact' className={({ isActive }) => isActive ? 'mini-menu active btn-xsmall' : 'mini-menu btn-xsmall'}>Contact us</NavLink>
              </ul>
            </nav>
          </div>
          <div className='hamburgerNavbar-left-bottom'>
            <ul className='hamburgerNavbar-ul'>
              <li className='hamburgerNavbar-li'>
                <button type='button' className='hamburgerNavbar-cart btn-xsmall'>Cart <ShoppingCartIcons /></button>
              </li>
              <li>
                <button type='button' className='hamburgerNavbar-wish btn-xsmall'>Wishlist <WishListIcons /></button>
              </li>
            </ul>
            <Link to='/signin' className='btn btn-small'>Sign In</Link>
            <div className='hamburgerNavbar-social-icons'><SocialLineIcons /></div>
          </div>
        </div>
        <div className='hamburgerNavbar-right'></div>
      </div>
    </div>
  );
};

export default HamburgerNavbar;