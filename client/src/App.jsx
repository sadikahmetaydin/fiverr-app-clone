import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
// Style Connection
import './App.css';
// Component Connections
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
// Page Connections
import Home from './Pages/Home/Home';
import Gigs from './Pages/Gigs/Gigs';
import Gig from './Pages/Gig/Gig';
import Add from './Pages/Add/Add';
import Orders from './Pages/Orders/Orders';
import Messages from './Pages/Messages/Messages';
import Message from './Pages/Message/Message';
import MyGigs from './Pages/MyGigs/MyGigs';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/gigs',
          element: <Gigs />,
        },
        {
          path: '/mygigs',
          element: <MyGigs />,
        },
        {
          path: '/orders',
          element: <Orders />,
        },
        {
          path: '/messages',
          element: <Messages />,
        },
        {
          path: '/message/:id',
          element: <Message />,
        },
        {
          path: '/add',
          element: <Add />,
        },
        {
          path: '/gig/:id',
          element: <Gig />,
        },
        {
          path: '/register',
          element: <Register />,
        },
        {
          path: '/login',
          element: <Login />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
