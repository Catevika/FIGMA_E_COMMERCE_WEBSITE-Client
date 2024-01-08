import { NavLink } from 'react-router-dom';
import './FooterNavbar.css';

const FooterNavbar = () => {
  return (
    <nav className='footer-nav' aria-label='Secondary-navigation'>
      <ul className='footer-nav-ul'>
        <li className='footer-nav-li'>
          <NavLink to='/home/1' className={({ isActive }) => isActive ? 'footer-nav-link active' : 'footer-nav-link'}>Home</NavLink>
        </li>
        <li className='footer-nav-li'>
          <NavLink to='/shop/1' className={({ isActive }) => isActive ? 'footer-nav-link active' : 'footer-nav-link'}>Shop</NavLink>
        </li>
        <li className='footer-nav-li'>
          <NavLink to='/product/1' className={({ isActive }) => isActive ? 'footer-nav-link active' : 'footer-nav-link'}>Product</NavLink>
        </li>
        <li className='footer-nav-li'>
          <NavLink to='/contact' className={({ isActive }) => isActive ? 'footer-nav-link active' : 'footer-nav-link'}>Contact us</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNavbar;