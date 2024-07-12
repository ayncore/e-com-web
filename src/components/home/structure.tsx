import React from "react";
import structure from "@/assets/structure/delivery.png";
import Image from "next/image";

const Structure = () => {
  const data = [
    {
      id: 1,
      img: structure,
      title: "Filter & Discover",
      desc: "Smart filtering and suggestions make it easy to find.",
    },
    {
      id: 2,
      img: structure,
      title: "Add to bag",
      desc: "Easily select the correct items and add them to the cart.",
    },
    {
      id: 3,
      img: structure,
      title: "Fast shipping",
      desc: "The carrier will confirm and ship quickly to you.",
    },
    {
      id: 4,
      img: structure,
      title: "Enjoy the product",
      desc: "Have fun and enjoy your 5-star quality products.",
    },
  ];

  const getColorClass = (index: number) => {
    switch (index) {
      case 0:
        return "bg-red-100 text-red-800";
      case 1:
        return "bg-green-100 text-green-800";
      case 2:
        return "bg-blue-100 text-blue-800";
      case 3:
        return "bg-purple-100 text-purple-800";
      default:
        return "";
    }
  };

  return (
    <div className="structure py-20">
      <div className="mx-auto grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 text-center py-10">
        {data.map((item, index) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center mx-auto"
          >
            <Image src={item.img} alt={item.title} className="" />
            <div
              className={`px-4 py-1 rounded-full mt-5 text-lg lg:text-md font-medium ${getColorClass(index)}`}
            >
              Step {index + 1}
            </div>
            <h1 className="text-2xl lg:text-2xl font-semibold text-neutral-800 mt-10 py-2 uppercase tracking-wide">
              {item.title}
            </h1>
            <p className="text-lg lg:text-lg font-medium text-neutral-500 max-w-xs">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Structure;
