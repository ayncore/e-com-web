import React from 'react'

const Breadcrum = () => {
  return (
    <ul className=" px-4 space-x-3 w-max flex items-center mx-auto rounded-lg gap-4  mt-4">
    <li className="text-blue-600 px-3.5 py-2 text-base font-bold cursor-pointer">
      Home
    </li>
    <li>
      <svg xmlns="http://www.w3.org/2000/svg" className="fill-black w-6" viewBox="0 0 123.964 123.964">
        <path d="M121.7 57.681 83 26.881c-4-3.1-10-.3-10 4.8v10.3c0 3.3-2.2 6.2-5.5 6.2H6c-3.3 0-6 2.4-6 5.8v16.2c0 3.2 2.7 6 6 6h61.5c3.3 0 5.5 2.601 5.5 5.9v10.3c0 5 6 7.8 9.9 4.7l38.6-30c3.2-2.3 3.3-7 .2-9.4z" data-original="#000000" />
      </svg>
    </li>
    <li className="text-blue-600 px-3.5 py-2 text-base font-bold cursor-pointer">
Product
    </li>
    <li>
      <svg xmlns="http://www.w3.org/2000/svg" className="fill-black w-6" viewBox="0 0 123.964 123.964">
        <path d="M121.7 57.681 83 26.881c-4-3.1-10-.3-10 4.8v10.3c0 3.3-2.2 6.2-5.5 6.2H6c-3.3 0-6 2.4-6 5.8v16.2c0 3.2 2.7 6 6 6h61.5c3.3 0 5.5 2.601 5.5 5.9v10.3c0 5 6 7.8 9.9 4.7l38.6-30c3.2-2.3 3.3-7 .2-9.4z" data-original="#000000" />
      </svg>
    </li>
    <li className="text-blue-600 px-3.5 py-2 text-base font-bold cursor-pointer">
      checkout
    </li>
    <li>
      {/* <svg xmlns="http://www.w3.org/2000/svg" className="fill-black w-6" viewBox="0 0 123.964 123.964">
        <path d="M121.7 57.681 83 26.881c-4-3.1-10-.3-10 4.8v10.3c0 3.3-2.2 6.2-5.5 6.2H6c-3.3 0-6 2.4-6 5.8v16.2c0 3.2 2.7 6 6 6h61.5c3.3 0 5.5 2.601 5.5 5.9v10.3c0 5 6 7.8 9.9 4.7l38.6-30c3.2-2.3 3.3-7 .2-9.4z" data-original="#000000" />
      </svg> */}
    </li>
    {/* <li className="text-[#333] px-3.5 py-2 text-base font-bold cursor-pointer">
      Edit
    </li> */}
  </ul>
  )
}

export default Breadcrum