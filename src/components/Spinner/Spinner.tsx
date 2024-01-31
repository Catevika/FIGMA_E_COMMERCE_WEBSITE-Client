import spinnerIcon from '../../assets/icons/spinner-icon.svg';
import './Spinner.css';

const Spinner = () => {
  return (
    <div className='spinner-content'>
      <img src={spinnerIcon} alt="Spinner Icon" />
    </div>
  );
};

export default Spinner;