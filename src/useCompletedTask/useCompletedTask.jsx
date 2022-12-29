import React, { useState } from "react";

const useCompletedTask = ({ email }) => {
  const [isCompleted, setIsCompleted] = useState("");
  const [isCompletedLoading, setIsCompletedLoading] = useState(true);
  return useEffect(() => {
    if (email) {
      fetch(
        `https://my-task-management-server.vercel.app/my-tasks/completed/${email}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setIsCompleted(data.isCompleted);
          setIsCompletedLoading(false);
        });
    }
  }, [email]);
  return [isVerified, isVerifyLoading];
};
export default useCompletedTask;
