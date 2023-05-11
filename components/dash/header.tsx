"use client";

import Image from 'next/image'
import { useState } from 'react'
import { HiOutlineUserCircle, HiOutlineLogout, HiMenuAlt2} from "react-icons/hi"
import { signOut } from "next-auth/react"
import { useSession } from "next-auth/react";

export default function Header() {

    const { data } = useSession();

    const [visible, setVisible] = useState(false);
    const handleToggle = () => {
    setVisible((current) => !current)
  }
    
  
    return (
        <div className="bg-gray-50 border-b border-gray-200 px-4 lg:px-6 py-1 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex justify-start items-center">

            <button id="toggleSidebar" aria-expanded="true" aria-controls="sidebar" className="p-2 mr-3 text-gray-600 rounded cursor-pointer lg:inline hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700">
            <HiMenuAlt2 className='w-6 h-6' />
            </button>

            <a href="/" target='_blank' className="flex mr-4">
              <Image src="/purplepin.png" alt="Flowbite Logo" width={36} height={36} />
              <span className="self-center text-2xl   dark:text-white ml-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-500">regpin</span>
            </a>

          </div>

          <div className="relative flex  lg:order-2 ">

            <button onClick={handleToggle}  type="button" className=" flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="dropdown">
              <span className="sr-only">Open user menu</span>
              <Image className="w-8 h-8 rounded-full" src="/james.jpg" alt="user photo" width={36} height={36} />
            </button>
            {/* Dropdown Menu */}
            {visible ?
              <div className="absolute transition-transform w-48 top-full right-1 text-base list-none bg-white rounded divide-y divide-gray-100 shadow my-2 z-40">

                <div className="py-3 px-4">
                  <span className="block text-sm font-semibold text-gray-900 dark:text-white">James First</span>
                  <span className="block text-sm font-light text-gray-500 truncate dark:text-gray-400">{data?.user?.email}</span>
                </div>

                <ul className="py-1 font-light text-gray-500 dark:text-gray-400">
                  <li> <a href="#" className="flex py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"><HiOutlineUserCircle className="w-4 h-4 mr-1.5 mt-0.5 " /> My profile</a></li>
                  <li><button onClick={() => signOut()} className="flex w-full py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"><HiOutlineLogout className="w-4 h-4 ml-0.5 mr-1 mt-0.5" /> Sign Out</button></li>
                  
                </ul>
              </div>
              : <></>}
          </div>
        </div>
      </div>
    )
}

