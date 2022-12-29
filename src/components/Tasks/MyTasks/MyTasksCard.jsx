import { Button, Card } from "flowbite-react";
import React from "react";
import { toast } from "react-toastify";

const MyTasksCard = ({ myTask, refetch }) => {
  const { title, completed, date, _id } = myTask;

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want delete this task?");
    if (proceed) {
      fetch(`http://localhost:5000/my-tasks/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            console.log(data);
            toast.success("Product Deteded successfully");
            refetch();
          }
        });
    }
  };

  const handleComplete = (id) => {
    fetch(`http://localhost:5000/my-tasks/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          console.log(data);
          toast.success("Task Completed");
          refetch();
        }
      });
  };

  return (
    <div className="max-w-sm">
      <Card>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Time: {date}
        </p>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
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
            Completed
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default MyTasksCard;
