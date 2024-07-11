import { styles } from '@/constants/styles'
import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const NewArrivals = () => {
  return (
    <div className="bestsellers w-full h-full">
     <div className="flex-row lg:flex items-center justify-between">
        <h1 className={`${styles.sectionHeadText}`}>
          New Arrivals.{" "}
          <span className={`${styles.sectionSubText}`}>
          REY backpacks & bags.
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

export default NewArrivals