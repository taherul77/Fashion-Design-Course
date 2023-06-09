import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import AllClasses from "../pages/AllClasses/AllClasses";
import AllInstructors from "../pages/AllInstructors/AllInstructors";
import Dashboard from "../dashboard/Dashboard/Dashboard";
import MySelected from "../dashboard/MySelected/MySelected";
import StudentHome from "../dashboard/StudentHome/StudentHome";
import StudentPayment from "../dashboard/StudentPayment/StudentPayment";
import StudentEnrolled from "../dashboard/StudentEnrolled/StudentEnrolled";
import ManageUser from "../dashboard/Admin/ManageUser/ManageUser";




export const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path:"/login",
          element:<Login></Login>,
        },
        {
          path:"/register",
          element:<Register></Register>
        },
        {
          path:"/classes",
          element:<AllClasses></AllClasses>

        },
        {
          path:"/instructors",
          element:<AllInstructors></AllInstructors>

        }
       
      ]
    },
    {
      path: "/dashboard",
      element: <Dashboard></Dashboard>,
      children:[
        {
          path:'my-selected',
          element:<MySelected></MySelected>
        },
        {
          path:'student-home',
          element:<StudentHome></StudentHome>
        },
        {
          path:'student-payment',
          element:<StudentPayment></StudentPayment>
        },
     
        {
          path:'student-enrolled',
          element:<StudentEnrolled></StudentEnrolled>
        },
        {
          path:'manage-user',
          element:<ManageUser></ManageUser>
        }
      ]
    }

  ]);

