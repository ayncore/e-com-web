import React from "react";
import character from "@/assets/character.png";
import Image from "next/image";
import { IoMdArrowRoundForward } from "react-icons/io";

const SpecialOffers = () => {
  return (
    <div className="specialoffers h-full w-full bg-yellow-50 rounded-xl my-10 flex justify-between flex-col lg:flex-row gap-20 lg:gap-0 py-10">
      <div className="left flex-1">
        <Image src={character} alt="" className="pt-14 lg:pt-0" />
      </div>
      <div className="right flex-1 p-5 lg:p-20 flex flex-col items-start justify-center pb-14 lg:pb-0">
        <h1 className="text-black font-semibold text-4xl lg:text-5xl max-w-lg">
          Special offer in mens products
        </h1>
        <p className="text-md max-w-lg text-neutral-500 font-medium mt-10">
        Fashion is a form of self-expression and autonomy at a particular period and place.
        </p>
        <div className="flex items-center mt-10 gap-5">
          <button className="bg-black text-white rounded-full px-4 py-3 lg:px-6 lg:py-4 flex items-center gap-2 lg:gap-5 font-semibold">
            Discover More <IoMdArrowRoundForward className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;
