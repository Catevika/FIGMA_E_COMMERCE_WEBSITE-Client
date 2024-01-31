import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import eye from '../../assets/icons/eye-icon.svg';
import { selectCurrentUser } from '../../features/auth/authSlice';
import { useGetUserDetailsQuery, useUpdateUserMutation } from '../../features/user/userApiSlice';
import { User } from '../../types';
import Spinner from '../Spinner/Spinner';
import './AccountForm.css';

const AccountForm = () => {
  const username = useSelector(selectCurrentUser);

  const navigate = useNavigate();
  const { data: currentUser, isLoading, isSuccess, error } = useGetUserDetailsQuery(username);
  const [ updateUser ] = useUpdateUserMutation();

  const [ userToUpdate, setUserToUpdate ] = useState<User>({ name: '', username: '', email: '', password: '' });

  const [ data, setData ] = useState({ oldPassword: '', newPassword: '', confirmPassword: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorMessage('');
    const { name, value } = e.target;
    setData(data => ({ ...data, [ name ]: value }));
  };

  useEffect(() => {
    const getUserToUpdate = () => {
      if (isLoading) {
        return <Spinner />;
      } else if (isSuccess) {
        setUserToUpdate(currentUser);
      } else {
        return <div>{JSON.stringify(error)}</div>;
      }
    };

    getUserToUpdate();
  }, [ isLoading, isSuccess, error, currentUser ]);

  const [ passwordVisible, setPasswordVisible ] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const [ errorMessage, setErrorMessage ] = useState('');

  const reset = () => {
    setData({ oldPassword: '', newPassword: '', confirmPassword: '' });
  };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const updatedUser = await updateUser({ username, ...data }).unwrap();
      console.log(updatedUser);
      reset();
      navigate('/signin');
    } catch (error) {
      console.log(error);
      setErrorMessage('Password Reset Failed');
    }
  };

  return (
    <div className='account-form-container'>
      {isLoading ? <Spinner /> : <form className='form' method='POST' onSubmit={handleSubmit}>
        <fieldset className="account-form-details text-3">
          <legend className='account-form-sub-title text-3'>Account Details</legend>
          <div className='form-group'>
            <label htmlFor='name' className='label-0'>Full name</label>
            <input type='text' id='name' name='name' autoComplete='name' value={userToUpdate.name} disabled />
          </div>

          <div className='form-group'>
            <label htmlFor='username' className='label-0'>Username</label>
            <input type='text' id='username' name='username' autoComplete='username' value={userToUpdate.username} disabled />
          </div>

          <div className='form-group'>
            <label htmlFor='email' className='label-0'>Email</label>
            <input type='email' id='email' name='email' autoComplete='email' value={userToUpdate.email} disabled />
          </div>
        </fieldset>

        <fieldset className="account-form-details text-3">
          <legend className='account-form-sub-title text-3'>Password Reset</legend>

          <div className='form-group'>
            <label htmlFor='oldPassword' className='label-0'>Old Password <img src={eye} alt='eye-icon' className='eye-icon' onClick={togglePasswordVisibility} /></label>
            <input type={passwordVisible ? 'text' : 'password'} id='oldPassword' name='oldPassword' placeholder='Old password' autoComplete='off' value={data.oldPassword} onChange={handleChange} required />
          </div>
          <div className='form-group'>
            <label htmlFor='newPassword' className='label-0'>New Password <img src={eye} alt='eye-icon' className='eye-icon' onClick={togglePasswordVisibility} /></label>
            <input type={passwordVisible ? 'text' : 'password'} id='newPassword' name='newPassword' placeholder='New password' autoComplete='off' value={data.newPassword} onChange={handleChange} required />
          </div>
          <div className='form-group'>
            <label htmlFor='confirmPassword' className='label-0'>Confirm Password <img src={eye} alt='eye-icon' className='eye-icon' onClick={togglePasswordVisibility} /></label>
            <input type={passwordVisible ? 'text' : 'password'} id='confirmPassword' name='confirmPassword' placeholder='Confirm password' autoComplete='off' value={data.confirmPassword} onChange={handleChange} required />
          </div>
        </fieldset>

        <div className='error-container'>
          <div className='error'>{errorMessage ? errorMessage : undefined}</div>
        </div>

        <div className='account-form-btn-container'>
          <button type='submit' className='btn btn-small'>Save changes</button>
          <button type='reset' className='btn btn-small' onClick={reset}>Cancel</button>
        </div>
      </form>}
    </div>
  );
};

export default AccountForm;