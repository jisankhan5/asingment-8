import React, { useEffect, useState } from "react";
import { HiMiniArrowDownTray } from "react-icons/hi2";
import { FaStar } from "react-icons/fa";
import { loadWishlist, removeFromWishlist } from "./Local";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const Instal = () => {
  const [appInstal, setAppInstal] = useState(() => loadWishlist());
  const [sort, setSort] = useState("none");
  useEffect(() => {
    const saveApp = JSON.parse(localStorage.getItem("wishlist")) || [];
    if (saveApp) setAppInstal(saveApp);
  }, []);

  const sorted = () => {
    if (sort === "download-asc") {
      return [...appInstal].sort((a, b) => a.downloads - b.downloads);
    } else if (sort === "download-desc") {
      return [...appInstal].sort((a, b) => b.downloads - a.downloads);
    } else {
      return appInstal;
    }
  };

  const handleRemove = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });
    removeFromWishlist(id);
    setAppInstal((prev) => prev.filter((p) => p.id !== id));
  };

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
        <label className="form-control w-full max-w-xs">
          <select
            className="select select-bordered"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="none">Sort By Size</option>
            <option value="download-asc">Low To High</option>
            <option value="download-desc">High To Low</option>
          </select>
        </label>
      </div>
      <div>
        {sorted().map((app) => (
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
                      {app.downloads}M
                    </p>
                    <p className="flex  items-center text-[#FF8811]">
                      <FaStar />
                      {app.ratingAvg}
                    </p>
                    <p>{app.size}MB</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleRemove(app.id)}
                className="btn  btn-success text-white"
              >
                Uninstall
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instal;
