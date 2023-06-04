import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context Api/AuthProvider";
import ProgressLoading from "../../Components/ProgressLoading/ProgressLoading";
import useToken from "../../Hooks/useToken";

const Login = () => {
  const { signIn, loading } = useContext(AuthContext);
  const [passError, setPassError] = useState("");
  const [userLogIn, setUserLogIn] = useState("");
  const [token] = useToken(userLogIn);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  if (loading) {
    return <ProgressLoading></ProgressLoading>;
  }

  

  const handleLogin = (data) => {
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUserLogIn(data.email);
        setPassError("");
      })
      .catch((error) => setPassError(error.message));
  };
  return (
    <div className="h-[600px] md:h-[700px] flex justify-center items-center">
      <div>
        <div className="hero">
          <div className="card flex-shrink-0 w-full  shadow-2xl ">
            <h1 className="text-center text-xl font-semibold pt-10">Login</h1>
            <form
              onSubmit={handleSubmit(handleLogin)}
              className="px-10 md:px-24">
              <div className="form-control py-3">
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
                <button className="btn text-white">Login</button>
              </div>
            </form>
            <p className="text-center text-xs pt-6 ">
              New to MEDICO-APP?{" "}
              <Link className="text-secondary" to="/signup">
                Create new account
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

export default Login;
