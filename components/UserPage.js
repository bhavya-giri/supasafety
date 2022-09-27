import React, { useState } from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import right from "../public/Caret right.png";
import { BsChevronRight } from "react-icons/bs";
const UserPage = () => {
  const [name, setName] = useState("Neha");
  const route = [
    {
      name: "Your Details",
      link: "/",
    },
    {
      name: "Emergency Contacts",
      link: "/",
    },
    {
      name: "FAQ",
      link: "/",
    },
    {
      name: "Help",
      link: "/",
    },
    {
      name: "About",
      link: "/",
    },
    {
      name: "Sign Out",
      link: "/",
    },
  ];
  return (
    <div className="bg-gray-100 h-screen">
      <div className="flex flex-col gap-8 pt-28">
        <h1 className="text-4xl text-red-500 pl-7">Hi {name}!</h1>
        <div>
          {route.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer border-b-[1px] mx-6 border-black hover:text-black/60 border-opacity-50 flex opacity-70 mt-6"
            >
              <p className="mr-auto text-xl">{item.name}</p>
              <BsChevronRight />
            </div>
          ))}
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default UserPage;
