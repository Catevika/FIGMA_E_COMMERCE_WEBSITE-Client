import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import eye from '../../assets/icons/eye-icon.svg';
import spinnerIcon from '../../assets/icons/spinner-icon.svg';
import authImg from '../../assets/images/auth/auth-img.png';
import Logo from '../../components/Logo/Logo';
import TermsCheckbox from '../../components/TermsCheckbox/TermsCheckbox';
import { useSignupMutation } from '../../features/auth/userApiSlice';
import './Signup.css';

const Signup = () => {
  const initialState = { name: '', username: '', email: '', password: '' };
  const [ user, setUser ] = useState(initialState);

  const [ passwordVisible, setPasswordVisible ] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser((user) => ({ ...user, [ name ]: value }));
  };

  const navigate = useNavigate();

  const [ register, { isLoading } ] = useSignupMutation();
  const [ errorMessage, setErrorMessage ] = useState('');

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await register(user).unwrap();
      console.log(res);
      setUser(initialState);
      navigate('/home/1');
    } catch (error) {
      console.log(error);
      setErrorMessage('Registration Failed');
    }
  };

  return (
    <section className='container'>
      {isLoading ? <div className='spinner-container'>
        < img src={spinnerIcon} alt='Spinner icon' />
      </div> : <div className='content'>
        <div className='left-side'>
          <div className='logo-auth'><Logo /></div>
          <img src={authImg} alt='armchair' aria-hidden='true' />
        </div>
        <div className='right-side'>
          <h4>Sign up</h4>
          <form className='form' method='POST' onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='name'>Your name</label>
              <input type='text' id='name' name='name' autoComplete='name' value={user.name} onChange={handleChange} required />
            </div>

            <div className='form-group'>
              <label htmlFor='username'>Username</label>
              <input type='text' id='username' name='username' autoComplete='username' value={user.username} onChange={handleChange} required />
            </div>

            <div className='form-group'>
              <label htmlFor='email'>Email address</label>
              <input type='email' id='email' name='email' autoComplete='email' value={user.email} onChange={handleChange} required />
            </div>

            <div className='form-group'>
              <label htmlFor='password' className='password'>Password <img src={eye} alt='eye-icon' className='eye-icon' onClick={togglePasswordVisibility} /></label>
              <input type={passwordVisible ? 'text' : 'password'} id='password' name='password' autoComplete='current-password' value={user.password} onChange={handleChange} required />
            </div>

            <TermsCheckbox />
            <div className='error-container'>
              <div className='error'>{errorMessage ? errorMessage : null}</div>
            </div>
            <button type='submit' className='btn btn-small'>Sign Up</button>
          </form>
        </div>
      </div>}
    </section>
  );
};

export default Signup;