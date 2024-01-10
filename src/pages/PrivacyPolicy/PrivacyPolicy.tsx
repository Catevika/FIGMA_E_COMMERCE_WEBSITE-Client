import { Link } from 'react-router-dom';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <section className='section-container'>
      <div className='privacy-container'>
        <h2>Privacy Policy</h2>
        <p className='privacy-text'>Insert your Privacy Policy HERE</p>
        <Link to='/signup' className='privacy-link btn-large'>Go back to Sign up page</Link>
      </div>
    </section>
  );
};

export default PrivacyPolicy;