import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import userAvatar from '../../../assets/images/account/User-avatar.png';
import { logOut, selectCurrentUser } from '../../../features/auth/authSlice';
import { useGetUserDetailsQuery, useLogoutMutation } from '../../../features/user/userApiSlice';
import Spinner from '../../Spinner/Spinner';
import './AccountNavbar.css';

const AccountNavbar = () => {
  const username = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data: currentUser, isLoading } = useGetUserDetailsQuery(username);

  const [ logoutApiCall ] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      await logoutApiCall(username).unwrap();
      dispatch(logOut());
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='account-nav-container'>
      {isLoading ? <Spinner /> : <div className='account-nav-top text-1'>
        <img src={userAvatar} alt='User avatar' />
        <p className='account-nav-user-name'>{currentUser?.name}</p>
      </div>
      }
      <nav className='account-nav'>
        <ul>
          <li className='text-2'><NavLink to={`/users/${currentUser?.username}`} className={({ isActive }) => isActive ? 'account-nav-link active' : 'account-nav-link'}>Account</NavLink></li>
          <li className='text-2'><NavLink to={`/users/${currentUser?.username}/address`} className={({ isActive }) => isActive ? 'account-nav-link active' : 'account-nav-link'}>Address</NavLink></li>
          <li className='text-2'><NavLink to={`/users/${currentUser?.username}/orders`} className={({ isActive }) => isActive ? 'account-nav-link active' : 'account-nav-link'}>Orders</NavLink></li>
          <li className='text-2'><NavLink to={`/users/${currentUser?.username}/wishlist`} className={({ isActive }) => isActive ? 'account-nav-link active' : 'account-nav-link'}>Wishlist</NavLink></li>
          <li className='text-2'><NavLink to='/' className={({ isActive }) => isActive ? 'account-nav-link active' : 'account-nav-link'} onClick={handleLogout}>Log Out</NavLink></li>
        </ul>
      </nav>
    </div>
  );
};

export default AccountNavbar;