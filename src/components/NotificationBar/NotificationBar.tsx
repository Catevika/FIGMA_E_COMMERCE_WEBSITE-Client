import { Link } from 'react-router-dom';
import arrowrighticon from '../../assets/icons/blue-arrow-right-icon.svg';
import closeicon from '../../assets/icons/close-icon.svg';
import percenticon from '../../assets/icons/ticket-percent-icon.svg';
import './NotificationBar.css';

const NotificationBar = () => {
  return (
    <div className='notificationbar-container'>
      <div className='notificationbar-content'>
        <img src={percenticon} alt="Percent icon" />
        <span className='text-1' >30% off storewide — Limited time!</span>
        <Link to='#' className='btn-xsmall btn-blue'>Shop Now <img src={arrowrighticon} aria-hidden='true' alt="arrow-right icon" /></Link>
      </div>
      <img src={closeicon} alt="Close icon" className='notificationbar-close-icon' />
    </div>
  );
};

export default NotificationBar;