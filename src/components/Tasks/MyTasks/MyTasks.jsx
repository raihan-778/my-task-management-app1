import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import MyTasksCard from "./MyTasksCard";

const MyTasks = () => {
  const { user } = useContext(AuthContext);
  console.log(user.email);
  const url = `https://my-task-management-server.vercel.app/my-tasks?email=${user?.email}`;

  const {
    data: myTasks = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myTasks", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);

      return data;
    },
  });

  return (
    <div className="grid grid-cols-1 mt-5 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {myTasks.map((myTask) => (
        <MyTasksCard
          refetch={refetch}
          key={myTask._id}
          myTask={myTask}
        ></MyTasksCard>
      ))}
    </div>
  );
};

export default MyTasks;
