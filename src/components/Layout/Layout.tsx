import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import NotificationBar from '../NotificationBar/NotificationBar';
import './Layout.css';

const Layout = () => {

  return (
    <>
      <NotificationBar />
      <Header />

      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;