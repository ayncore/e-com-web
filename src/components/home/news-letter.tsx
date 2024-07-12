import Image from "next/image";
import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import character from "@/assets/character.png"

const NewsLetter = () => {
  return (
    <div className="newsletter h-full max-w-8xl bg-slate-100 rounded-xl my-10 flex justify-between flex-col lg:flex-row py-10">
      <div className="left flex-1 p-5 lg:p-16">
        <h1 className="text-black font-semibold text-4xl lg:text-5xl max-w-lg pt-14 lg:pt-0">
          Don&apos;t miss out on special offers

        </h1>
        <p className="text-md max-w-lg text-neutral-500 font-medium mt-10">
          Register to receive news about the latest, savings combos, discount
          codes...
        </p>
        <ul className="space-y-4">
          <li className="1 flex gap-5 items-center mt-10 text-neutral-700 font-medium">
            <span className="bg-purple-200 rounded-full text-sm lg:text-md px-2.5 py-1">
              01
            </span>
            <h1>Savings combos</h1>
          </li>
          <li className="1 flex gap-5 items-center mt-10 text-neutral-700 font-medium">
            <span className="bg-blue-200 rounded-full text-sm lg:text-md px-2.5 py-1">
              02
            </span>
            <h1>Freeship</h1>
          </li>
          <li className="1 flex gap-5 items-center mt-10 text-neutral-700 font-medium">
            <span className="bg-red-200 rounded-full text-sm lg:text-md px-2.5 py-1">
              03
            </span>
            <h1>Premium magazines</h1>
          </li>
        </ul>
        <form action="" className="relative mt-10 max-w-sm">
          <input
            type="text"
            className="rounded-full px-4 py-3 h-10 text-sm lg:text-md font-normal text-neutral-700 block w-full border border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white outline-none"
            placeholder="Enter your Email"
            required
            aria-required
          />
          <button className="bg-black text-white rounded-full flex items-center justify-center right-1 absolute transform top-1/2 -translate-y-1/2 p-1">
            <IoMdArrowRoundForward className="w-6 h-6" />
          </button>
        </form>
      </div>
      <div className="right flex-1">
        <Image src={character} alt="" className="" />
      </div>
    </div>
  );
};

export default NewsLetter;
