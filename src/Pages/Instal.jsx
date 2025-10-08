import React, { useEffect, useState } from "react";
import { HiMiniArrowDownTray } from "react-icons/hi2";
import { FaStar } from "react-icons/fa";

const Instal = () => {
  const [appInstal, setAppInstal] = useState([]);
  useEffect(() => {
    const saveApp = JSON.parse(localStorage.getItem("wishlist")) || [];
    if (saveApp) setAppInstal(saveApp);
  }, []);
  return (
    <div className="container mx-auto my-[80px]">
      <h1 className="text-center text-[48px] font-bold">Your Installed Apps</h1>
      <p className="text-center text-[#627382]">
        Explore All Trending Apps on the Market developed by us
      </p>

      <div className="flex flex-col space-y-4 items-center md:flex md:flex-row md:justify-between">
        <h1 className="font-semibold text-2xl my-6">
          {appInstal.length} Apps Found
        </h1>
        <button>Sort</button>
      </div>
      <div>
        {appInstal.map((app) => (
          <div
            key={app.id}
            className="card-body rounded-2xl shadow-xl hover:bg-gray-300 hover:scale-102 transition ease-in-out"
          >
            <div className="flex justify-between items-center">
              <div className="flex gap-5">
                <div className="bg-[#D9D9D9] p-4 rounded-2xl">
                  <img
                    className="w-16 h-16 rounded-xl"
                    src={app.image}
                    alt="Image Upcoming"
                  />
                </div>
                <div>
                  <h2 className="text-4xl">{app.title}</h2>
                  <div className="flex gap-5 font-medium text-2xl mt-4">
                    <p className="flex  items-center text-[#00D390]">
                      <HiMiniArrowDownTray />
                      {app.downloads}
                    </p>
                    <p className="flex  items-center text-[#FF8811]">
                      <FaStar />
                      {app.ratingAvg}
                    </p>
                    <p>{app.size}MB</p>
                  </div>
                </div>
              </div>
              <button className="btn  btn-success text-white">Uninstall</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instal;
