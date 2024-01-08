import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Home3Footer from '../Home3Footer/Home3Footer';
import NotificationBar from '../Navigation/NotificationBar/NotificationBar';
import './Layout.css';

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <NotificationBar />
      <Header />

      <main>
        <Outlet />
      </main>
      {location.pathname.includes('home/3') ? <Home3Footer /> : <Footer />}
    </>
  );
};

export default Layout;