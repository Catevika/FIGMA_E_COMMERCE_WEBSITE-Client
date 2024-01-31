import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import usericon from '../../../assets/icons/user-icon.svg';
import { logOut, selectCurrentUser } from '../../../features/auth/authSlice';
import { useLogoutMutation } from '../../../features/user/userApiSlice';
import Searchbar from '../../Searchbar/Searchbar';
import ShoppingCartIcons from '../../ShoppingCartIcons/ShoppingCartIcons';
import MegaMenuHome from '../MegaMenuHome/MegaMenuHome';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  const [ isSearchOpen, setIsSearchOpen ] = useState(false);

  const toggleSearchBar = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const username = useSelector(selectCurrentUser);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [ logoutApiCall ] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall(username).unwrap();
      dispatch(logOut());
      navigate('/');
    } catch (error) {
      console.log(error);
    }
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
          {username ? <div className="profile-dropdown">
            <img src={usericon} alt='User icon' className='nav-icon' />
            <div className="profile-dropdown-content">
              {location.pathname !== `/users/${username}` ? <NavLink to={`/users/${username}`} className={({ isActive }) => isActive ? 'mega-menu active' : 'mega-menu'}>{username} account</NavLink> : null}
              <NavLink to='/' className={({ isActive }) => isActive ? 'mega-menu active' : 'mega-menu'} onClick={logoutHandler}>Logout</NavLink>
            </div>
          </div> : <p><Link to='/signin'>Sign in</Link></p>}
          <ShoppingCartIcons />
        </div>
      </div >
      {/* {isShopOpen ? <MegaMenuShop /> : null} */}
      {/* {isProductOpen ? <MegaMenuProduct /> : null} */}
    </>
  );
};

export default Navbar;