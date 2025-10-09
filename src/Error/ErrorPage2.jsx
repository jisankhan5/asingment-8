import React from "react";
import { Link } from "react-router";

const ErrorPage2 = () => {
  return (
    <div className="flex flex-col justify-center items-center my-96">
      <h1 className="font-semibold text-5xl">Oops, App not found!</h1>
       <Link to={"/"}>
          <button className="btn bg-linear-to-l from-[#9962F2] to-[#632EE3] text-white px-5 mt-5">Go Back</button>
        </Link>
    </div>
  );
};

export default ErrorPage2;
