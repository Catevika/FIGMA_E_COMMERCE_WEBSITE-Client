import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import eye from '../../assets/icons/eye-icon.svg';
import spinnerIcon from '../../assets/icons/spinner-icon.svg';
import authImg from '../../assets/images/auth/auth-img.png';
import Logo from '../../components/Logo/Logo';
import RememberCheckbox from '../../components/RememberCheckbox/RememberCheckbox';
import { setCredentials } from '../../features/auth/authSlice';
import { useSigninMutation } from '../../features/auth/userApiSlice';
import '../Signup/Signup.css';

const Signin = () => {
  const navigate = useNavigate();

  const [ signin, { isLoading } ] = useSigninMutation();
  const dispatch = useDispatch();

  const initialState = { username: '', password: '' };
  const [ currentUser, setCurrentUser ] = useState(initialState);

  const [ passwordVisible, setPasswordVisible ] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const [ errorMessage, setErrorMessage ] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorMessage('');
    const name = e.target.name;
    const value = e.target.value;

    setCurrentUser(currentUser => ({ ...currentUser, [ name ]: value }));
  };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userData = await signin(currentUser).unwrap();
      const { username } = currentUser;
      dispatch(setCredentials({ ...userData, username }));
      setCurrentUser(initialState);
      navigate('/account');
    } catch (error) {
      console.log(error);
      setErrorMessage('Login Failed');
    }
  };

  return (
    <section className='container'>
      {isLoading ? <div className='spinner-container'>
        <img src={spinnerIcon} alt='Spinner icon' />
      </div> : <div className='content'>
        <div className='left-side'>
          <div className='logo-auth'><Logo /></div>
          <img src={authImg} alt='armchair' aria-hidden='true' />
        </div>
        <div className='right-side'>
          <h4>Sign in</h4>
          <form className='form' method='POST' onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='username'>Your username</label>
              <input type='text' id='username' name='username' autoComplete='username' value={currentUser.username} onChange={handleChange} required />
            </div>

            <div className='form-group'>
              <label htmlFor='password' className='password'>Password <img src={eye} alt='eye-icon' className='eye-icon' onClick={togglePasswordVisibility} /></label>
              <input type={passwordVisible ? 'text' : 'password'} id='password' name='password' autoComplete='current-password' value={currentUser.password} onChange={handleChange} required />
            </div>

            <div className='form-group'>
              <RememberCheckbox />
            </div>

            <div className='error-container'>
              <div className='error'>{errorMessage ? errorMessage : null}</div>
            </div>
            <button type='submit' className='btn btn-small'>Sign In</button>
          </form>
        </div>
      </div>}
    </section>
  );
};

export default Signin;