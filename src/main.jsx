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
import Error from './Componenets/Error/Error.jsx';
import Detailspage from './Componenets/Details/Details.jsx';
import Privetroot from './Componenets/Privet/Privetroot.jsx';
import Updatecard from './Componenets/Updatecard/Updatecard.jsx';
import CountryBangladesh from './Componenets/CountryBangladesh/CountryBangladesh.jsx';
import Catagoryextra from './Componenets/Catagory/Catagoryextra.jsx';
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
    element:<Privetroot><AlltouristSport></AlltouristSport></Privetroot>,
    loader: () => fetch('http://localhost:5000/torisum')},
   
   { path:"/AddTouristsSpot",
    element:<Privetroot><AddToursitSport></AddToursitSport></Privetroot>,
    },
   { path:"/MyList",
    element:<Privetroot><Mylist></Mylist></Privetroot>,
    },
   { path:"/register",
    element:<Register></Register>,},
   { path:"/Login",
    element:<Login></Login>,},
   { path:"/CountryBangladesh",
    element:<CountryBangladesh></CountryBangladesh>,
    },
   { path:"/Update",
    element:<Privetroot><UpdateProfile></UpdateProfile></Privetroot>,
  },
   { path:"/Catagoryextra/:countryName",
    element:<Catagoryextra></Catagoryextra>,
    loader: () => fetch('http://localhost:5000/torisum'),
  },
   { path:"/updatecard/:id",
    element:<Privetroot><Updatecard></Updatecard></Privetroot>,
    loader: ({params}) => fetch(`http://localhost:5000/torisum/place/${params.id}`)},
    { path:"/torisum/:id",
    element:<Privetroot><Detailspage></Detailspage></Privetroot>,
    loader: () => fetch('http://localhost:5000/torisum')},
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
