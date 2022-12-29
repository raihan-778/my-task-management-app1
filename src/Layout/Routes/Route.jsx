import { createBrowserRouter } from "react-router-dom";
import Home from "../../components/Home/Home";
import AddTask from "../../components/Tasks/AddTask/AddTask";

import MyTasks from "../../components/Tasks/MyTasks/MyTasks";
import Root from "../Layout/Root";
import Login from "../../components/Login/Login";
import SignUp from "../../components/Login/SignUp";
import Media from "../../components/Tasks/MyTasks/Media/Media";
import CompletedTasks from "../../components/Tasks/CompletedTasks/CompletedTasks";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/media",
        element: <Media></Media>,
      },
      {
        path: "/mytask",
        element: <MyTasks></MyTasks>,
      },
      {
        path: "/completedtask",
        element: <CompletedTasks></CompletedTasks>,
      },
      {
        path: "/Addtask",
        element: <AddTask></AddTask>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
