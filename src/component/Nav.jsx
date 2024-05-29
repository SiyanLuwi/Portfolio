import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import UserIcon from "./UserIcon";
import ProjectIcon from "./ProjectIcon";
import AboutIcon from "./AboutIcon";

const NavLinks = () => {
  const [isUserIconHovered, setIsUserIconHovered] = useState(false); // State variable for UserIcon hover state
  const [isProjectIconHovered, setIsProjectIconHovered] = useState(false); // State variable for ProjectIcon hover state
  const [isAboutIconHovered, setIsAboutIconHovered] = useState(false);

  return (
    <div className="flex justify-center items-center pr-10 text-sm md:text-2xl">
      <div
        className="flex items-center"
        onMouseEnter={() => setIsUserIconHovered(true)}
        onMouseLeave={() => setIsUserIconHovered(false)}
      >
        <div>
          <UserIcon animate={isUserIconHovered} className="" />
        </div>
        <NavLink
          to="/"
          key="bio"
          className=" text-black hover:bg-hoverColor hover:text-black rounded-lg p-2"
        >
          BIO
        </NavLink>
      </div>
      <div
        className="flex items-center"
        onMouseEnter={() => setIsProjectIconHovered(true)}
        onMouseLeave={() => setIsProjectIconHovered(false)}
      >
        <div>
          <ProjectIcon animate={isProjectIconHovered} />
        </div>
        <NavLink
          to="/"
          key="projects"
          className=" text-black hover:bg-hoverColor hover:text-black rounded-lg p-2"
        >
          PROJECTS
        </NavLink>
      </div>
      <div
        className="flex items-center"
        onMouseEnter={() => setIsAboutIconHovered(true)}
        onMouseLeave={() => setIsAboutIconHovered(false)}
      >
        <div className="pr-2">
          <AboutIcon animate={isAboutIconHovered} />
        </div>
        <NavLink
          to="/"
          key="about"
          className=" text-black hover:bg-hoverColor hover:text-black rounded-lg p-2"
        >
          ABOUT
        </NavLink>
      </div>
    </div>
  );
};

const Nav = () => {
  return (
    <nav className="w-1/8">
      <div className="mr-auto">
        <NavLinks />
      </div>
    </nav>
  );
};

export default Nav;
