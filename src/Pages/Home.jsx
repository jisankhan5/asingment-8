import React from "react";
import playStor from "../assets/Group.png";
import appStor from "../assets/app.png";
import mobile from "../assets/hero.png";

const Home = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center space-y-5 my-4">
        <h1 className="text-7xl font-bold flex flex-col items-center">
          <span>We Build</span>
          <span>
            <span className="text-[#632EE3]">Productive</span> Apps
          </span>
        </h1>
        <p className="text-[#627382] flex flex-col items-center">
          <span>
            At HERO.IO , we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting.
          </span>
          <span>
            Our goal is to turn your ideas into digital experiences that truly
            make an impact.
          </span>
        </p>
        <div>
          <button className="btn mr-2">
            <img src={playStor} alt="Image Upcoming" />
            Google Play
          </button>
          <button className="btn">
            <img src={appStor} alt="Image Upcoming" />
            App Store
          </button>
        </div>
      </div>
      <div className="my-4">
        <div className="flex  justify-center">
          <img className="" src={mobile} alt="Image Upcoming" />
        </div>
        <div className=" text-white bg-linear-to-l from-[#9962F2] to-[#632EE3] p-10">
          <h1 className="text-center text-4xl font-semibold">
            Trusted by Millions, Built for You
          </h1>
          <div className="md:flex justify-around mt-8 space-y-4 md:space-y-0">
            <div className="flex flex-col  items-center   ">
              <p>Total Downloads</p>
              <h1 className="text-[64px] font-extrabold">29.6M</h1>
              <p>21% more than last month</p>
            </div>
            <div className="flex flex-col  items-center">
              <p>Total Reviews</p>
              <h1 className="text-[64px] font-extrabold">906K</h1>
              <p>46% more than last month</p>
            </div>
            <div className="flex flex-col  items-center">
              <p>Active Apps</p>
              <h1 className="text-[64px] font-extrabold">132+</h1>
              <p>31 more will Launch</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
