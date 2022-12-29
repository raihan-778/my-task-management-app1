import { Label, TextInput, Textarea } from "flowbite-react";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthProvider";

const Home = () => {
  const { user } = useContext(AuthContext);
  const [message, setMessage] = useState("");

  const handleChange = () => {
    setMessage(title);
  };

  const handleClick = () => {};

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleKeyUp = (event) => {
    event.preventDefault();
    if (event.key === "Enter") {
      handleSubmit(handelAddTask);
    }
  };
  const handelAddTask = (data) => {
    const taskInfo = {
      date: new Date(),
      email: user.email,
      title: data.title,
      description: data.description,
    };
    fetch("http://localhost:5000/all-task", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(taskInfo),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast.success(`New task ${data.title} added successfully`);
      });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(handelAddTask)}
        className="grid grid-cols-1 lg:w-1/2 md:1/2 w-full mx-auto gap-4"
        type="submit"
      >
        <div>
          <div className="mb-2 text-left block">
            <Label htmlFor="title1" value="Task title" />
          </div>
          <TextInput
            id="title1"
            type="text"
            name="title"
            placeholder="Please add a title of your task"
            // className="input input-bordered w-full max-w-xs"
            {...register("title", {
              required: "title is required",
            })}
            aria-invalid={errors.title ? "true" : "false"}
          />
          {errors.title && (
            <p className="text-red-500" role="alert">
              {errors.title?.message}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Home;
