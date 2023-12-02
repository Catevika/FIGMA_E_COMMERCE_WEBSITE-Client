import Navbar from '../../components/Navbar/Navbar';
import NotificationBar from '../../components/NotificationBar/NotificationBar';
import './Home.css';

const Home = () => {
  return (
    <>
      <NotificationBar />
      <Navbar />

      <section className='section-container'>
        <h1>Home</h1>
      </section>
    </>
  );
};

export default Home;