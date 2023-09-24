import React from 'react'
import ReactDOM from 'react-dom/client'
import Auth from './pages/Auth/Auth.tsx';
import Home from './pages/Home/Home.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.scss'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
