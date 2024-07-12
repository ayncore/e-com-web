"use client"
import { styles } from "@/constants/styles";
import Image from "next/image";
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import img from "@/assets/1.png";

const Discover = () => {

const[currentIndex, setCurrentIndex] = useState(0);

const handlePrevClick = () => {
  if (currentIndex > 0){
setCurrentIndex(currentIndex - 1);
  }
}

const handleNextClick = () => {
  if (currentIndex < cards.length ) {
    setCurrentIndex(currentIndex + 1);
  }
}

  const cards = [
    {
      name: "Explore new arrivals",
      desc: "Shop the latest from top brands",
      featuredImage: img,
      color: "bg-yellow-50",
    },
    {
      name: "Digital gift cards",
      desc: "Give the gift of choice",
      featuredImage: img,
      color: "bg-red-50",
    },
    {
      name: "Sale collection",
      desc: "Up to 80% off retail",
      featuredImage: img,
      color: "bg-blue-50",
    },
    {
      name: "Sale collection",
      desc: "Up to 80% off retail",
      featuredImage: img,
      color: "bg-green-50",
    },
    {
      name: "Sale collection",
      desc: "Up to 80% off retail",
      featuredImage: img,
      color: "bg-purple-50",
    },
    {
      name: "Sale collection",
      desc: "Up to 80% off retail",
      featuredImage: img,
      color: "bg-red-50",
    },
  ];

  return (
    <div className="discover w-full h-full py-10">
      <div className="flex-row lg:flex items-center justify-between">
        <h1 className={`${styles.sectionHeadText}`}>
          Discover more.{" "}
          <span className={`${styles.sectionSubText}`}>
            Good things are waiting for you
          </span>
        </h1>
        <div className="icons flex items-center gap-5 justify-between lg:justify-normal mt-5 lg:mt-0">
          <button className="text-neutral-700 p-2 hover:bg-slate-50 rounded-full border border-slate-100" onClick={handlePrevClick} disabled={currentIndex === 0}>
            <FaArrowLeft size={25} />
          </button>
          <button className="text-neutral-700 p-2 hover:bg-slate-50 rounded-full border border-slate-100" onClick={handleNextClick} disabled={currentIndex >= cards.length - 3}>
            <FaArrowRight size={25} />
          </button>
        </div>
      </div>
      <div className="cards mt-14 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10">
        {cards.slice(currentIndex, currentIndex + 3).map((item, index) => (
          <div
            key={index}
            className={`relative rounded-xl flex ${item.color} p-6`}
            style={{ minHeight: '250px' }}
          >
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <p className="text-sm text-neutral-500 font-medium">
                  {item.name}
                </p>
                <h1 className="text-2xl text-black font-semibold mt-2">
                  {item.desc}
                </h1>
              </div>
              <button className="py-2 px-4 text-sm font-medium shadow-sm rounded-full bg-white text-black self-start">
                Show all
              </button>
            </div>
            <div className="flex-1 flex items-center justify-end">
              <Image
                src={item.featuredImage}
                alt={item.name}
                className="w-full h-full object-contain max-w-[200px]"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discover;
