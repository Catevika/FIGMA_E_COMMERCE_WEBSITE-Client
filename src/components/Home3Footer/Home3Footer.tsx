import Logo from '../Logo/Logo';
import BigFooterNavbar from '../Navigation/BigFooterNavbar/BigFooterNavbar';
import PaymentIcons from '../PaymentIcons/PaymentIcons';
import SocialLineIcons from '../SocialLineIcons/SocialLineIcons';
import './Home3Footer.css';

const Home3Footer = () => {
  return (
    <div className='home3-footer-container'>
      <div className='home3-footer-content'>
        <div className='home3-footer-top'>
          <div className='home3-footer-top-left'>
            <Logo />
            <div className='home3-footer-description'>
              <div className='home3-footer-text'>
                <p className='label-2'>More than just a game. </p>
                <p className='label-2'>It's a lifestyle.</p>
              </div>
              <div className='home3-footer-social-line-icons'><SocialLineIcons /></div>
            </div>
          </div>
          <div className='home3-footer-nav'>
            <BigFooterNavbar />
          </div>
        </div>
        <div className='home3-footer-bottom'>
          <p className='caption-1 home3-footer-bottom-text'>Copyright © 2023 3legant. All rights reserved</p>
          <p className='caption-2 home3-footer-bottom-text'>
            <span>Privacy Policy</span>
            <span>Terms and conditions</span>
          </p>
          <PaymentIcons />
        </div>
      </div>
    </div>
  );
};

export default Home3Footer;