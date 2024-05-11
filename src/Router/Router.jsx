import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Page/Home/Home";
import Error from "../Page/Error/Error";
import AllJobs from "../Page/AllJobs/AllJobs";
import Blogs from "../Page/Blogs/Blogs";



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
            element: <AllJobs></AllJobs>
        },
        {
            path: '/blogs',
            element: <Blogs></Blogs>
        }
      ],
    },
  ]);

  export default router;