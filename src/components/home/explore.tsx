"use client";
import React, { useState } from "react";
import { TbGenderFemme } from "react-icons/tb";
import { TbGenderMale } from "react-icons/tb";
import { MdSportsKabaddi } from "react-icons/md";
import { GiJewelCrown } from "react-icons/gi";
import { MdOutlineChildFriendly } from "react-icons/md";
import { GiCrystalShrine } from "react-icons/gi";
import { GiQueenCrown } from "react-icons/gi";

const Explore = () => {
  const [tabActive, setTabActive] = useState("Men");

  const data = [
    {
      name: "Women",
      icon: <TbGenderFemme size={20}/>,
    },
    {
      name: "Men",
      icon: <TbGenderMale size={20}/>,
    },
    {
      name: "Kids",
      icon: <MdOutlineChildFriendly size={20}/>,
    },
    {
      name: "Sports",
      icon: <MdSportsKabaddi size={20}/>,
    },
    {
      name: "Beauty",
      icon: <GiCrystalShrine size={20}/>,
    },
    {
      name: "Jewelry",
      icon: <GiQueenCrown size={20}/>,
    },
  ];

  return (
    <div className="explore py-32 bg-slate-100 w-full h-full flex items-center justify-center flex-col">
      <h1 className="text-3xl lg:text-4xl  text-black font-semibold">Start Exploring.</h1>
      <div className="w-fit bg-white text-base font-medium rounded-full mt-10 flex p-2 space-x-3 shadow-lg">
        {data.map((item, index) => (
          <div
            className={`lg:px-4 lg:py-2 px-2 py-1 flex items-center  rounded-full cursor-pointer ${
              tabActive === item.name ? "text-white bg-black" : "hover:text-black hover:bg-slate-100 text-neutral-600 bg-white"
            }`}
            key={index}
            onClick={() => setTabActive(item.name)}
          >
            <div className="flex gap-2 items-center">
              <div className="">{item.icon}</div>
              <h1>{item.name}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
