import React, { useContext } from "react";
import { AuthContext } from "../../../../context/AuthProvider";
import MediaCard from "./MediaCard";
import { useQuery } from "@tanstack/react-query";

const Media = () => {
  const { user } = useContext(AuthContext);
  console.log(user.email);
  const url = `http://localhost:5000/media-task?email=${user?.email}`;

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
        <MediaCard key={myTask._id} myTask={myTask}></MediaCard>
      ))}
    </div>
  );
};

export default Media;
