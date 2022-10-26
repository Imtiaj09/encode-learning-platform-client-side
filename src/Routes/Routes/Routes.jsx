import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Course from "../../Pages/Course/Course";
import Home from "../../Pages/Home/Home";
import RightSideCourseCategory from "../../Pages/RightSideCourseCategory/RightSideCourseCategory";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/courseCategory/:id",
        element: <RightSideCourseCategory></RightSideCourseCategory>,
      },
      {
        path: "/course",
        element: <Course></Course>,
      },
    ],
  },
]);
