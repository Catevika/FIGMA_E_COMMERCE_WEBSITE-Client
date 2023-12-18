import Logo from '../Logo/Logo';
import Navbar from '../Navigation/Navbar/Navbar';
import SocialLineIcons from '../SocialLineIcons/SocialLineIcons';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-content'>
        <div className='footer-top'>
          <p className='footer-top-left'>
            <Logo />
            <span className='footer-description'>Gift & Decoration Store</span>
          </p>
          <Navbar />
        </div>
        <div className='footer-bottom'>
          <p className='caption-1 footer-bottom-text'>Copyright © 2023 3legant. All rights reserved</p>
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
          <SocialLineIcons />
        </div>
      </div>
    </div>
  );
};

export default Footer;