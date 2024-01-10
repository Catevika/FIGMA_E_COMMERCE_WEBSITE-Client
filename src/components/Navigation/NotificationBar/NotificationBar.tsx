import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import bluearrowrighticon from '../../../assets/icons/arrow-right-icon-blue.svg';
import orangearrowrighticon from '../../../assets/icons/arrow-right-icon-orange.svg';
import whitearrowrighticon from '../../../assets/icons/arrow-right-icon-white.svg';
import arrowrighticon from '../../../assets/icons/arrow-right-icon.svg';
import closeiconwhite from '../../../assets/icons/close-icon-white.svg';
import closeicon from '../../../assets/icons/close-icon.svg';
import percenticonwhite from '../../../assets/icons/ticket-percent-icon-white.svg';
import percenticon from '../../../assets/icons/ticket-percent-icon.svg';
import './NotificationBar.css';

const NotificationBar = () => {
  const location = useLocation();

  const [ isDisplayed, setIsDisplayed ] = useState(true);

  const toggleNotificationbar = () => {
    setIsDisplayed(!isDisplayed);
  };

  let backgroundStyle;
  if (location.pathname.includes('home/1')) backgroundStyle = { 'backgroundColor': 'var(--clr-light-gray)' };
  if (location.pathname.includes('home/2')) backgroundStyle = { 'backgroundColor': 'var(--clr-black-900)' };
  if (location.pathname.includes('home/3')) backgroundStyle = { 'backgroundColor': 'var(--clr-green)' };
  if (location.pathname.includes('home/4')) backgroundStyle = { 'backgroundColor': 'var(--clr-blue)' };

  let linkStyle;
  if (location.pathname.includes('home/1')) linkStyle = { 'color': 'var(--clr-blue)', 'borderBottom': '1px solid var(--clr-blue)' };
  if (location.pathname.includes('home/2')) linkStyle = { 'color': 'var(--clr-orange)', 'borderBottom': '1px solid var(--clr-orange)' };
  if (location.pathname.includes('home/3')) linkStyle = { 'color': 'var(--clr-black-900)', 'borderBottom': '1px solid var(--clr-black-900' };
  if (location.pathname.includes('home/4')) linkStyle = { 'color': 'var(--clr-white)', 'borderBottom': '1px solid var(--clr-white' };

  let colorStyle;
  if (location.pathname.includes('home/2') || location.pathname.includes('home/4')) {
    colorStyle = { 'color': 'var(--clr-white)' };
  } else {
    colorStyle = { 'color': 'var(--clr-dark-gray)' };
  }

  return (
    <>
      {isDisplayed ? <div className='notificationbar-container' style={backgroundStyle}>
        <div className='notificationbar-content'>
          <img src={(location.pathname.includes('home/2') || location.pathname.includes('home/4')) ? percenticonwhite : percenticon} alt='Percent icon' />
          <span className='text-1' style={colorStyle}>30% off storewide — Limited time!</span>
          {location.pathname.includes('home/1') ? <Link to='/shop' className='btn-xsmall' style={linkStyle}>Shop Now <img src={bluearrowrighticon} alt='arrow-right icon' /></Link> :
            location.pathname.includes('home/2') ? <Link to='/shop' className='btn-xsmall' style={linkStyle}>Shop Now <img src={orangearrowrighticon} alt='arrow-right icon' /></Link> :
              location.pathname.includes('home/4') ? <Link to='/shop' className='btn-xsmall' style={linkStyle}>Shop Now <img src={whitearrowrighticon} alt='arrow-right icon' /></Link> :
                <Link to='/shop' className='btn-xsmall' style={linkStyle}>Shop Now <img src={arrowrighticon} alt='arrow-right icon' /></Link>
          }
        </div>
        <img src={(location.pathname.includes('home/2') || location.pathname.includes('home/4')) ? closeiconwhite : closeicon} alt='Close icon' onClick={toggleNotificationbar} className='notificationbar-close-icon' />
      </div> : null}
    </>
  );
};

export default NotificationBar;