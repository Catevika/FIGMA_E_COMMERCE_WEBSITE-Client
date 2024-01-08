import { Link } from 'react-router-dom';
import arrowrighticon from '../../assets/icons/arrow-right-icon.svg';
import golfAccessories from '../../assets/images/home-3/Home-3-limited-edition-1.png';
import CountDownTimer from '../../components/CountDownTimer/CountDownTimer';
import HomeArticles from '../../components/HomeArticles/HomeArticles';
import HomeCategories from '../../components/HomeCategories/HomeCategories';
import HomeProducts from '../../components/HomeProducts/HomeProducts';
import NewsFeed from '../../components/NewsFeed/NewsFeed';
import NewsLetter from '../../components/NewsLetter/NewsLetter';
import { Home3NewsFeedImages, categories, home3Articles, home3FeaturedProducts } from '../../data';
import './Home3.css';

const Home3 = () => {
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
  // // Promotion ends in 3 days from now
  // const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  // const NOW_IN_MS = new Date().getTime();

  // const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  return (
    <section className='section-content'>
      <div className='home3-hero-container'>
        <div className='home3-hero-text-container'>
          <div className='home3-hero-text'>
            <h1>More than just a game. <span>It's a lifestyle.</span></h1>
            <p className='label-2'>Whether you're just starting out, have played your whole life or you're a Tour pro, your swing is like a fingerprint.</p>
          </div>
          <button className='btn-hero btn-medium'>Shopping Now</button>
        </div>
      </div>
      <div className='home3-featured'>
        <div className='home3-link-group'>
          <h4>Featured</h4>
          <Link to='#' className='home3-link btn-small'>More Products<img src={arrowrighticon} alt='arrow-right icon' /></Link>
        </div>
      </div>
      <HomeProducts products={home3FeaturedProducts} />
      <div className='home3-categories-container'>
        <h4>Shop by Categories</h4>
        <HomeCategories categories={categories} />
      </div>
      <div className='home3-sales'>
        <div className='home3-sales-left'><img src={golfAccessories} alt='Golf accessories' /></div>
        <div className='home3-sales-right'>
          <p className='label-1 home3-sales-top-text'>Limited Edition</p>
          <h4 className='home3-sales-title'><span>Hurry up! 30% OFF</span></h4>
          <p className='text-3'>Find clubs that are right for your game</p>
          {startDateMs > nowMs ? <p className='home3-sales-text'>Offer starts in:</p> : <p className='home3-sales-text'>Offer expires in:</p>}
          <CountDownTimer targetDate={targetDate} />
          <Link to='#' className='btn btn-small'>Shop Now </Link>
        </div>
      </div>
      <div className='home3-middle-container'>
        <div className='home3-middle-top-container'>
          <h4>Shop Collection</h4>
          <div className='home3-middle'>
            <div className='home3-middle-left-side'>
              <div className='home3-link-group'>
                <h5>Juniors' Set</h5>
                <Link to='#' className='home3-link btn-small'>Collection <img src={arrowrighticon} alt='arrow-right icon' /></Link>
              </div>
            </div>
            <div className='home3-middle-right-side-top'>
              <div className='home3-link-group'>
                <h5>Men's Set</h5>
                <Link to='#' className='home3-link btn-small'>Collection <img src={arrowrighticon} alt='arrow-right icon' /></Link>
              </div>
            </div>
            <div className='home3-middle-right-side-bottom'>
              <div className='home3-link-group'>
                <h5>Women's Set</h5>
                <Link to='#' className='home3-link btn-small'>Collection <img src={arrowrighticon} alt='arrow-right icon' /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='home3-articles'>
        <div className='home3-link-group'>
          <h4>Articles</h4>
          <Link to='#' className='home3-link btn-small'>More Articles<img src={arrowrighticon} alt='arrow-right icon' /></Link>
        </div>
        <HomeArticles articles={home3Articles} />
      </div>
      <div className='home3-newsletter-container'>
        <NewsLetter />
      </div>
      <div className='home3-newsfeed'><NewsFeed Home2NewsFeedImages={Home3NewsFeedImages} /></div>
    </section>
  );
};

export default Home3;