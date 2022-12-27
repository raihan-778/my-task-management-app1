import { createBrowserRouter } from "react-router-dom";
import Home from "../../components/Home/Home";
import AddTask from "../../components/Tasks/AddTask/AddTask";
import CompletedTasks from "../../components/Tasks/CompletedTasks/CompletedTasks";
import MyTasks from "../../components/Tasks/MyTasks/MyTasks";
import Root from "../Layout/Root";

const router = createBrowserRouter([
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
    ],
  },
]);
