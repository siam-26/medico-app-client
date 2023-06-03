import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context Api/AuthProvider";
import { toast } from "react-hot-toast";
import ProgressLoading from "../../Components/ProgressLoading/ProgressLoading";
import useToken from "../../Hooks/useToken";
import useToken from "../../Hooks/useToken";

const Signup = () => {
  const { createUser, userUpdate, loading } = useContext(AuthContext);
  const [passError, setPassError] = useState("");
  const [createdUserEmail,setCreatedUserEmail]=useState('');
  const [token]=useToken(createdUserEmail);
  
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  if (loading) {
    return <ProgressLoading></ProgressLoading>;
  }

  if(token){
    navigate('/');
  }

  const handleSignup = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        setPassError("");
        toast("user created successfully");

        const userInfo = {
          displayName: data.name,
        };

        userUpdate(userInfo)
          .then(() => {
            saveUser(data.name, data.email);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        setPassError(error.message);
      });
  };

  //save user
  const saveUser = (name, email) => {
    const userSave = { name, email };

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userSave),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCreatedUserEmail(email);
      });
  };

  return (
    <div className="h-[600px] md:h-[700px] flex justify-center items-center">
      <div>
        <div className="hero">
          <div className="card flex-shrink-0 w-full  shadow-2xl ">
            <h1 className="text-center text-xl font-semibold pt-10">Sign Up</h1>
            <form
              onSubmit={handleSubmit(handleSignup)}
              className="px-10 md:px-32">
              <div className="form-control py-2">
                <label className="label">
                  <span className="label-text font-semibold">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", {
                    required: "Name is required",
                  })}
                  placeholder="your name"
                  className="input input-bordered"
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name && (
                  <p className="mt-2 text-red-600" role="alert">
                    {errors.name?.message}
                  </p>
                )}
              </div>

              <div className="form-control pb-2">
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email Address is required",
                  })}
                  placeholder="email"
                  className="input input-bordered"
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && (
                  <p className="mt-2 text-red-600" role="alert">
                    {errors.email?.message}
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Password</span>
                </label>
                <input
                  {...register("password", {
                    required: "Password is required",
                  })}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  aria-invalid={errors.password ? "true" : "false"}
                />
                {errors.password && (
                  <p className="mt-2 text-red-600" role="alert">
                    {errors.password?.message}
                  </p>
                )}
                {passError && (
                  <p className="text-red-600">
                    Password should be 6 characters.
                  </p>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn text-white">Signup</button>
              </div>
            </form>
            <p className="text-center text-xs pt-6 ">
              Already have an account?{" "}
              <Link className="text-secondary" to="/login">
                login
              </Link>
            </p>

            <div className="divider w-5/6 mx-auto">OR</div>

            <div className="w-6/6 mx-auto pb-6">
              <button className="btn btn-outline">CONTINUE WITH GOOGLE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
