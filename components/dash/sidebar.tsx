"use client";

import { useState } from 'react'
import { HiOutlineUserCircle, HiOutlineLogout, HiCollection, HiChevronDown, HiOutlineCog, HiOutlineSupport, HiChartPie, HiShieldCheck, HiLightningBolt, HiLibrary, HiDocumentText } from "react-icons/hi"


export default function Sidebar() {

    const [custVisible, setcustVisible] = useState(false);
    const showCust = () => {
    setcustVisible((current) => !current)
  }

    return (
        <div >
        <div className="overflow-y-auto py-5 px-3 h-full bg-gray-50  dark:bg-gray-800 dark:border-gray-700">
        <ul className="space-y-2">
          {/* Overview Section */}
          <li>
            <a href="/rp" className="flex items-center p-2 text-sm font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <HiChartPie className="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-white" />
              <span className="ml-3">Overview</span>
            </a>
          </li>

          {/* Customers Section */}
          <li>
            <button type="button" onClick={showCust} className=" flex items-center p-2 w-full text-sm font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-pages" data-collapse-toggle="dropdown-pages">
              <HiCollection className="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-white" />
              <span className="flex-1 ml-3 text-left whitespace-nowrap">Customers</span>

              <HiChevronDown className={`${custVisible ? 'rotate-180 transform' : ''
                } h-6 w-6 text-gray-400`} />
            </button>
            {/* Customers Section Dropdown*/}
            {custVisible ?

              <ul id="dropdown-pages" className=" py-2 space-y-2">
                <li>
                  <a href="#" className="flex items-center p-2 pl-11 w-full text-sm font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Add New</a>
                </li>
                <li>
                  <a href="#" className="flex items-center p-2 pl-11 w-full text-sm font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">List All</a>
                </li>

              </ul>
              : <></>}
          </li>
      {/* Risks Section */}
          <li>
            <a href="#" className="flex items-center p-2 text-sm font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <HiLightningBolt className="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-white" />
              <span className="ml-3">Risks</span>
            </a>
          </li>

          {/* Controls Section */}
          <li>
            <a href="#" className="flex items-center p-2 text-sm font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <HiShieldCheck className="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-white" />
              <span className="ml-3">Controls</span>
            </a>
          </li>

          {/* Complaince Section */}
          <li>
            <a href="#" className="flex items-center p-2 text-sm font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <HiLibrary className="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-white" />
              <span className="ml-3">Compliance</span>
            </a>
          </li>

          {/* Reports Section */}
          <li>
            <a href="#" className="flex items-center p-2 text-sm font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <HiDocumentText className="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-white" />
              <span className="ml-3">Reports</span>
            </a>
          </li>
          
        </ul>
        {/* Settings Section*/}
        <ul className="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
          <li>
            <a href="/rp/settings" className="flex items-center p-2 text-xs font-normal text-gray-500 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
              <HiOutlineCog className="flex-shrink-0 w-4 h-4 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-white" />
              <span className="ml-3">Settings</span>
            </a>
          </li>

          <li>
            <a href="#" className="flex items-center p-2 text-xs font-normal text-gray-500 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">

              <HiOutlineSupport className="flex-shrink-0 w-4 h-4 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-white" />
              <span className="ml-3">Help</span>
            </a>
          </li>
          
        </ul>
      </div>
      </div>
    );
}