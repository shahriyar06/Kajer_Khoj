import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Page/Home/Home";
import Error from "../Page/Error/Error";
import AllJobs from "../Page/AllJobs/AllJobs";
import Blogs from "../Page/Blogs/Blogs";
import Login from "../Component/Login/Login";
import Register from "../Component/Register/Register";
import PrivateRoute from "../Page/PrivateRoute/PrivateRoute";
import AddJob from "../Page/AddJob/AddJob";
import Myjobs from "../Page/Myjobs/Myjobs";
import JobDetails from "../Page/JobDetails/JobDetails";
import AppliedJob from "../Page/AppliedJob/AppliedJob";
import Profile from "../Page/Profile/Profile";
import UpdateJobs from "../Page/UpdateJobs/UpdateJobs";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/alljobs',
            element: <AllJobs></AllJobs>,
            loader: () => fetch('http://localhost:5000/joblist')
        },
        {
            path: '/blogs',
            element: <Blogs></Blogs>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/addjob',
            element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
        },
        {
            path: '/myjobs',
            element: <PrivateRoute><Myjobs></Myjobs></PrivateRoute>,
            loader: () => fetch('http://localhost:5000/joblist')
        },
        {
            path: '/jobdetails/:id',
            element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
            loader: () => fetch('http://localhost:5000/joblist')
        },
        {
            path: '/appliedjob',
            element: <PrivateRoute><AppliedJob></AppliedJob></PrivateRoute>
        },
        {
            path: '/profile',
            element: <PrivateRoute><Profile></Profile></PrivateRoute>
        },
        {
            path: '/updatejob/:id',
            element: <PrivateRoute><UpdateJobs></UpdateJobs></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/joblist/${params.id}`)
        }
      ],
    },
  ]);

  export default router;