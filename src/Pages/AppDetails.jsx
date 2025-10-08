import React from "react";
import { useLoaderData, useParams } from "react-router";
import like from "../assets/like.png";
import arrow from "../assets/arrow.png";
import star from "../assets/star.png";
import down from "../assets/down.png";

const AppDetails = () => {
  const { id } = useParams();
  const appId = parseInt(id);
  const details = useLoaderData();
  const singleApp = details.find((app) => app.id === appId);
  const { image, title, ratingAvg, downloads, reviews, size, companyName } =
    singleApp;

  return (
    <div className="container mx-auto my-10">
      <div className="flex gap-10 ">
        <img className="w-[250px] h-[250px]" src={image} alt="Image Upcoming" />
        <div>
          <h1 className="text-[32px] font-bold">{title}</h1>
          <p className="text-xl mt-3">
            <span className="text-[#627382]">Developed By</span>
            <span className="text-[#632EE3]"> {companyName}</span>
          </p>
          <p className="border-t mt-5 border-gray-200"></p>
          <div className="flex  gap-5 mt-5">
            <div className="flex flex-col  items-center">
              <div className="flex flex-col  items-center">
                <img className="w-6 h-8" src={arrow} alt="" />
                <img src={down} alt="" />
              </div>
              <p>Downloads</p>
              <h1 className="text-[40px] font-extrabold">{downloads}</h1>
            </div>
            <div className="flex flex-col  items-center">
              <img className="w-10 h-10" src={star} alt="" />
              <p>Average Ratings</p>
              <h1 className="text-[40px] font-extrabold">{ratingAvg}</h1>
            </div>
            <div className="flex flex-col  items-center">
              <img className="w-10 h-10" src={like} alt="" />
              <p>Total Reviews</p>
              <h1 className="text-[40px] font-extrabold">{reviews}</h1>
            </div>
          </div>
          <button className="btn btn-success text-white">
            Install Now ({size}MB)
          </button>
        </div>
      </div>
      <p className="border-t mt-5 border-gray-200"></p>
      <div>
        
      </div>
      <div></div>
    </div>
  );
};

export default AppDetails;
