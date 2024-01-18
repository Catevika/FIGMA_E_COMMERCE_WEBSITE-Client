import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import App from './App.tsx';
import { store } from './app/store';
import Layout from './components/Layout/Layout.tsx';
import RequireAuth from './features/auth/requireAuth.tsx';
import './index.css';
import Articles from './pages/Articles/Articles.tsx';
import Contact from './pages/Contact/Contact.tsx';
import ErrorPage from './pages/ErrorPage/ErrorPage.tsx';
import Home1 from './pages/Home1/Home1.tsx';
import Home2 from './pages/Home2/Home2.tsx';
import Home3 from './pages/Home3/Home3.tsx';
import Home4 from './pages/Home4/Home4.tsx';
import MyAccount from './pages/MyAccount/MyAccount.tsx';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy.tsx';
import Shop1 from './pages/Shop1/Shop1.tsx';
import Signin from './pages/Signin/Signin.tsx';
import Signup from './pages/Signup/Signup.tsx';
import UseTerms from './pages/UseTerms/UseTerms.tsx';

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
  },
  {
    path: '/privacy',
    element: <PrivacyPolicy />,
    errorElement: <ErrorPage />
  },
  {
    path: '/use',
    element: <UseTerms />,
    errorElement: <ErrorPage />
  },
  {
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
  },
  {
    path: '/shop',
    element: <Layout />,
    children: [
      {
        path: '/shop/1',
        element: <Shop1 />
      }
    ]
  },/*
  {
    path: '/product',
    element: <Product />,
    children: [
      {
        path: '/product/1',
        element: <Product1 />
      }
    ]
  }, */
  {
    path: '/articles',
    element: <Articles />,
    errorElement: <ErrorPage />
  },
  {
    element: <RequireAuth />,
    children: [ {
      path: '/account',
      element: <MyAccount />
    } ]
  },
  {
    path: '/contact',
    element: <Contact />,
    errorElement: <ErrorPage />
  }
]
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
