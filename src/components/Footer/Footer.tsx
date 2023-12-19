import Logo from '../Logo/Logo';
import FooterNavbar from '../Navigation/FooterNavbar/FooterNavbar';
import SocialLineIcons from '../SocialLineIcons/SocialLineIcons';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-content'>
        <div className='footer-top'>
          <p className='footer-top-left'>
            <Logo />
            <span className='caption-1 footer-description'>Gift & Decoration Store</span>
          </p>
          <FooterNavbar />
        </div>
        <div className='footer-bottom'>
          <p className='caption-1 footer-bottom-text'>Copyright © 2023 3legant. All rights reserved</p>
          <p className='caption-2 footer-bottom-text'>
            <span>Privacy Policy</span>
            <span>Terms of Use</span>
          </p>
          <SocialLineIcons />
        </div>
      </div>
    </div>
  );
};

export default Footer;