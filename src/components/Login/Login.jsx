import { GoogleAuthProvider } from "firebase/auth";
import { Button, TextInput, Label } from "flowbite-react";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
  const [loginError, setLoginError] = useState("");
  const [loginUseremail, setLoginUseremail] = useState("");
  const { login, googleSignIn } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const googleProvider = new GoogleAuthProvider();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleLogin = (data) => {
    console.log(data);
    login(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(data.email);
        setLoginUseremail(data.email);
        user.uid && toast.success("User login successfully");

        setLoginError("");
      })
      .catch((err) => {
        console.error(err.message);
        setLoginError(err.message);
      });
  };
  const handleGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then((result) => console.log(result.user))
      .catch((err) => console.error(err.message));
  };

  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
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
            {errors.email?.message}
          </p>
        )}
      </div>
      <div>
        <div className="mb-2 text-left block">
          <Label htmlFor="password1" value="Your password" />
        </div>
        <TextInput
          id="password1"
          type="password"
          placeholder="Type here"
          // className="input input-bordered w-full max-w-xs"
          {...register("password", {
            required: "Password is required",
          })}
          aria-invalid={errors.password ? "true" : "false"}
        />
        {errors.password && (
          <p className="text-red-500" role="alert">
            {errors.password?.message}
          </p>
        )}
      </div>

      <div>
        <Button className="w-24" type="submit">
          Login
        </Button>
        {loginError && (
          <p className="text-orange-500 font-semibold">
            Wrong email or Password!!
          </p>
        )}
      </div>
      <div className="text-left">
        {" "}
        <Label className="text-2xl" value="New to this app!!" />
        <Link to="/signup">
          <span className="text-xl text-green-500">
            Please Create an account
          </span>
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

    // <div className="flex  h-[800px] justify-center  items-center">
    //   <div>
    //     <h2 className="text-xl  font-bold">Login</h2>
    //     <form onSubmit={handleSubmit(handleLogin)}>
    //
    //
    //       <label className="label">
    //         <span className="label-text">Forgot Password?</span>
    //       </label>

    //       <div>
    //         <Button color="success" type="submit">
    //           Login
    //         </Button>
    //       </div>

    //       {loginError && (
    //         <p className="text-orange-500 font-semibold">
    //           Wrong email or Password!!
    //         </p>
    //       )}
    //       {/* <label className="label">
    //         <span className="label-text">
    //           New to this app!{" "}
    //           <Link to="/signup" className="text-secondary">
    //             Create New Account.
    //           </Link>
    //         </span>
    //       </label>
    //       <div className="divider">OR</div>
    //       <button
    //         onClick={handleGoogleSignIn}
    //         className="btn btn-outline w-full"
    //       >
    //         CONTINUE WITH GOOGLE
    //       </button> */}
    //     </form>
    //   </div>
    // </div>
  );
};

export default Login;
