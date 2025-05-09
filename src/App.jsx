

// import React from 'react';
// import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider ,Outlet} from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Body from './component/Body';
import About from './component/About';
import Error from './component/Error';
import Contact from './component/Contact';
import RestaurantMenu from './component/RestaurantMenu';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './component/Cart';

import Login from "./component/Login"; 
import Signup from "./component/Signup";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './component/Footer';



const AppLayout = () => {
  return (
     <Provider store={appStore}>
    <div className="app">
      <Header />
      <Outlet />  
      <Footer />
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
    </Provider>
  );
};


const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    
    children:[
      {
       path:'/',
       element:<Body />
      },
      {
        path:'/about',
        element:<About />, 
      },
      {
        path:'/contact',
        element:<Contact />
      },
      {
        path:'/restaurants/:resId',
        element:<RestaurantMenu />
      },
      {
        path:'/cart',
        element:<Cart />
      },
      
      { path: "/login", element: <Login /> },  // Add Login route
      { path: "/signup", element: <Signup /> }, // Add Signup route
      
        
    ],
    errorElement:<Error />,
  },
  {
    path:'/about',
    element:<About/>
  },
  {
    path:'/contact',
    element:<Contact />
  },
  {
    path:'/cart',
    element:<Cart />
  },{
    path:'/Footer',
    element:<Footer />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

