import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import hamburgerMenu from '../../assets/icons/hamburger-menu.svg';
import Logo from '../Logo/Logo';
import HamburgerNavbar from '../Navigation/HamburgerNavbar/HamburgerNavbar';
import Navbar from '../Navigation/Navbar/Navbar';
import './Header.css';

const Header = () => {
  const location = useLocation();

  const [ hamburgerMenuOpen, setHamburgerMenuOpen ] = useState(false);

  const toggleHamburgerMenu = () => {
    setHamburgerMenuOpen(!hamburgerMenuOpen);
  };

  let backgroundStyle;
  if (location.pathname.includes('home/2')) {
    backgroundStyle = { 'backgroundColor': 'var(--clr-light-orange)' };
  } else {
    backgroundStyle = { 'backgroundColor': 'var(--clr-white)' };
  }


  return (
    <header className='header-container' style={backgroundStyle}>
      <div className='header-content'>
        <div className='nav-hamburger-container' onClick={toggleHamburgerMenu}>
          <img src={hamburgerMenu} alt='Hamburger menu icon' />
        </div>
        <Logo />
        {hamburgerMenuOpen ? <HamburgerNavbar toggleHamburgerMenu={toggleHamburgerMenu} /> : <Navbar />}
      </div>
    </header>
  );
};

export default Header;