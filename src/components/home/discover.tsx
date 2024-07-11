import { styles } from '@/constants/styles'
import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const Discover = () => {
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
          <button className=" text-neutral-700 p-2 hover:bg-slate-50 rounded-full border border-slate-100">
            {" "}
            <FaArrowLeft size={25} />
          </button>
          <button className=" text-neutral-700 p-2 hover:bg-slate-50 rounded-full border border-slate-100">
            {" "}
            <FaArrowRight size={25} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Discover