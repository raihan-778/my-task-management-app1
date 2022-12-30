import { createBrowserRouter } from "react-router-dom";
import Home from "../../components/Home/Home";
import AddTask from "../../components/Tasks/AddTask/AddTask";

import MyTasks from "../../components/Tasks/MyTasks/MyTasks";
import Root from "../Layout/Root";
import Login from "../../components/Login/Login";
import SignUp from "../../components/Login/SignUp";
import Media from "../../components/Tasks/MyTasks/Media/Media";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";
import Completed from "../../components/Tasks/Completed/Completed";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <Home></Home>
          </PrivateRoute>
        ),
      },
      {
        path: "/media",
        element: <Media></Media>,
      },
      {
        path: "/mytask",
        element: (
          <PrivateRoute>
            <MyTasks></MyTasks>,
          </PrivateRoute>
        ),
      },
      {
        path: "/completedtask",
        element: <Completed></Completed>,
      },
      {
        path: "/Addtask",
        element: (
          <PrivateRoute>
            <AddTask></AddTask>,
          </PrivateRoute>
        ),
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
