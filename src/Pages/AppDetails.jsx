import React from "react";
import { useLoaderData, useParams } from "react-router";
import like from "../assets/like.png"
import arrow from "../assets/arrow.png"
import star from "../assets/star.png"

const AppDetails = () => {
  const id = useParams();
  const details = useLoaderData();
  console.log(details);

  return (
    <div className="container mx-auto my-10">
      <div className="flex gap-10">
        <img className="w-[250px] h-[250px]"
          src="https://play-lh.googleusercontent.com/XskKKrerCZPR5YH9iqSNNI9RmBedf_UN5KDr6ffeypSG-yn1dBi2yRoahttm9ENqvi-d"
          alt="Image Upcoming"
        />
        <div>
          <h1 className="text-[32px] font-bold">
            SmPlan:ToDo List with Reminder
          </h1>
          <p className="text-xl mt-3">
            <span className="text-[#627382]">Developed by</span>{" "}
            <span className="text-[#632EE3]">productive.io</span>
          </p>
          <div className="flex mt-5">
            <div>
              <img src={arrow} alt="" />
              <p>Downloads</p>
              <h1>8M</h1>
            </div>
            <div>
              <img src={star} alt="" />
              <p>Downloads</p>
              <h1>8M</h1>
            </div>
            <div>
              <img src={like} alt="" />
              <p>Downloads</p>
              <h1>8M</h1>
            </div>
          </div>
          <button className="btn btn-success">Install Now (291 MB)</button>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default AppDetails;
