import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../Components/Footer";

const Root = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div>
      <Navbar></Navbar>
      {isLoading && (
        <div className="fixed inset-0 bg-white/70 flex justify-center items-center z-50">
          <span className="loading loading-spinner loading-lg text-green-600"></span>
        </div>
      )}
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
