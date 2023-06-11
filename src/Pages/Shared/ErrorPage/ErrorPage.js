import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    
    <div className="w-full text-center my-32">
      <div>
      <p className="text-red-500 text-4xl my-2">Something went wrong!!</p>
      <p className="text-red-500 text-xl">
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/">
        <p className="underline my-2 text-primary font-bold">Home</p>
      </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
