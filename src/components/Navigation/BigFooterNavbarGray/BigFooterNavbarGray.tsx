import { NavLink } from 'react-router-dom';
import Home4NewsLetter from '../../Home4NewsLetter/Home4NewsLetter';
import './BigFooterNavbarGray.css';

const BigFooterNavbarGray = () => {
  return (
    <div className='home3-footer-nav-container'>
      <div className='home3-footer-nav-content'>
        <p className='home3-footer-nav-name'>Page</p>
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
              <NavLink to='/articles/1' className={({ isActive }) => isActive ? 'footer-nav-link active' : 'footer-nav-link'}>Articles</NavLink>
            </li>
            <li className='footer-nav-li'>
              <NavLink to='/contact' className={({ isActive }) => isActive ? 'footer-nav-link active' : 'footer-nav-link'}>Contact us</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className='home3-footer-nav-content'>
        <p className='home3-footer-nav-name'>Info</p>
        <nav className='footer-nav' aria-label='Secondary-navigation'>
          <ul className='footer-nav-ul'>
            <li className='footer-nav-li'>
              <NavLink to='/shipping' className={({ isActive }) => isActive ? 'footer-nav-link active' : 'footer-nav-link'}>Shipping-policy</NavLink>
            </li>
            <li className='footer-nav-li'>
              <NavLink to='/return' className={({ isActive }) => isActive ? 'footer-nav-link active' : 'footer-nav-link'}>Return & Refund</NavLink>
            </li>
            <li className='footer-nav-li'>
              <NavLink to='/support' className={({ isActive }) => isActive ? 'footer-nav-link active' : 'footer-nav-link'}>Support</NavLink>
            </li>
            <li className='footer-nav-li'>
              <NavLink to='/faqs' className={({ isActive }) => isActive ? 'footer-nav-link active' : 'footer-nav-link'}>FQAs</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <Home4NewsLetter />
    </div>
  );
};

export default BigFooterNavbarGray;