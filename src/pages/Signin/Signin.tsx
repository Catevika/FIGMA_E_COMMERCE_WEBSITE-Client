import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import eye from '../../assets/icons/eye-icon.svg';
import authImg from '../../assets/images/auth/auth-img.png';
import Logo from '../../components/Logo/Logo';
import RememberCheckbox from '../../components/RememberCheckbox/RememberCheckbox';
import '../Signup/Signup.css';

const Signin = () => {
  const initialState = { login: '', password: '' };
  const [ currentUser, setCurrentUser ] = useState(initialState);

  const [ passwordVisible, setPasswordVisible ] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const [ errorMessage, setErrorMessage ] = useState('');

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorMessage('');
    const name = e.target.name;
    const value = e.target.value;

    setCurrentUser(currentUser => ({ ...currentUser, [ name ]: value }));
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const registeredUser = JSON.parse(localStorage.getItem('User')!);
    const rememberMe = JSON.parse(localStorage.getItem('RememberMe')!);

    if ((currentUser.login === registeredUser.username || currentUser.login === registeredUser.email) && (currentUser.password === registeredUser.password)) {
      rememberMe === true ? localStorage.setItem('CurrentUser', JSON.stringify(currentUser)) : null;
      navigate('/home/1');
    } else {
      setErrorMessage('Please enter valid credentials or reset your password');
    }
  };

  return (
    <section className="container">
      <div className='content'>
        <div className='left-side'>
          <div className='logo-auth'><Logo /></div>
          <img src={authImg} alt="armchair" aria-hidden="true" />
        </div>
        <div className='right-side'>
          <h4>Sign in</h4>
          <form className='form' method='POST' onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor="login">Your username or email address</label>
              <input type="text" id='login' name='login' autoComplete='off' value={currentUser.login} onChange={handleChange} required />
            </div>

            <div className='form-group'>
              <label htmlFor="password" className='password'>Password <img src={eye} alt="eye-icon" className='eye-icon' onClick={togglePasswordVisibility} /></label>
              <input type={passwordVisible ? 'text' : 'password'} id='password' name='password' autoComplete='current-password' value={currentUser.password} onChange={handleChange} required />
            </div>

            <div className='form-group'>
              <RememberCheckbox />
            </div>

            <div className='error-container'>
              <p className='error'>{errorMessage ? errorMessage : null}</p>
            </div>
            <button type='submit' className='btn btn-small'>Sign In</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signin;