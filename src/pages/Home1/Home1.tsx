import { useState } from 'react';
import { Link } from 'react-router-dom';
import arrowrighticon from '../../assets/icons/arrow-right-icon.svg';
import emailIcon from '../../assets/icons/email-icon.svg';
import homeSales from '../../assets/images/home-1/Home-1-Sales.png';
import Slider from '../../components/Home1/Slider/Slider.tsx';
import HomeArticles from '../../components/HomeArticles/HomeArticles.tsx';
import HomeProducts from '../../components/HomeProducts/HomeProducts.tsx';
import HomeServices from '../../components/HomeServices/HomeServices.tsx';
import { articles, products, services } from '../../data.tsx';
import './Home1.css';


const Home1 = () => {
  const [ newsletterEmail, setNewsletterEmail ] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewsletterEmail(e.target.value);
  };

  return (
    <section className='section-content'>
      <div className='home1-hero'>
        <Slider />
        <div className='home1-hero-text'>
          <h2 className='home1-hero-title'>Simply Unique<span>/ </span>Simply Better<span>.</span></h2>
          <p className='text-2-link'><strong>3legant</strong> is a gift & decorations store based in HCMC, Vietnam.Est since 2019. </p>
        </div>
      </div>
      <div className='home1-middle'>
        <div className='home1-middle-left-side'>
          <div className='home1-link-group'>
            <h5>Living Room</h5>
            <Link to='#' className='home1-link btn-small'>Shop Now <img src={arrowrighticon} alt='arrow-right icon' /></Link>
          </div>
        </div>
        <div className='home1-middle-right-side-top'>
          <div className='home1-link-group'>
            <h5>Bedroom</h5>
            <Link to='#' className='home1-link btn-small'>Shop Now <img src={arrowrighticon} alt='arrow-right icon' /></Link>
          </div>
        </div>
        <div className='home1-middle-right-side-bottom'>
          <div className='home1-link-group'>
            <h5>Kitchen</h5>
            <Link to='#' className='home1-link btn-small'>Shop Now <img src={arrowrighticon} alt='arrow-right icon' /></Link>
          </div>
        </div>
      </div>
      <div className='home1-arrivals'>
        <div className='home1-link-group'>
          <h4>New Arrivals</h4>
          <Link to='#' className='home1-link btn-small'>More Products<img src={arrowrighticon} alt='arrow-right icon' /></Link>
        </div>
      </div>
      <HomeProducts products={products} />
      <HomeServices services={services} />
      <div className='home1-sales'>
        <div className='home1-sales-left'><img src={homeSales} alt='Living room' /></div>
        <div className='home1-sales-right'>
          <p className='label-1 btn-blue home1-sales-top-text'>Sale up to 25% off</p>
          <h4 className='home1-sales-title'><span>Hundreds</span> of New lower prices!</h4>
          <p>It's more affordable than ever to give every room in your home a stylish makeover</p>
          <Link to='#' className='home1-link btn-small'>Shop Now <img src={arrowrighticon} alt='arrow-right icon' /></Link>
        </div>
      </div>
      <div className='home1-articles'>
        <div className='home1-link-group'>
          <h4>Articles</h4>
          <Link to='#' className='home1-link btn-small'>More Articles<img src={arrowrighticon} alt='arrow-right icon' /></Link>
        </div>
        <HomeArticles articles={articles} />
      </div>
      <div className='home-newsletter-container'>
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
      </div>
    </section>
  );
};

export default Home1;