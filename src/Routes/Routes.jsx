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
import UpdateItem from "../Dashboard/UpdateItem/UpdateItem";
import Payment from "../Dashboard/Payment/Payment";
import PaymentHistory from "../Dashboard/PaymentHistory/PaymentHistory";
import UserHome from "../Dashboard/UserHome/UserHome";
import AdminHome from "../Dashboard/AdminHome/AdminHome";



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
          },
         
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: 'userHome',
          element: <UserHome></UserHome>

        },
        {
          path: 'cart',
          element: <Cart></Cart>
        }
        ,
        {
          path: 'payment',
          element: <Payment></Payment>
        },
        {
          path: 'paymentHistory',
          element: <PaymentHistory></PaymentHistory>
        },
 
         // admin routes
          {
            path: 'adminHome',
            element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
          },
         {
           path: 'users',
           element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
         },
         {
          path: 'manageItems',
          element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
        },
        {
          path: 'updateItem/:id',
          element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
        },
         {
          path: 'addItems',
          element: <AddItems></AddItems>
        },
      ]
    }
  ]);