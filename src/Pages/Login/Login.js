import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const handleFormSubmit = (data) => {
    console.log(data.password);
  };
  return (
    <div className="h-[600px] md:h-[700px] flex justify-center items-center">
      <div>
        <div className="hero">
          <div className="card flex-shrink-0 w-full  shadow-2xl ">
            <h1 className="text-center text-xl font-semibold pt-10">Login</h1>
            <form
              onSubmit={handleSubmit(handleFormSubmit)}
              className="px-10 md:px-24">
              <div className="form-control py-3">
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input
                  type="text"
                  {...register("email")}
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Password</span>
                </label>
                <input
                  {...register("password")}
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
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
