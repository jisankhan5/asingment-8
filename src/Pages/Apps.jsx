import React from "react";
import { useLoaderData } from "react-router";
import Single20App from "./Single20App";

const Apps = () => {
  const data = useLoaderData();

  return (
    <div className="container mx-auto my-20 space-y-5">
      <h1 className="font-bold text-5xl text-center">Our All Applications</h1>
      <p className="text-[#627382] text-center">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="flex justify-between">
        <h1 className="font-semibold text-[24px]">({data.length})Apps Found</h1>
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
          <input type="search" required placeholder="Search" />
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 my-5">
        {data.map((app) => (
          <Single20App key={app.id} app={app}></Single20App>
        ))}
      </div>
    </div>
  );
};

export default Apps;
