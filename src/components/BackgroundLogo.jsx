import React from "react";
import logo from "../assets/logo_w.jpg";

const BackgroundLogo = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none flex justify-center items-center">
      <img
        src={logo}
        alt="Background Logo"
        className="w-[300px] md:w-[500px] opacity-10 object-contain transition-transform duration-500 ease-in-out hover:scale-105"
      />
    </div>
  );
};

export default BackgroundLogo;
