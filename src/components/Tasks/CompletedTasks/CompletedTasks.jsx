import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";

const CompletedTasks = () => {
  const { user } = useContext(AuthContext);
  console.log(user.email);
  const url = `http://localhost:5000/my-tasks/completed`;
  const {
    data: myTasks = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myTasks", "conpleted"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      return data;
    },
  });
  if (isLoading) {
    return <h2>loading.....</h2>;
  }
  return (
    <div className="text-slate-100">
      <h2>I am here</h2>
      {myTasks.map((completedTask) => {
        {
          console.log(completedTask);
        }
        {
          <h2>{completedTask.title}</h2>;
        }
        // <CompletedTaskCard
        //   key={completedTask._id}
        //   completedTask={completedTask}
        // ></CompletedTaskCard>;
      })}
    </div>
  );
};

export default CompletedTasks;
