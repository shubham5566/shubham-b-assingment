import React from 'react'
import ReactDOM from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'
import {Provider} from 'react-redux'
import Layout from './Layout.jsx';
import AllLands from './componants/Pages/AllLands.jsx';
import CityLands from './componants/Pages/CityLands.jsx';
import Premium from './componants/Pages/Premium.jsx';
import Services from './componants/Pages/Services.jsx';
import Testimonials from './componants/Pages/Testimonials.jsx';
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import myStore from './store/Index.js';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      
      {
        path: "/all-lands",
        element: <AllLands/>,
      },
      {
        path: "/cityLands",
        element: <CityLands/>,
      },
      {
        path: "/premium",
        element: <Premium/>,
      },
      {
        path: "/services",
        element: <Services/>,
      },
      {
        path: "/testimonials",
        element: <Testimonials/>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  {/* <Provider store={myStore}> */}

    <RouterProvider router={router} />
  {/* </Provider> */}
  </React.StrictMode>,
)
