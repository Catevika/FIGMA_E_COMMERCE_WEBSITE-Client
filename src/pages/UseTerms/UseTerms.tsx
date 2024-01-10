import { Link } from 'react-router-dom';
import './UseTerms.css';

const UseTerms = () => {
  return (
    <section className='section-container'>
      <div className='use-container'>
        <h2>Terms of Use</h2>
        <p className='use-text'>Insert your Terms of Use HERE</p>
        <Link to='/signup' className='use-link btn-large'>Go back to Sign up page</Link>
      </div>
    </section>
  );
};

export default UseTerms;