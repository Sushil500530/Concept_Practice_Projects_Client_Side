import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Resister from "../pages/Resister";
import AdminLayout from "../components/layout/AdminLayout";
import AddService from "../pages/AddService";

const Router = createBrowserRouter([
   {
    path:'/',
    element:<App></App>,
    children: [
        {
            index:true,
            element:<Home></Home>
        },
        {
            path:'about',
            element:<About></About>
        },
        {
            path:'contact',
            element:<Contact></Contact>
        }
    ]
   },
   {
    path:'/login',
    element:<Login></Login>
   },
   {
    path:'/resister',
    element:<Resister></Resister>
   },
   {
    path:'/admin',
    element:<AdminLayout></AdminLayout>,
    children: [
        {
            index:true,
            element:<AddService />
        }
    ]
   }
])

export default Router;