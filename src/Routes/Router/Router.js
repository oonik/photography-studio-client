import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home/Home";
import Main from "../../Layout/Main";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Login/Signup";
import DashboardLayout from "../../Layout/DashboardLayout";
import AllUsers from "../../Pages/AllUsers/AllUsers";
import Bookings from "../../Pages/Bookings/Bookings";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ContactUs from "../../Pages/Home/ContactUs/ContactUs";
import AdminRoute from "../AdminRoute/AdminRoute";

export const router = createBrowserRouter([
   {
    path: '/',
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/contactUs',
            element: <ContactUs></ContactUs>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signup',
            element: <Signup></Signup>
        }
        
    ]
   },
   {
    path: '/dashboard',
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [
        {
            path: '/dashboard/bookings',
            element: <Bookings></Bookings>
        },
        {
            path: '/dashboard/allUser',
            element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        }
    ]
   }
]);