import { createBrowserRouter } from "react-router-dom";
import Main from "../../Pages/Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Navbar from "../../Shared/Navbar/Navbar";

export const router = createBrowserRouter([
   {
    path: '/',
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        }
        
    ]
   }
]);