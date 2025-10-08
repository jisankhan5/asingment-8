import React, { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router";
import like from "../assets/like.png";
import arrow from "../assets/arrow.png";
import star from "../assets/star.png";
import down from "../assets/down.png";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const AppDetails = () => {
  const { id } = useParams();
  const appId = parseInt(id);
  const details = useLoaderData();
  const singleApp = details.find((app) => app.id === appId);
  const {
    image,
    title,
    ratingAvg,
    downloads,
    reviews,
    size,
    companyName,
    description,
  } = singleApp;
  const [installed, setInstalled] = useState(false);
  const existing = JSON.parse(localStorage.getItem("wishlist")) || [];
  const isDupli = existing.find((a) => a.id === singleApp.id);
  const handleAdd = () => {
    const existingList = JSON.parse(localStorage.getItem("wishlist")) || [];
    let updatedList = [];
    if (existingList) {
      const isDuplicate = existingList.some((a) => a.id === singleApp.id);
      if (isDuplicate)
        return Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Already Installed!",
        });
      updatedList = [...existingList, singleApp];
    } else {
      updatedList.push(singleApp);
    }
    localStorage.setItem("wishlist", JSON.stringify(updatedList));
    setInstalled(true);
    Swal.fire({
      title: "Install Success!",
      icon: "success",
      draggable: true,
    });
  };

  return (
    <div className="container mx-auto my-10">
      <div className="md:flex md:flex-row gap-10 flex flex-col  items-center">
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
              <h1 className="text-[40px] font-extrabold">{downloads}M</h1>
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
          <button
            className="btn btn-success text-white"
            onClick={() => handleAdd()}
          >
            {installed || isDupli ? "Installed" : `Install Now (${size}MB)`}
          </button>
        </div>
      </div>
      <p className="border-t mt-5 border-gray-200"></p>
      <div>
        <div className="p-6 my-10">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart
              data={[...singleApp.ratings].reverse()}
              layout="vertical"
              margin={{ top: 10, right: 30, left: 50, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" tick={{ fontSize: 12 }} />
              <YAxis
                dataKey="name"
                type="category"
                tick={{ fontSize: 12 }}
                width={70}
              />
              <Tooltip formatter={(value) => value.toLocaleString()} />
              <Bar
                dataKey="count"
                fill="#ff8c00"
                barSize={25}
                radius={[6, 6, 6, 6]}
              >
                <LabelList dataKey="count" position="right" fontSize={12} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <p className="border-t mt-5 border-gray-200"></p>
      <div className="my-5">
        <h1 className="text-[24px] font-semibold my-3">Description</h1>
        <p className="text-[#627382]">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
