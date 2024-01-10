import { Link } from 'react-router-dom';
import whitearrowrighticon from '../../assets/icons/arrow-right-icon-white.svg';
import arrowrighticon from '../../assets/icons/arrow-right-icon.svg';
import heroImage from '../../assets/images/home-4/Home-4-Hero.png';
import redHood from '../../assets/images/home-4/Home-4-Sales.png';
import menWinterJacket from '../../assets/images/home-4/Home4-Video.png';
import HomeArticles from '../../components/HomeArticles/HomeArticles';
import HomeCategories from '../../components/HomeCategories/HomeCategories';
import HomeCollection from '../../components/HomeCollection/HomeCollection';
import HomeLogos from '../../components/HomeLogos/HomeLogos';
import HomeProducts from '../../components/HomeProducts/HomeProducts';
import HomeServices from '../../components/HomeServices/HomeServices';
import NewsFeed from '../../components/NewsFeed/NewsFeed';
import { Home4NewsFeedImages, home4Articles, home4Best, home4Categories, home4Products, logos, services } from '../../data';
import './Home4.css';

const Home4 = () => {
  return (
    <section className='section-content'>
      <div className='home4-hero-container'>
        <div className='home4-hero-content'>
          <img src={heroImage} alt="Man with a Winter jacket and dark gray scarf" />
        </div>
        <div className='home4-hero-text'>
          <h2 className='home4-hero-title'>Bring the warmth.</h2>
          <p className='text-3'>Everyone needs a good winter jacket. Find yours with our collection and more.</p>
          <Link to='#' className='home4-hero-btn btn-medium'>Shop Now</Link>
        </div>
      </div>
      <div className="home4-logos-container">
        <p className='text-3'>Trending brands</p>
        <HomeLogos logos={logos} />
      </div>
      <div className='home4-products-container'>
        <h4>Just in</h4>
        <HomeProducts products={home4Products} />
      </div>
      <div className="home4-categories-container">
        <h4>Shop by Categories</h4>
        <HomeCategories categories={home4Categories} />
      </div>

      <div className='home4-middle'>
        <div className='home4-middle-left-side-top'>
          <div className='home4-link-group'>
            <h5>November Outfits</h5>
            <Link to='#' className='home4-link btn-small'>Collection <img src={whitearrowrighticon} alt='arrow-right icon' /></Link>
          </div>
        </div>
        <div className='home4-middle-left-side-bottom'>
          <div className='home4-link-group'>
            <h5>Cashemere Set</h5>
            <Link to='#' className='home4-link btn-small'>Collection <img src={whitearrowrighticon} alt='arrow-right icon' /></Link>
          </div>
        </div>
        <div className='home4-middle-right-side-top'>
          <div className='home4-link-group'>
            <h5>The New Nordic</h5>
            <Link to='#' className='home4-link btn-small'>Collection <img src={whitearrowrighticon} alt='arrow-right icon' /></Link>
          </div>
        </div>
        <div className='home4-middle-right-side-bottom'>
          <div className='home4-link-group'>
            <h5>The Leather</h5>
            <Link to='#' className='home4-link btn-small'>Collection <img src={whitearrowrighticon} alt='arrow-right icon' /></Link>
          </div>
        </div>
      </div>
      <div className='home4-best-container'>
        <h4>Best Seller</h4>
        <HomeCollection products={home4Best} />
      </div>
      <div className='home4-sales'>
        <div className='home4-sales-left'><img src={redHood} alt='Person from behind whose red hood has got fur around' /></div>
        <div className='home4-sales-right'>
          <p className='label-1 btn-blue home4-sales-top-text'>Sales up to 35% OFF</p>
          <h4 className='home4-sales-title'><span>Hundreds</span> of New lower prices!</h4>
          <p className='text-3'>Hurry up!!! Winter is coming!</p>
          <Link to='#' className='btn btn-small'>Shop Now </Link>
        </div>
      </div>
      <div className='home4-promotion-container'>
        <div className='home4-promotion-text-container'>
          <p className='text-2'>Promotion</p>
          <h4>Winter Collection</h4>
          <p className='text-3'>Introducing the new Winter jackets.</p>
        </div>
        <div className='home4-video-container'>
          <img src={menWinterJacket} alt="Men Winter Jackets collection - Video" />
        </div>
      </div>
      <div className='home4-articles'>
        <div className='home4-link-group'>
          <h4>Latest Articles</h4>
          <Link to='#' className='home4-link btn-small'>More Articles <img src={arrowrighticon} alt='arrow-right icon' /></Link>
        </div>
        <HomeArticles articles={home4Articles} />
      </div>
      <NewsFeed Home2NewsFeedImages={Home4NewsFeedImages} />
      <div className='home4-services'>
        <HomeServices services={services} />
      </div>
    </section>
  );
};

export default Home4;