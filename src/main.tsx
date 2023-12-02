import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.tsx';
import './index.css';
import ErrorPage from './pages/ErrorPage/ErrorPage.tsx';
import Home from './pages/Home/Home.tsx';
import Signin from './pages/Signin/Signin.tsx';
import Signup from './pages/Signup/Signup.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/signup",
        element: <Signup />,
        errorElement: <ErrorPage />
      }, {
        path: "/signin",
        element: <Signin />,
        errorElement: <ErrorPage />
      },
      {
        path: "/home",
        element: <Home />,
        errorElement: <ErrorPage />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
