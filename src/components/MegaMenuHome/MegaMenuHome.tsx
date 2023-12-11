import { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
import arrowrighticon from '../../assets/icons/arrow-right.svg';
import Home1Hero from '../../assets/images/home-1/Home-1-Hero.png';
import Home1Sales from '../../assets/images/home-1/Home-1-Sales.png';
import { homeLinks } from '../../data';
import './MegaMenuHome.css';

// TODO Add Collections link

type Props = {
  handleMouseLeave: MouseEventHandler<HTMLDivElement>;
};

const MegaMenuHome = ({ handleMouseLeave }: Props) => {
  return (
    <div className='megaMenuHome-container' onMouseLeave={handleMouseLeave}>
      <div className="megaMenuHome-content">
        <div className='megaMenuHome-columns'>
          <div className='megaMenuHome-column'>
            {homeLinks.map((homeLink) => <Link to={`/home/${homeLink.id}`} key={homeLink.id} className='megaMenuHome-item text-1'>{homeLink.link}</Link>)}
          </div>
          <div className='megaMenuHome-column'>
            {homeLinks.map((homeLink) => <Link to={`/home/${homeLink.id}`} key={homeLink.id} className='megaMenuHome-item text-1'>{homeLink.link}</Link>)}
          </div>
        </div>
        <div className='megaMenuHome-cards'>
          <div className='megaMenuHome-card'>
            <img src={Home1Hero} alt="Living Room New Arrivals" className='megaMenuHome-card-img' />
            <p className='text-2-link'>New arrivals</p>
            <Link to='#' className='megaMenuHome-link btn-xsmall'>Collections <img src={arrowrighticon} alt="arrow-right icon" /></Link>
          </div>
          <div className='megaMenuHome-card'>
            <img src={Home1Sales} alt="Living Room Sales" className='megaMenuHome-card-img' />
            <p className='text-2-link'>Summer sales</p>
            <Link to='#' className='megaMenuHome-link btn-xsmall'>Collections <img src={arrowrighticon} alt="arrow-right icon" /></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenuHome;