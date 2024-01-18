import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';

function App() {
  const navigate = useNavigate();


  useEffect(() => {
    navigate('/home/1');
  }, [ navigate ]);

  return (

    <Layout />
  );
}

export default App;
