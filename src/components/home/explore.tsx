"use client";
import React, { useState } from "react";
import {TbGenderMale, TbGenderFemme } from "react-icons/tb";
import { MdOutlineChildFriendly ,MdSportsKabaddi } from "react-icons/md";
import { GiQueenCrown,GiCrystalShrine } from "react-icons/gi";
import img from "@/assets/1.png";
import Image from "next/image";
import {  FaArrowRight } from "react-icons/fa6";
import svg from "@/assets/explore2.svg"

const Explore = () => {
  const [tabActive, setTabActive] = useState("Men");

  const data = [
    {
      name: "Women",
      icon: <TbGenderFemme size={20} />,
    },
    {
      name: "Men",
      icon: <TbGenderMale size={20} />,
    },
    {
      name: "Kids",
      icon: <MdOutlineChildFriendly size={20} />,
    },
    {
      name: "Sports",
      icon: <MdSportsKabaddi size={20} />,
    },
    {
      name: "Beauty",
      icon: <GiCrystalShrine size={20} />,
    },
    {
      name: "Jewelry",
      icon: <GiQueenCrown size={20} />,
    },
  ];

  const cardData = [
    {
      id: 1,
      name: "Backpack",
      desc: "Manufacturar",
      svg: svg,
      image: img,
      color: "bg-indigo-50",
      count: 155,
    },
    {
      id: 2,
      name: "Shoes",
      desc: "Manufacturar",
      image: img,
      svg: svg,
      color: "bg-slate-100/80",
      count: 22,
    },
    {
      id: 3,
      name: "Recycled Blanket",
      desc: "Manufacturar",
      image: img,
      svg: svg,
      color: "bg-violet-50",
      count: 144,
    },
    {
      id: 4,
      name: "Cycling Shorts",
      desc: "Manufacturar",
      image: img,
      svg: svg,
      color: "bg-red-50",
      count: 343,
    },
    {
      id: 5,
      name: "Cycling Jersey",
      desc: "Manufacturar",
      image: img,
      svg: svg,
      color: "bg-blue-50",
      count: 222,
    },
    {
      id: 6,
      name: "Car Coat",
      desc: "Manufacturar",
      image: img,
      svg: svg,
      color: "bg-green-50",
      count: 155,
    },
  ];

  return (
    <div className="explore py-32 bg-slate-100 w-full h-full flex items-center justify-center flex-col">
      <h1 className="text-3xl lg:text-4xl  text-black font-semibold">
        Start Exploring.
      </h1>
      <div className="w-fit bg-white text-base font-medium rounded-full mt-10 flex p-2 space-x-3 shadow-lg">
        {data.map((item, index) => (
          <button
            className={`lg:px-4 lg:py-2 px-2 py-1 flex items-center  rounded-full cursor-pointer ${
              tabActive === item.name
                ? "text-white bg-black"
                : "hover:text-black hover:bg-slate-100 text-neutral-600 bg-white"
            }`}
            key={index}
            onClick={() => setTabActive(item.name)}
          >
            <div className="flex gap-2 items-center">
              <div className="">{item.icon}</div>
              <span>{item.name}</span>
            </div>
          </button>
        ))}
      </div>
      <div className="cards mt-14 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10">
        {cardData.map((item) => (
          <div
            className="relative flex flex-col items-center rounded-xl bg-white w-full p-10 hover:shadow-xl cursor-pointer"
            key={item.id}
            role="button"
            tabIndex={0}
            onClick={() => {/* Handle click */}}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                /* Handle key press */
              }
            }}
          >
            <div className="absolute bottom-0 right-0 max-w-[280px] opacity-80">
            <Image
                src={item.svg}
                alt=""
              />
            </div>
            <div className="flex items-center justify-between gap-32">
              <Image
                src={item.image}
                alt={item.name}
                className={`${item.color} w-20 h-20 p-4 rounded-full`}
              />
              <span className="text-neutral-700 text-sm">
                {item.count} products
              </span>
            </div>
            <div className="py-14 flex flex-col self-start">
              <span className="text-base text-neutral-500">{item.desc}</span>
              <span className="text-3xl font-medium text-black">{item.name}</span>
            </div>
            <div className="self-start flex items-center gap-3 text-base text-neutral-700">
              <span className="">
                See Collection
              </span>
              <FaArrowRight />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
