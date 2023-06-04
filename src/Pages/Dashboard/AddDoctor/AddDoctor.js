import React from "react";
import { useForm } from "react-hook-form";

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddDoctor = (data) => {
    console.log(data);
  };
  return (
    <div className="mx-auto lg:mx-0 w-6/12">
      <h1 className="text-xl font-bold my-4">Add A Doctor</h1>

      <form onSubmit={handleSubmit(handleAddDoctor)} className="w-full">
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
            <span className="label-text font-semibold">Specialty</span>
          </label>
          <select className="select select-ghost w-full">
            <option disabled selected>
              Pick a Specialty
            </option>
            <option>Svelte</option>
            <option>Vue</option>
            <option>React</option>
          </select>
        </div>
        <div className="form-control mt-6">
          <button className="btn text-white">Signup</button>
        </div>
      </form>
    </div>
  );
};

export default AddDoctor;
