import { useState } from 'react';
import '../TermsCheckbox/TermsCheckbox.css';

const RememberCheckbox = () => {
  const [ checked, setChecked ] = useState(false);
  localStorage.setItem('RememberMe', JSON.stringify(checked));

  const handleChange = () => {
    setChecked(!checked);
    localStorage.setItem('RememberMe', JSON.stringify(checked));
  };

  return (
    <div className='checkbox-container'>
      <div className='checkbox'>
        <input type="checkbox" id='checkbox' name='checkbox' checked={checked} onChange={handleChange} />
        <label htmlFor='checkbox' className='text-2 remember-me'>Remember me</label>
      </div>
      <p className='text-2 checkbox-text'>Forgot password?</p>
    </div>
  );
};

export default RememberCheckbox;