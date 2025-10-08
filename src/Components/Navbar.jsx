import React from "react";
import git from "../assets/git.png";
import { Link } from "react-router";
import Image from "../assets/logo.png";
import { IoHomeOutline } from "react-icons/io5";
import { FaAppStore } from "react-icons/fa";
import { MdOutlineInstallDesktop } from "react-icons/md";

const Navbar = () => {
  return (
    <div className=" bg-base-100 shadow-sm ">
      <div className=" navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
              <Link to={"/"}><IoHomeOutline />Home</Link>
            </li>
            <li>
              <Link to={"/app"}><FaAppStore />Apps</Link>
            </li>
            <li>
              <Link to={"/instal"}><MdOutlineInstallDesktop />Installation</Link>
            </li>
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost text-xl">
            <img className="w-10 h-10" src={Image} alt="Image Upcoming" />
            <span className="text-[#632EE3]">HERO.IO</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link  to={"/"}> <IoHomeOutline />Home</Link>
            </li>
            <li>
              <Link to={"/app"}> <FaAppStore />Apps</Link>
            </li>
            <li>
              <Link to={"/instal"}><MdOutlineInstallDesktop />Installation</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end ">
          <Link
            to={"https://github.com/jisankhan5"}
            className="btn bg-linear-to-l from-[#9962F2] to-[#632EE3]"
          >
            <img src={git} alt="Image Upcoming" />
            Contribute
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
