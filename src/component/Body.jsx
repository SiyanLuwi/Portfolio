import React from "react";
import Header from "./Header";

const Body = () => {
  const info = {
    name: "Sean Lowie Berbon",
    greet:
      "I am currently learning these programming languages to create my own website!",
  };

  const display = (info) => {
    return info.name + " & " + info.greet;
  };

  const test = ["REACTJS", "TAILWINDCSS", "LARAVEL", "JAVASCRIPT"];

  return (
    <>
      <div className="min-h-screen min-w-max bg-bgImage bg-black flex-col overflow-x-auto flex justify-center items-center ">
        <Header />
        <h1 className="text-white text-sm sm:text-lg">
          Hello I am {display(info)}
        </h1>
        <div className="list-decimal  grid-cols-2 flex-col flex justify-center items-center">
          {test.map((names, key) => (
            <li key={key} className="col-auto text-white font-bold  m-5">
              {/* Apply hover effect directly to the text */}
              <span className="hover:bg-hoverColor hover:text-black hover:rounded-md p-1">
                {names}
              </span>
            </li>
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
