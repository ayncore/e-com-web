import React from "react";
import character from "@/assets/character.png";
import Image from "next/image";
import { IoMdArrowRoundForward } from "react-icons/io";

const SpecialOffers = () => {
  return (
    <div className="specialoffers h-full w-full bg-yellow-50 rounded-xl my-10 flex justify-between flex-col lg:flex-row">
      <div className="left flex-1">
        <Image src={character} alt="" className="" />
      </div>
      <div className="right flex-1 p-20 flex flex-col items-start justify-center">
        <h1 className="text-black font-semibold text-6xl max-w-lg">
          Special offer in mens products
        </h1>
        <p className="text-md max-w-lg text-neutral-500 font-medium mt-10">
        Fashion is a form of self-expression and autonomy at a particular period and place.
        </p>
        <div className="flex items-center mt-10 gap-5">
          <button className="bg-black text-white rounded-full px-6 py-4 flex gap-5">
            Discover More <IoMdArrowRoundForward className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;
