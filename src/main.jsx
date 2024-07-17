import React from 'react'
import App from './App.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

import '../src/SCSS/style.scss'

import Error from '../src/Pages/Error.jsx'

import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import LogIn from './Pages/LogIn.jsx'
import Mens from './Pages/Mens/Mens.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/*",
    element: <Error />,
  },
  {
    path: "/LogIn",
    element: <LogIn />,
  },
  {
    path: "/Mens",
    element: <Mens />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
