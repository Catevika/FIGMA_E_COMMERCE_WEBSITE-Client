import { useState } from 'react';
import { Link } from 'react-router-dom';
import './TermsCheckbox.css';

const TermsCheckbox = () => {
  const [ checked, setChecked ] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
    sessionStorage.setItem('Checked', JSON.stringify(checked));
  };

  return (
    <div className='checkbox'>
      <input type='checkbox' id='checkbox' name='checkbox' checked={checked} onChange={handleChange} required />
      <label htmlFor='checkbox' className='text-2'>I agree with <span><Link to='/privacy'>Privacy&nbsp;Policy</Link></span> and <span><Link to='/use'>Terms&nbsp;of&nbsp;Use</Link></span></label>
    </div>
  );
};

export default TermsCheckbox;