import Image from "next/image";
import React from "react";
import money from "@/assets/money.png";
import { IoMdArrowRoundForward } from "react-icons/io";

const PrimeMembership = () => {
  return (
    <div className="primemembership h-full w-full bg-white rounded-xl my-10 flex justify-between flex-col lg:flex-row">
      <div className="left flex-1 p-20">
        <h1 className="text-black font-semibold text-6xl max-w-lg">
          Earn free money with AYNcore
        </h1>
        <p className="text-md max-w-lg text-neutral-500 font-medium mt-5">
          With AYNcore you will get freeship & savings combo...
        </p>
        <div className="flex items-center mt-10 gap-5">
            <button className="bg-black text-white rounded-full px-6 py-4 flex gap-5">Savings Combo <IoMdArrowRoundForward className="w-6 h-6"/></button>
            <button className="bg-white text-black rounded-full px-6 py-4 hover:bg-slate-100 border-slate-200 border flex gap-5">Discover More <IoMdArrowRoundForward className="w-6 h-6"/></button>
        </div>
      </div>
      <div className="right flex-1">
        <Image src={money} alt="" className="" />
      </div>
    </div>
  );
};

export default PrimeMembership;
