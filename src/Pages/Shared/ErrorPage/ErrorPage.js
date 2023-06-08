import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex align-center justify-center">
      <div>
      <p className="text-red-500">Something went wrong!!</p>
      <p className="text-red-500">
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/">
        <button className="btn btn-primary">Home</button>
      </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
