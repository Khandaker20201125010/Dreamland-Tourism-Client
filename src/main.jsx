import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Mainpages from './Componenets/Pages/Mainpages.jsx';
import AlltouristSport from './Componenets/AllTouristSport/AlltouristSport.jsx';
import AddToursitSport from './Componenets/AddToursitSport/AddToursitSport.jsx';
import Mylist from './Componenets/Mylist/Mylist.jsx';
import Home from './Componenets/Home.jsx';
import Register from './Componenets/Register/Register.jsx';
import Authprovider from './Componenets/Providers/Authprovider.jsx';
import Login from './Componenets/Login/Login.jsx';
import UpdateProfile from './Componenets/Update/UpdateProfile.jsx';
import { HelmetProvider } from 'react-helmet-async';
import Error from './Componenets/Error/Error.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainpages></Mainpages>,
    errorElement:<Error></Error>,
    children:[{
      path:'/',
      element:<Home></Home>,
   
    },
   { path:"/AllTouristsSpot",
    element:<AlltouristSport></AlltouristSport>},
   { path:"/AddTouristsSpot",
    element:<AddToursitSport></AddToursitSport>,
    },
   { path:"/MyList",
    element:<Mylist></Mylist>,
    },
   { path:"/register",
    element:<Register></Register>,},
   { path:"/Login",
    element:<Login></Login>,},
   { path:"/Update",
    element:<UpdateProfile></UpdateProfile>,},
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Authprovider> 
   <RouterProvider router={router} />
  </Authprovider>
 </React.StrictMode>,
)
