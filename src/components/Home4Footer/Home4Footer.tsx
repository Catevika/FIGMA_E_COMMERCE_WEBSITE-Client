import { contact } from '../../data';
import Logo from '../Logo/Logo';
import BigFooterNavbarGray from '../Navigation/BigFooterNavbarGray/BigFooterNavbarGray';
import PaymentIcons from '../PaymentIcons/PaymentIcons';
import SocialLineIcons from '../SocialLineIcons/SocialLineIcons';
import './Home4Footer.css';

const Home4Footer = () => {
  const { address1, address2, postalCode, country, phoneNumber } = contact;

  return (
    <div className='home4-footer-container'>
      <div className='home3-footer-content'>
        <div className='home3-footer-top'>
          <div className='home3-footer-top-left'>
            <Logo />
            <div className='home3-footer-description'>
              <div className='home3-footer-nav-content'>
                <p>{address1}</p>
                <p>{address2} {postalCode}</p>
                <p>{country}</p>
                <p className='home3-footer-nav-phone-number'>{phoneNumber}</p>
              </div>
              <div className='home3-footer-social-line-icons'><SocialLineIcons /></div>
            </div>
          </div>
          <div className='home3-footer-nav'>
            <BigFooterNavbarGray />
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

export default Home4Footer;