import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import ProgressLoading from "../../../Components/ProgressLoading/ProgressLoading";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const AddDoctor = () => {
  const { data: specialties, isLoading } = useQuery({
    queryKey: ["specialty"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/specialty");
      const data = await res.json();
      return data;
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const imgHost = process.env.REACT_APP_Imgbb_key;
  const navigate = useNavigate();

  const handleAddDoctor = (data) => {
    const img = data.image[0];
    const formData = new FormData();
    formData.append("image", img);

    const url = `https://api.imgbb.com/1/upload?key=${imgHost}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((imgData) => {
        if (imgData.success) {
          const doctorsData = {
            name: data.name,
            email: data.email,
            specialty: data.select,
            image: imgData.data.url,
          };
          fetch("http://localhost:5000/doctors", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctorsData),
          })
            .then((res) => res.json())
            .then((result) => {
              toast.success("Successfully Added");
              navigate("/dashboard/manageDoctors");
            });
        }
      });
  };

  if (isLoading) {
    return <ProgressLoading />;
  }

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
          <select
            {...register("select", {
              required: "This field is required",
            })}
            className="select input-bordered w-full">
            {specialties &&
              specialties.map((specialty) => (
                <option key={specialty._id} value={specialty.name}>
                  {specialty.name}
                </option>
              ))}
          </select>
        </div>

        <div className="form-control py-2">
          <label className="label">
            <span className="label-text font-semibold">Image</span>
          </label>
          <input
            type="file"
            {...register("image", {
              required: "image is required",
            })}
            placeholder="your image"
            className="input input-bordered"
            aria-invalid={errors.image ? "true" : "false"}
          />
          {errors.image && (
            <p className="mt-2 text-red-600" role="alert">
              {errors.image?.message}
            </p>
          )}
        </div>
        <div className="form-control mt-6">
          <button className="btn text-white">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddDoctor;
