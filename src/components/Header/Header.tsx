import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';
import './Header.css';

// TODO Searchbar
// TODO User profile page
// TODO Shopping Cart checkout + Shopping Cart page
// TODO Update according to added product

const Header = () => {
  return (
    <header className='header-container'>
      <Logo />
      <Navbar />
    </header>
  );
};

export default Header;