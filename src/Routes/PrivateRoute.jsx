import { useContext } from "react";
 import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../providers/AuthProvider";
import useAuth from "../hooks/useAuth";
 
 
 const PrivateRoute = ({ children }) => {
     const { user, loading } = useAuth();
     const location = useLocation();
 
     if(loading){
         return <progress className="progress w-56"></progress>
     }
 
     if (user) {
         return children;
     }
     return <Navigate to="/login" state={{from: location}} replace></Navigate>
 };
 
 export default PrivateRoute;