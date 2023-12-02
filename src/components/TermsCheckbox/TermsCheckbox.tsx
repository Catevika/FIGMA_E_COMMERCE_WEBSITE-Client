import { useState } from 'react';
import './TermsCheckbox.css';

const TermsCheckbox = () => {
  const [ checked, setChecked ] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
    sessionStorage.setItem('Checked', JSON.stringify(checked));
  };

  return (
    <div className='checkbox'>
      <input type="checkbox" id='checkbox' name='checkbox' checked={checked} onChange={handleChange} required />
      <label htmlFor='checkbox' className='text-2'>I agree with <span>Privacy&nbsp;Policy</span> and <span>Terms&nbsp;of&nbsp;Use</span></label>
    </div>
  );
};

export default TermsCheckbox;