// Header.js
import React from 'react';
import syn from "../assets/syn.png";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full text-white font-vastShadow text-4xl shadow-md py-5 flex justify-between items-center bg-bgImage bg-black">
      <img
        src={syn}
        style={{ width: "78px", height: "auto" }}
        className="object-contain ml-10"
        alt="SYN"
      />
      <Nav />
    </header>
  );
};

export default Header;
