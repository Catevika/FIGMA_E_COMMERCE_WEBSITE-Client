import { Link } from 'react-router-dom';
import arrowrighticon from '../../assets/icons/arrow-right-icon.svg';
import headbandMan from '../../assets/images/home-2/headband-person-1.png';
import CountDownTimer from '../../components/CountDownTimer/CountDownTimer';
import HomeCollection from '../../components/HomeCollection/HomeCollection';
import HomeLogos from '../../components/HomeLogos/HomeLogos';
import HomeProducts from '../../components/HomeProducts/HomeProducts';
import HomeServices from '../../components/HomeServices/HomeServices';
import NewsFeed from '../../components/NewsFeed/NewsFeed';
import NewsLetter from '../../components/NewsLetter/NewsLetter';
import { Home2NewsFeedImages, home2Products, logos, services } from '../../data';
import './Home2.css';

const Home2 = () => {
  const startDate = '01/05/2024';
  const endDate = '01/15/2024';

  const now = new Date();
  const nowMs = now.getTime();

  const startDateInDateFormat = new Date(startDate);
  const startDateMs = startDateInDateFormat.getTime();

  const endDateInDateFormat = new Date(endDate);
  const endDateMs = endDateInDateFormat.getTime();

  let targetDate;
  startDateMs > nowMs ? targetDate = startDateMs : targetDate = endDateMs;

  // Promotion ends in 3 days from now
  // const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  // const NOW_IN_MS = new Date().getTime();

  // const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  return (
    <section className='section-content'>
      <div className='home2-hero-container'>
        <div className='home2-hero-text-container'>
          <div className='home2-hero-text'>
            <h1>Listen&nbsp;to the&nbsp;<span>amazing</span> music&nbsp;sound.</h1>
            <p className='label-2'>Experience music like never before</p>
          </div>
          <button className='btn-hero btn-medium'>Shopping Now</button>
        </div>
      </div>
      <div className="home2-logos-container">
        <HomeLogos logos={logos} />
      </div>
      <div className='home2-arrivals'>
        <div className='home2-link-group'>
          <h4>New Arrivals</h4>
          <Link to='#' className='home2-link btn-small'>More Products<img src={arrowrighticon} alt='arrow-right icon' /></Link>
        </div>
      </div>
      <HomeProducts products={home2Products} />
      <div className='home2-middle-container'>
        <div className='home2-middle-top-container'>
          <h4>Shop Collection</h4>
          <div className='home2-middle'>
            <div className='home2-middle-left-side'>
              <div className='home2-link-group'>
                <h5>Headband</h5>
                <Link to='#' className='home2-link btn-small'>Collection <img src={arrowrighticon} alt='arrow-right icon' /></Link>
              </div>
            </div>
            <div className='home2-middle-right-side-top'>
              <div className='home2-link-group'>
                <h5>Earbuds</h5>
                <Link to='#' className='home2-link btn-small'>Collection <img src={arrowrighticon} alt='arrow-right icon' /></Link>
              </div>
            </div>
            <div className='home2-middle-right-side-bottom'>
              <div className='home2-link-group'>
                <h5>Accessories</h5>
                <Link to='#' className='home2-link btn-small'>Collection <img src={arrowrighticon} alt='arrow-right icon' /></Link>
              </div>
            </div>
          </div>
        </div>
        <div className='home2-middle-bottom-container'>
          <div className='home2-middle-top-container'>
            <h4>Best Seller</h4>
            <HomeCollection products={home2Products} />
          </div>
        </div>
      </div>
      <div className='home2-sales'>
        <div className='home2-sales-left'><img src={headbandMan} alt='Man with a headband' /></div>
        <div className='home2-sales-right'>
          <p className='label-1 btn-blue home2-sales-top-text'>Promotion</p>
          <h4 className='home2-sales-title'><span>Hurry up! 40% OFF</span></h4>
          <p className='text-3'>Thousands of high tech products are waiting for you</p>
          {startDateMs > nowMs ? <p>Offer starts in:</p> : <p>Offer expires in:</p>}
          <CountDownTimer targetDate={targetDate} />
          <Link to='#' className='btn btn-small'>Shop Now </Link>
        </div>
      </div>
      <HomeServices services={services} />
      <NewsFeed Home2NewsFeedImages={Home2NewsFeedImages} />
      <div className='home2-newsletter-container'>
        <NewsLetter />
      </div>

    </section>
  );
};

export default Home2;