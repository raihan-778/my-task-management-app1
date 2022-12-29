import { GoogleAuthProvider } from "firebase/auth";
import { Button, TextInput, Label } from "flowbite-react";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthProvider";

const SignUp = () => {
  const [signUpError, setSignUpError] = useState("");
  const [createdUseremail, setCreatedUserEmail] = useState("");
  const { signUp, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const googleProvider = new GoogleAuthProvider();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleSignUp = (data) => {
    console.log(data);
    signUp(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(data.email);
        setCreatedUserEmail(data.email);
        user.uid && toast.success("User Sign Up successfully");
        navigate("/mytask");
      })
      .catch((err) => {
        console.error(err.message);
        setSignUpError(err.message);
      });
  };
  const handleGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then((result) => console.log(result.user))
      .catch((err) => console.error(err.message));
  };

  return (
    <form
      onSubmit={handleSubmit(handleSignUp)}
      className="grid grid-cols-1 lg:w-1/2 md:1/2 w-full mx-auto gap-4"
    >
      <div className="w-full mx-auto">
        <div className="mb-2 text-left block">
          <Label htmlFor="email1" value="Enter Your email" />
        </div>
        <TextInput
          id="email1"
          type="email"
          placeholder="Type your email here"
          // className="input input-bordered w-full max-w-xs"
          {...register("email", { required: "Email Address is required" })}
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && (
          <p className="text-red-500" role="alert">
            {errors.email?.signUpError}
          </p>
        )}
      </div>
      <div>
        <div className="mb-2 text-left block">
          <Label htmlFor="password1" value="Your password" />
        </div>
        <TextInput
          {...register("password", {
            minLength: 6,
            required: "Password should be 6 caracter long or more",
            pattern: {
              value:
                "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)” + “(?=.*[-+_!@#$%^&*., ?]).+$",
              message:
                "password include one Capital letter & one special character",
            },
          })}
          type="password"
          name="password"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        {errors.password && (
          <p className="text-red-500" role="alert">
            {errors.password?.message}
          </p>
        )}
      </div>

      <div>
        <Button className="w-24" type="submit">
          Sign Up
        </Button>
      </div>
      <div className="text-left">
        {" "}
        <Label className="text-2xl" value="Already have an account!!" />
        <Link to="/login">
          <span className="text-xl text-green-500">Please Login</span>
        </Link>
      </div>
      <div>
        {" "}
        <Button
          mx-auto
          color="dark"
          onClick={handleGoogleSignIn}
          className="w-1/2"
        >
          CONTINUE WITH GOOGLE
        </Button>{" "}
      </div>
    </form>
  );
};

export default SignUp;
