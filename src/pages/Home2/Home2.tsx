import { Link } from 'react-router-dom';
import arrowrighticon from '../../assets/icons/arrow-right-icon.svg';
import HomeProducts from '../../components/HomeProducts/HomeProducts';
import { home2Products, logos } from '../../data';
import './Home2.css';

const Home2 = () => {
  return (
    <section className='section-content'>
      <div className="home2-hero">
        <div className='home2-hero-text-container'>
          <div className='home2-hero-text'>
            <h1>Listen to the&nbsp;<span>amazing</span> music sound.</h1>
            <p className='label-2'>Experience music like never before</p>
          </div>
          <button className='btn-hero btn-medium'>Shopping Now</button>
        </div>
      </div>
      <div className="home2-hero-logos">
        {logos.map(logo => <img src={logo.logoUrl} key={logo.id} alt="Logo" />)}
      </div>
      <div className='home2-arrivals'>
        <div className='home2-link-group'>
          <h4>New Arrivals</h4>
          <Link to='#' className='home2-link btn-small'>More Products<img src={arrowrighticon} alt='arrow-right icon' /></Link>
        </div>
      </div>
      <HomeProducts products={home2Products} />
    </section>
  );
};

export default Home2;