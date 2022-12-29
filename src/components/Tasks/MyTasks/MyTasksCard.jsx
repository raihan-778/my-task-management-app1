import { Button, Card } from "flowbite-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import InlineEdit from "./InlineEdit/InlineEdit";

const MyTasksCard = ({ myTask, refetch }) => {
  const { title, completed, date, _id } = myTask;
  const [value, setValue] = useState("");

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want delete this task?");
    if (proceed) {
      fetch(`https://my-task-management-server.vercel.app/my-tasks/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            refetch();
            console.log(data);
            toast.success("Product Deteded successfully");
          }
        });
    }
  };

  const handleComplete = (id) => {
    fetch(`https://my-task-management-server.vercel.app/my-tasks/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          console.log(data);
          toast.success("Task Completed");
        }
      });
  };

  const handleUpdate = (id) => {
    fetch(`https://my-task-management-server.vercel.app/my-tasks/${id}`, {
      method: "PATCH",
    });
  };
  return (
    <div className="max-w-sm">
      <Card>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Time: {date}
        </p>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <InlineEdit
            value={title}
            defaultValue={title}
            setValue={setValue}
          ></InlineEdit>
        </h5>
        <div className="grid grid-cols-2">
          <div>
            <Button
              onClick={() => handleDelete(_id)}
              size="xs"
              outline={true}
              gradientDuoTone="purpleToBlue"
            >
              Delete
            </Button>
          </div>
        </div>

        <div>
          <Button
            onClick={() => handleComplete(_id)}
            size="sm"
            disabled={completed}
            outline={true}
            gradientDuoTone="greenToBlue"
          >
            <Link to="/completedtask">Completed</Link>
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default MyTasksCard;
