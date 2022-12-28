import { createBrowserRouter } from "react-router-dom";
import Home from "../../components/Home/Home";
import AddTask from "../../components/Tasks/AddTask/AddTask";
import CompletedTasks from "../../components/Tasks/CompletedTasks/CompletedTasks";
import MyTasks from "../../components/Tasks/MyTasks/MyTasks";
import Root from "../Layout/Root";
import Login from "../../components/Login/Login";
import SignUp from "../../components/Login/SignUp";
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
