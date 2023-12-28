import arrowPrev from '../../assets/icons/arrow-left.svg';
import arrowNext from '../../assets/icons/arrow-right.svg';
import { Logo } from '../../types';
import './HomeLogos.css';


type Props = {
  logos: Logo[];
};

const HomeLogos = ({ logos }: Props) => {
  const homeLogosContent = document.querySelector('.homeLogos-content');

  const handlePrevClick = () => {
    homeLogosContent ? homeLogosContent.scrollLeft -= 167 : null;
  };

  const handleNextClick = () => {
    homeLogosContent ? homeLogosContent.scrollLeft += 167 : null;
  };

  return (
    <>
      <div className='homeLogos-content'>
        {logos.map(logo => <img src={logo.url} key={logo.id} alt="Logo" className='homeLogos-logo' />)}
      </div>
      <div className='slider-icon-container'>
        <div className='slider-icon left' onClick={handlePrevClick}>
          <img src={arrowPrev} alt='Previous icon' />
        </div>
        <div className='slider-icon right'>
          <img src={arrowNext} alt='Next icon' onClick={handleNextClick} />
        </div>
      </div>
    </>
  );
};

export default HomeLogos;