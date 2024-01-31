import { useState } from 'react';
import arrowPrev from '../../../assets/icons/arrow-left.svg';
import arrowNext from '../../../assets/icons/arrow-right.svg';
import './Slider.css';

type Image = {
  id: string;
  url: string;
};

type Props = {
  images: Image[];
};

const Slider = ({ images }: Props) => {
  const slides = images.map(image => <img key={`${image.id}`} id={`${image.id}`} src={image.url} alt={`hero-img-${image.id}`} className='slider-slide' />);

  const [ currentIndex, setCurrentIndex ] = useState(0);

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex => currentIndex - 1);
    } else {
      setCurrentIndex(slides.length - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < images.length - 1) {
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
            {slides.length >= 0 ? slides.map((_, index) => <div className={currentIndex === index ? 'slider-dot active' : 'slider-dot'} key={index} onClick={() => setCurrentIndex(index)}></div>) : null}
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