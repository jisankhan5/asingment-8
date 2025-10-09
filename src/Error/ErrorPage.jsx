import React from "react";
import error from "../assets/error-404.png";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex flex-col justify-center items-center my-5">
        <img className="w-[500px] h-[500px]" src={error} alt="" />
        <h1 className="font-semibold text-5xl">Oops, page not found!</h1>
        <p className="text-[#627382] text-2xl">
          The page you are looking for is not available.
        </p>
        <Link to={"/"}>
          <button className="btn bg-linear-to-l from-[#9962F2] to-[#632EE3] text-white px-5 mt-3">Go Back</button>
        </Link>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
