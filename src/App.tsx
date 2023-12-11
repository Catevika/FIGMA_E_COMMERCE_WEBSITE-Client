import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';

function App() {
  const isRegistered = localStorage.getItem('User');
  const currentUser = localStorage.getItem('CurrentUser');
  const navigate = useNavigate();

  useEffect(() => {
    isRegistered && currentUser ? navigate('/home/1') :
      isRegistered && !currentUser ? navigate('/signin') :
        navigate('/signup');
  }, [ currentUser, isRegistered, navigate ]);

  return (
    <Layout />
  );
}

export default App;
