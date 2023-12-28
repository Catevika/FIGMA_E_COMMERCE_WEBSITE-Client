import { useState } from 'react';
import { Link } from 'react-router-dom';
import emailIcon from '../../assets/icons/email-icon.svg';
import './NewsLetter.css';

const NewsLetter = () => {
  const [ newsletterEmail, setNewsletterEmail ] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewsletterEmail(e.target.value);
  };
  return (
    <div className='home-newsletter'>
      <div className='home-newsletter-top-text'>
        <h4>Join Our Newsletter</h4>
        <p>Sign up for deals, new products and promotions</p>
      </div>
      <div className='home-newsletter-bottom-email'>
        <form className='home-newsletter-bottom-email-form' method='POST'>
          <label htmlFor='email'><img src={emailIcon} alt='Email icon' />&nbsp;<input type='email' id='email' name='email' autoComplete='email' placeholder='Email address' value={newsletterEmail} onChange={handleChange} /></label>
          <button type='submit'>Submit</button>
        </form>
        <Link to='/signup' className='home1-link btn-small home-newsletter-link'>Signup</Link>
      </div>
    </div>
  );
};

export default NewsLetter;