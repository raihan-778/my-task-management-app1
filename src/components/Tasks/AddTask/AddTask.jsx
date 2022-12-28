import { useQuery } from "@tanstack/react-query";
import { Button, Label, Textarea, TextInput } from "flowbite-react";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { AuthContext } from "../../../context/AuthProvider";

const AddTask = () => {
  const { user } = useContext(AuthContext);

  const imgHostKey = "37e7a67acc4b35dd634f1b051a00876d";

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handelAddTask = (data) => {
    console.log(data.imgUrl[0]);
    const image = data.imgUrl[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);
        }
        const taskInfo = {
          img: imgData.data.url,
          email: data.email,
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
      });
  };

  return (
    <form
      onSubmit={handleSubmit(handelAddTask)}
      className="grid grid-cols-1 lg:w-1/2 md:1/2 w-full mx-auto gap-4"
    >
      <div className="w-full mx-auto">
        <div className="mb-2 text-left block">
          <Label htmlFor="email1" value="Enter Your email" />
        </div>
        <TextInput
          id="email1"
          type="email"
          defaultValue={user.email}
          placeholder="Type your email here"
          // className="input input-bordered w-full max-w-xs"
          {...register("email", {
            required: "email is required",
          })}
        />
      </div>

      <div>
        <div className="mb-2 text-left block">
          <Label htmlFor="img1" value="Image Url" />
        </div>
        <TextInput
          id="img1"
          type="file"
          name="imgUrl"
          placeholder="Please add a title of your task"
          // className="input input-bordered w-full max-w-xs"
          {...register("imgUrl", {
            required: "imgUrl is required",
          })}
          aria-invalid={errors.imgUrl ? "true" : "false"}
        />
        {errors.imgUrl && (
          <p className="text-red-500" role="alert">
            {errors.imgUrl?.message}
          </p>
        )}
      </div>
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
      <div id="textarea">
        <div className="mb-2 block">
          <Label htmlFor="comment" value="Your message" />
        </div>
        <Textarea
          id="comment"
          name="description"
          placeholder="enter a description"
          required={true}
          rows={4}
          {...register("description", {
            required: "description is required",
          })}
        />
      </div>

      <div>
        <Button className="w-24" type="submit">
          Add Task
        </Button>
      </div>
    </form>
  );
};

export default AddTask;
