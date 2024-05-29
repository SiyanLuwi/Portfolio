// Header.js
import React from 'react';
import syn from "../assets/syn.png";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="fixed top-0 z-0 w-full text-black font-vastShadow text-4xl shadow-md flex justify-between items-center bg-white">
      <img
        src={syn}
        style={{ width: "50px", height: "auto" }}
        className="object-contain ml-10"
        alt="SYN"
      />
      <Nav />
    </header>
  );
};

export default Header;
