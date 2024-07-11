import React from "react";
import structure from "@/assets/structure/delivery.png";
import delivery from "@/assets/structure/delivery.png"
import Image from "next/image";

const Structure = () => {
  const data = [
    {
      id: 1,
      img: structure,
      title: "Filter & Discover",
      desc: "Smart filtering and suggestions make it easy to find",
      color: "red",
    },
    {
      id: 2,
      img: structure,
      title: "Add to bag",
      desc: "Easily select the correct items and add them to the cart",
      color: "yellow",
    },
    {
      id: 3,
      img: structure,
      title: "Fast shipping",
      desc: "The carrier will confirm and ship quickly to you",
      color: "blue",
    },
    {
      id: 4,
      img: delivery,
      title: "Enjoy the product",
      desc: "Have fun and enjoy your 5-star quality products",
      color: "purple",
    },
  ];

  return (
    <div className="structure py-10">
      <div className="grid grid-cols-4 gap-5">
        {data.map((item, index) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center mx-auto"
          >
            <Image src={item.img} alt={item.title} className="p-5" />
            <div className={`px-3 py-1 rounded-full mt-5 bg-blue-200`}>
              Step {index + 1}
            </div>
            <h1 className="text-xl font-semibold text-neutral-800 py-5">{item.title}</h1>
            <p className="text-base font-medium text-neutral-500">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Structure;
