import { useState } from 'react';
import hamburgerMenu from '../../assets/icons/hamburger-menu.svg';
import Logo from '../Logo/Logo';
import HamburgerNavbar from '../Navigation/HamburgerNavbar/HamburgerNavbar';
import Navbar from '../Navigation/Navbar/Navbar';
import './Header.css';

const Header = () => {
  const [ hamburgerMenuOpen, setHamburgerMenuOpen ] = useState(false);

  const toggleHamburgerMenu = () => {
    setHamburgerMenuOpen(!hamburgerMenuOpen);
  };

  return (
    <header className='header-container'>
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