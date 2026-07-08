import React from "react";
import { MdMyLocation, MdOutlineLocationOn, MdWbSunny } from "react-icons/md";
import SearchBox from "./SearchBox";

type Props = {}

export default function Navbar({} : Props){
    return (
        <nav className="shadow-sm sticky top-0 left-0 z-50 bg-white">
            <div className="h-20 w-full flex justify-between items-center max-w-7xl px-3 mx-auto ">
                <span className="flex items-center justify-center gap-2">
                    <p className="text-gray-700 text-3xl">Weather</p>
                    <MdWbSunny className="text-3xl mt-1 text-yellow-400"/>
                </span>

                <section className="flex gap-2 items-center">
                    <MdMyLocation  className="text-2xl text-gray-500 cursor-pointer" />
                    <MdOutlineLocationOn className="text-3xl cursor-pointer" />
                    <p className="text-slate-900/80 text-sm"> India</p>

                    <div> <SearchBox /> </div>

                </section>
            </div>
            </nav>
    )
}