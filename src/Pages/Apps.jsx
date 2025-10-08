import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import Single20App from "./Single20App";
import error from "../assets/App-Error.png";

const Apps = () => {
  const data = useLoaderData();
  const [search, setSearch] = useState("");
  const searchTrim = search.trim().toLocaleLowerCase();
  const searchedProduct = searchTrim
    ? data.filter((datas) =>
        datas.title.toLocaleLowerCase().includes(searchTrim)
      )
    : data;
  if (searchedProduct.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center my-5 space-y-5">
        <img src={error} alt="Image Upcoming" />
        <h1 className="text-5xl font-semibold">OPPS!! APP NOT FOUND</h1>
        <p className="text-[#627382]">
          The App you are requesting is not found on our system. please try
          another apps
        </p>
        <Link to={"/"}>
          <button className="btn bg-linear-to-l from-[#9962F2] to-[#632EE3] text-white">
            Go Back
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto my-20 space-y-5">
      <h1 className="font-bold text-5xl text-center">Our All Applications</h1>
      <p className="text-[#627382] text-center">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="flex flex-col space-y-4 items-center md:flex md:flex-row md:justify-between">
        <h1 className="font-semibold text-[24px]">
          ({searchedProduct.length})Apps Found
        </h1>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            required
            placeholder="Search"
          />
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 my-5">
        {searchedProduct.map((app) => (
          <Single20App key={app.id} app={app}></Single20App>
        ))}
      </div>
    </div>
  );
};

export default Apps;
