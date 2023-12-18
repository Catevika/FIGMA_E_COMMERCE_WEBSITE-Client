import { useState } from 'react';
import arrowPrev from '../../../assets/icons/arrow-left.svg';
import arrowNext from '../../../assets/icons/arrow-right.svg';
import { heroImages } from '../../../data';
import './Slider.css';

const Slider = () => {
  const slides = heroImages.map(image => <img key={`${image.id}`} id={`${image.id}`} src={image.url} alt={`hero-img-${image.id}`} className='slider-slide' />);

  const [ currentIndex, setCurrentIndex ] = useState(0);

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex => currentIndex - 1);
    } else {
      setCurrentIndex(slides.length - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < heroImages.length - 1) {
      setCurrentIndex(currentIndex => currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  return (
    <>
      <div className='slider'>
        <div className='slider-slides'>
          <div className='slider-icon left' onClick={handlePrevClick}>
            <img src={arrowPrev} alt='Previous icon' />
          </div>

          {slides[ currentIndex ]}

          <div className='slider-dots'>
            <div className={currentIndex === 0 ? 'slider-dot active' : 'slider-dot'} onClick={() => setCurrentIndex(0)}></div>
            <div className={currentIndex === 1 ? 'slider-dot active' : 'slider-dot'} onClick={() => setCurrentIndex(1)}></div>
            <div className={currentIndex === 2 ? 'slider-dot active' : 'slider-dot'} onClick={() => setCurrentIndex(2)}></div>
          </div>

          <div className='slider-icon right'>
            <img src={arrowNext} alt='Next icon' onClick={handleNextClick} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;