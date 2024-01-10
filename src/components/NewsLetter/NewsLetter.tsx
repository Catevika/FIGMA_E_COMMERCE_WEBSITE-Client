import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import emailIconWhite from '../../assets/icons/email-icon-white.svg';
import emailIcon from '../../assets/icons/email-icon.svg';
import './NewsLetter.css';

const NewsLetter = () => {
  const location = useLocation();

  const [ newsletterEmail, setNewsletterEmail ] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewsletterEmail(e.target.value);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string; };
    };
    const email = target.email.value;
    localStorage.setItem('NewsletterEmail', email);
  };

  return (
    <div className='home-newsletter'>
      <div className='home-newsletter-top-text'>
        <h4>Join Our Newsletter</h4>
        <p>Sign up for deals, new products and promotions</p>
      </div>
      <div className='home-newsletter-bottom-email'>
        <form className='home-newsletter-bottom-email-form' method='POST' onSubmit={handleSubmit}>
          <label htmlFor='email'><img src={location.pathname.includes('home/3') ? emailIconWhite : emailIcon} alt='Email icon' />&nbsp;<input type='email' id='email' name='email' autoComplete='email' placeholder='Email address' value={newsletterEmail} onChange={handleChange} /></label>
          <button type='submit'>Submit</button>
        </form>
        <Link to='/signup' className='btn-small home-newsletter-link'>Signup</Link>
      </div>
    </div>
  );
};

export default NewsLetter;