import { useState } from 'react';
import whitearrowrighticon from '../../assets/icons/arrow-right-icon-white.svg';
import './Home4NewsLetter.css';

const Home4NewsLetter = () => {
  const [ newsletterEmail, setNewsletterEmail ] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewsletterEmail(e.target.value);
  };
  return (
    <div className='home3-footer-nav-content'>
      <p className='home3-footer-nav-name'>Join our Newsletter</p>
      <p>Subscribe our newsletter to get more deals, new products and promotions</p>
      <form method='POST' className='home4-newsletter-email-container'>
        <input type='email' name='email' placeholder='Enter your email' autoComplete='email' value={newsletterEmail} onChange={handleChange} className='caption-1 home4-newsletter-email' />
        <button type='submit'>
          <img src={whitearrowrighticon} alt="Right arrow icon" />
        </button>
      </form>
    </div>
  );
};

export default Home4NewsLetter;