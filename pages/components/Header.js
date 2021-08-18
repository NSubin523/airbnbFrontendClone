import React from 'react'
import Image from "next/image";
import {SearchIcon,GlobeAltIcon,MenuIcon,UserCircleIcon,UsersIcon} from '@heroicons/react/solid';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/dist/client/router';

export default function Header({searchPlaceHolder}) {

    const [searchInput, setSearchInput] = useState("");
    const [startDate,setStartDate] = useState(new Date());
    const [endDate,setEndDate] = useState(new Date());
    const [guests,setGuests] = useState(1);
    const router = useRouter();

    const selectionRange = {
        startDate:startDate,
        endDate:endDate,
        key: 'selection'
    }

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate),
        setEndDate(ranges.selection.endDate)
    };
    
    const resetInput = () => {
        setSearchInput("");
    }

    const searchFunc = () =>{
        router.push({
            pathname: '/search',
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                guests,
            }
        });
    }

    return (
    <header className="sticky top-0 z-50 grid grid-cols-3
    bg-white shadow-md py-5 px-5 md:px-10">
        {/* Left component of header */}
        <div className="relative flex items-center h-10 cursor-pointer
         my-auto">
            <Image
                onClick={() => router.push("/")}
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
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="placeholder-gray-600 flex-grow pl-5 bg-trasnparent outline-none text-black"
                type="text"
                placeholder={searchPlaceHolder || "Search here !!"}
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
        {searchInput && (
            <div className="flex flex-col col-span-3 mx-auto shadow-md pt-3">
                <DateRangePicker
                    ranges={[selectionRange]} 
                    minDate = {new Date()}
                    rangeColors = {["#FD5B61"]}
                    onChange = {handleSelect}
                />
                <div className="flex bg-gray-100 rounded-lg items-center px-4 py-2">
                    <h2 className="text-2xl font-semibold flex-grow"> Add Guests </h2>
                    <UsersIcon className="h-5 pr-1"/>
                    <input 
                    value={guests} 
                    onChange={e => setGuests(e.target.value)}
                    min={1}
                    max={16}
                    type="number" className="w-12 pl-2 outline-none text-red-300"/>
                </div>
                <div className="flex">
                    <button onClick={resetInput} className="flex-grow text-gray-500 hover:bg-red-300 py-2 rounded-lg m-1 bg-blue-200">Cancel</button>
                    <button onClick={searchFunc} className="flex-grow text-red-300 hover:bg-gray-100 py-2 rounded-lg m-1">Search</button>
                </div>
            </div>      
        )}
    </header>
    )
}

