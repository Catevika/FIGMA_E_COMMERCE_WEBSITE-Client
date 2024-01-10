import { useRef, useState } from "react";
import arrowPrev from '../../assets/icons/arrow-left.svg';
import arrowNext from '../../assets/icons/arrow-right.svg';
import { Logo } from '../../types';
import './HomeLogos.css';


type Props = {
  logos: Logo[];
};

const HomeLogos = ({ logos }: Props) => {
  const elementRef = useRef(null);

  const [ arrowDisable, setArrowDisable ] = useState(true);

  const handleHorizantalScroll = (element: HTMLElement, speed: number, distance: number, step: number) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
      if (element.scrollLeft === 0) {
        setArrowDisable(true);
      } else {
        setArrowDisable(false);
      }
    }, speed);
  };

  return (
    <>
      <div className='homeLogos-content' ref={elementRef}>
        {logos.map(logo => <img src={logo.url} key={logo.id} alt="Logo" className='homeLogos-logo' />)}
      </div>
      <div className='slider-icon-container'>
        <button className='slider-icon left' onClick={() => {
          elementRef.current ?
            handleHorizantalScroll(elementRef.current, 25, 100, -10) : null;
        }} disabled={arrowDisable}>
          <img src={arrowPrev} alt='Previous icon' />
        </button>
        <button className='slider-icon right'>
          <img src={arrowNext} alt='Next icon' onClick={() => {
            elementRef.current ?
              handleHorizantalScroll(elementRef.current, 25, 100, 10) : null;
          }} />
        </button>
      </div>
    </>
  );
};

export default HomeLogos;