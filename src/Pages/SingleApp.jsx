import React from "react";
import { FaDownload } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const SingleApp = ({ app }) => {
  const { image, title, downloads, ratingAvg,id } = app;

  return (
    <Link to={`/appDetails/${id}`}>
      <div className="card-body bg-base-100  shadow-lg hover:scale-120 transition ease-in-out">
        <div className="">
          <div className="flex items-center justify-center bg-[#D9D9D9] p-5 rounded-xl">
            <img className="w-40 rounded-xl" src={image} alt="Shoes" />
          </div>
          <h2 className="card-title my-3">{title}</h2>
          <div className="card-actions justify-between">
            <div className="badge badge-outline bg-[#F1F5E8] text-[#00D390]">
              <FaDownload />
              {downloads}M
            </div>
            <div className="badge badge-outline bg-[#FFF0E1] text-[#FF8811]">
              <FaStar />
              {ratingAvg}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SingleApp;
