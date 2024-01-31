import { Outlet } from 'react-router-dom';
import AccountNavbar from '../../components/Navigation/AccountNavbar/AccountNavbar';
import '../Signup/Signup.css';
import './Account.css';

const Account = () => {
  return (
    <section className='section-content'>
      <div className='account-container'>
        <h3 className='account-title'>Client Account</h3>
        <div className='account-content'>
          <div className='account-content-left'>
            <AccountNavbar />
          </div>
          <div className='account-content-right'>
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Account;