import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainLayout from './MainLayout/MainLayout.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import AuthLayout from './MainLayout/AuthLayout.jsx';
import LoginPage from './Pages/Login.jsx';
import RegisterPage from './Pages/RegisterPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
  },
  {
    path:'/auth',
    element:<AuthLayout></AuthLayout>,
    children:[
      {
        path:'login',
        element:<LoginPage></LoginPage>
      },{
        path:'register',
        element:<RegisterPage></RegisterPage>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />,
  </StrictMode>,
)
