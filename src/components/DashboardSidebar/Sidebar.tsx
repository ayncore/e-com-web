"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaTachometerAlt, FaChartLine, FaUsers, FaBox, FaEnvelope, FaQuestionCircle, FaSignOutAlt, FaSearch } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="md:hidden p-4 focus:outline-none fixed top-4 left-4 z-50"
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      <nav
        className={`shadow-lg bg-white rounded-xl min-w-[220px] py-6 px-6 font-[sans-serif] flex flex-col overflow-auto fixed top-0 h-screen z-40 transition-transform transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:relative md:translate-x-0`}
      >
        <div className="relative bg-gray-100 px-4 py-3 rounded-md mt-6 flex items-center">
          <FaSearch className="text-[#3949ab] w-4 h-4 mr-2" />
          <input
            className="text-sm text-[#3949ab] outline-none bg-transparent px-1 max-w-[130px]"
            placeholder="Search..."
          />
        </div>

        <ul className="space-y-8 pl-3 flex-1 mt-10">
          <li>
            <Link href="/" className="text-[#3949ab] font-semibold text-sm flex items-center rounded-md hover:bg-gray-100 p-2">
              <FaTachometerAlt className="w-4 h-4 mr-4" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link href="/" className="text-[#3949ab] font-semibold text-sm flex items-center rounded-md hover:bg-gray-100 p-2">
              <FaChartLine className="w-4 h-4 mr-4" />
              <span>Insight</span>
            </Link>
          </li>
          <li>
            <Link href="/" className="text-[#3949ab] font-semibold text-sm flex items-center rounded-md hover:bg-gray-100 p-2">
              <FaUsers className="w-4 h-4 mr-4" />
              <span>People & Terms</span>
            </Link>
          </li>
          <li>
            <Link href="/" className="text-[#3949ab] font-semibold text-sm flex items-center rounded-md hover:bg-gray-100 p-2">
              <FaBox className="w-4 h-4 mr-4" />
              <span>Product</span>
            </Link>
          </li>
          <li>
            <Link href="/" className="text-[#3949ab] font-semibold text-sm flex items-center rounded-md hover:bg-gray-100 p-2">
              <FaEnvelope className="w-4 h-4 mr-4" />
              <span>Inbox</span>
            </Link>
          </li>
        </ul>

        <ul className="space-y-8 pl-3 mt-8">
          <li>
            <Link href="/" className="text-[#3949ab] font-semibold text-sm flex items-center rounded-md hover:bg-gray-100 p-2">
              <FaQuestionCircle className="w-4 h-4 mr-4" />
              <span>Help Center</span>
            </Link>
          </li>
          <li>
            <Link href="/" className="text-[#3949ab] font-semibold text-sm flex items-center rounded-md hover:bg-gray-100 p-2">
              <FaSignOutAlt className="w-4 h-4 mr-4" />
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
