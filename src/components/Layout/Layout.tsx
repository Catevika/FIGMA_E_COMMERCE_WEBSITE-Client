import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Home3Footer from '../Home3Footer/Home3Footer';
import Home4Footer from '../Home4Footer/Home4Footer';
import NotificationBar from '../Navigation/NotificationBar/NotificationBar';
import './Layout.css';

const Layout = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname.includes('account') ? null : <NotificationBar />}
      <Header />

      <main>
        <Outlet />
      </main>
      {location.pathname.includes('home/3') ? <Home3Footer /> : location.pathname.includes('home/4') ? <Home4Footer /> : <Footer />}
    </>
  );
};

export default Layout;