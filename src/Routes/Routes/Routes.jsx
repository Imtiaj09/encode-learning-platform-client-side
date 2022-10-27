import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../Pages/Category/Category";
import Course from "../../Pages/Course/Course";
import CourseCard from "../../Pages/CourseCard/CourseCard";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
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
        path: "/course",
        element: <Course></Course>,
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
      {
        path: "/courseCard/:id",
        element: <CourseCard></CourseCard>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);
