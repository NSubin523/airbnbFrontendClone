import React from 'react'
import Image from "next/image";
import {SearchIcon,GlobeAltIcon,MenuIcon,UserCircleIcon,UsersIcon} from '@heroicons/react/solid';

export default function Header() {
    return (
    <header className="sticky top-0 z-50 grid grid-cols-3
    bg-white shadow-md py-5 px-5 md:px-10">
        {/* Left component of header */}
        <div className="relative flex items-center h-10 cursor-pointer
         my-auto">
            <Image
                src="https://links.papareact.com/qd3"
                layout="fill"
                objectFit="contain"
                objectPosition="left"
            />
        </div>
        {/* Middle component */}
        <div className="flex items-ceter md:border-2 rounded-full py-2
        ">
            <input
                className="placeholder-gray-600 flex-grow pl-5 bg-trasnparent outline-none text-black"
                type="text"
                placeholder="Search here !!"
            />
            <SearchIcon 
                className="mr-3 hidden md:inline-flex h-8 bg-gray-300 text-white rounded-full p-1 cursor-pointer
                hover:bg-red-300"
            />
        </div>

        {/* Right component */}
        <div className="justify-end items-center flex space-x-4 text-gray-600"> 
        <p className="cursor-pointer hidden md:inline">Become a host</p>
            <GlobeAltIcon className="h-6"/>
            <div className="cursor-pointer flex text-gray-600 border-4 p-2 rounded-full hover:bg-red-300">
                <MenuIcon className="h-6"/>
                <UserCircleIcon className="h-6"/>
            </div>
        </div>
    </header>
    )
}

