import { Button, Card } from "flowbite-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const MyTasksCard = ({ myTask, refetch }) => {
  const { title, completed, date, _id } = myTask;
  console.log(myTask);
  const [value, setValue] = useState("");
  const [edit, setEdit] = useState(false);

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
            toast.success("Task Deteded successfully");
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

  // const updateContent = (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const editedTitle = form.content.value;
  //   console.log(editedTitle);
  //   return editedTitle;
  // };

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const editedTitle = form.content.value;
    console.log(editedTitle);
    const updateTitle = { title: editedTitle };

    fetch(`https://my-task-management-app1-server.vercel.app/update/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateTitle),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          console.log(data);
          toast.success("Task updated Successfuly");
          refetch();
          setEdit(false);
        }
      });
  };

  return (
    <div className="max-w-sm">
      <Card>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Time: {date}
        </p>
        <div>
          <form onSubmit={handleUpdate}>
            {edit ? (
              <>
                {" "}
                <input
                  className="text-slate-400"
                  defaultValue={title}
                  name="content"
                  type="text"
                />
                <Button size="xs" className="mt-2 mx-auto" type="submit">
                  Save
                </Button>
              </>
            ) : (
              <>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {title}
                </h5>
                <Button
                  size="xs"
                  className="mx-auto"
                  onClick={() => {
                    setEdit(true);
                  }}
                >
                  Edit
                </Button>
              </>
            )}
          </form>
        </div>

        <div className="grid mx-auto grid-cols-2">
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
          <div>
            <Button
              onClick={() => handleComplete(_id)}
              size="xs"
              disabled={completed}
              outline={true}
              gradientDuoTone="greenToBlue"
            >
              <Link to="/completedtask">Completed</Link>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MyTasksCard;
