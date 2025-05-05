import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../pages/Shared/Secret/Secret";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Dashboard/Cart/Cart";
import AllUsers from "../Dashboard/AllUsers/AllUsers";
import AddItems from "../Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Dashboard/ManageItems/ManageItems";



  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path:'menu',
            element:<Menu></Menu>
        },
          {
            path: 'order/:category',

            element: <Order></Order>
          },
          {
            path:'login',
            element:<Login></Login>
          },
          {
            path: 'signup',
            element: <SignUp></SignUp>
          },
          {
            path: 'secret',
            element: <PrivateRoute><Secret></Secret></PrivateRoute>
          }
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: 'cart',
          element: <Cart></Cart>
        }
        ,
 
         // admin routes
         {
           path: 'users',
           element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
         },
         {
          path: 'manageItems',
          element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
        },
         {
          path: 'addItems',
          element: <AddItems></AddItems>
        },
      ]
    }
  ]);