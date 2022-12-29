import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import CompletedCard from "./CompletedCard";

const Completed = () => {
  const { user } = useContext(AuthContext);
  const url = `https://my-task-management-server.vercel.app/my-tasks/completed?email=${user.email}`;

  const {
    data: completedTask,
    isLoading,
    refatch,
  } = useQuery({
    queryKey: ["completedTask", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5">
      {completedTask?.map((task) => (
        <CompletedCard key={task._id} task={task}></CompletedCard>
      ))}
    </div>
  );
};

export default Completed;
