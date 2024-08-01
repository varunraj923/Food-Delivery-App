import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Contact from './Contact.jsx';
import Error from './Error.jsx';
import {createBrowserRouter,RouterProvider } from "react-router-dom";
import About from "./About";
import RestroCards from './RestroCards.jsx';
import Mainbox from './Mainbox.jsx';
import RestaurantMenu from './RestaurantMenu.jsx';
import Instamart from './Instamart.jsx';
import { Suspense } from 'react';
import "./index.css"
import Cart from "./Cart.jsx"




const approuter = createBrowserRouter([
  {
  path:"/",
  element:<App/>,

  children:[
    {
path:"/",
element:<Mainbox/>
    },
    {
      path:"/about",
      element:<About/>,
    },
  {
    path: "/contact",
    element: <Contact/>
  },
  {
    path: "/restaurants/:resId",
    element: <RestaurantMenu/>
    
  }
  ,
  {
    path: "/instamart",
    element: <Suspense fallback={<h1>Wait for some time </h1>}> <Instamart/> </Suspense>
  },
  {
    path: "/Cart",
    element: <Cart/>
  },
    
  ],
  errorElement:<Error/>
  },
  
  ])

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <RouterProvider router={approuter} />
 
)

