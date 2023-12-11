import fbIcon from '../../assets/icons/social-outline-facebook.svg';
import instaIcon from '../../assets/icons/social-outline-instagram.svg';
import youtubeIcon from '../../assets/icons/social-outline-youtube.svg';
import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';
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
          <p className='footer-bottom-icons'>
            <img src={instaIcon} alt='Instagram icon' />
            <img src={fbIcon} alt='Facebook icon' />
            <img src={youtubeIcon} alt='Youtube icon' />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;