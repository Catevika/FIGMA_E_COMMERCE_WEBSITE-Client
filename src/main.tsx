import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import App from './App.tsx';
import Layout from './components/Layout/Layout.tsx';
import './index.css';
import ErrorPage from './pages/ErrorPage/ErrorPage.tsx';
import { Home1 } from './pages/Home1/Home1.tsx';
import Home2 from './pages/Home2/Home2.tsx';
import Home3 from './pages/Home3/Home3.tsx';
import Home4 from './pages/Home4/Home.tsx';
import Signin from './pages/Signin/Signin.tsx';
import Signup from './pages/Signup/Signup.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: '/signup',
    element: <Signup />,
    errorElement: <ErrorPage />
  }, {
    path: '/signin',
    element: <Signin />,
    errorElement: <ErrorPage />
  },
  {
    path: '/home',
    element: <Layout />,
    children: [
      {
        path: '/home/1',
        element: <Home1 />,
      },
      {
        path: '/home/2',
        element: <Home2 />,
      },
      {
        path: '/home/3',
        element: <Home3 />,
      },
      {
        path: '/home/4',
        element: <Home4 />,
      }
    ]
  }/* ,
  {
    path: '/shop',
    element: <Shop />,
    children: [
      {
        path: '/shop/1',
        element: <Shop1 />
      }
    ]
  },
  {
    path: '/product',
    element: <Product />,
    children: [
      {
        path: '/product/1',
        element: <Product1 />
      }
    ]
  },
  {
    path: '/contact',
    element: <Contact />,
    errorElement: <ErrorPage />
  } */
]
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
