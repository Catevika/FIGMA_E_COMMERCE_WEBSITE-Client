import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import './App.css';
import Signup from './pages/Signup/Signup';

function App() {
  const isRegistered = localStorage.getItem('User');
  const currentUser = localStorage.getItem('CurrentUser');
  const navigate = useNavigate();

  useEffect(() => {
    isRegistered && currentUser ? navigate('/home') :
      isRegistered && !currentUser ? navigate('/signin') :
        navigate('/signup');
  }, [ currentUser, isRegistered, navigate ]);

  return (
    <main>
      {isRegistered ? <Outlet /> : <Signup />}
    </main>
  );
}

export default App;
