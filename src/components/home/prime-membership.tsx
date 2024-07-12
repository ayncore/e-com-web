import Image from "next/image";
import React from "react";
import money from "@/assets/money.png";
import { IoMdArrowRoundForward } from "react-icons/io";

const PrimeMembership = () => {
  return (
    <div className="primemembership h-full w-full bg-white rounded-xl my-10 flex justify-between flex-col lg:flex-row gap-20 lg:gap-10 py-10">
      <div className="left w-full lg:w-[40%] p-2 flex items-center flex-col justify-center">
        <h1 className="text-black font-semibold text-5xl lg:text-6xl max-w-lg">
          Earn free money with AYNcore
        </h1>
        <p className="text-lg lg:text-md max-w-lg text-neutral-500 font-medium mt-5">
          With AYNcore you will get freeship & savings combo...
        </p>
        <div className="flex items-center mt-10 gap-5 text-sm lg:text-lg font-semibold">
            <button className="bg-black text-white rounded-full px-4 py-3 lg:px-6 lg:py-4 flex items-center gap-2 lg:gap-5 text-md font-semibold">Savings Combo <IoMdArrowRoundForward className="w-6 h-6"/></button>
            <button className="bg-white text-black rounded-full px-4 py-3 lg:px-6 lg:py-4 hover:bg-slate-100 border-slate-200 border flex items-center gap-2 lg:gap-5 text-md font-semibold">Discover More <IoMdArrowRoundForward className="w-6 h-6"/></button>
        </div>
      </div>
      <div className="right w-full lg:w-[60%]">
        <Image src={money} alt="" className="p-5" />
      </div>
    </div>
  );
};

export default PrimeMembership;
