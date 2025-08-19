import { NavLink } from "react-router-dom"
import { IoReorderThree } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import "../pages/Route.css"
import { useState } from "react";
import HarshitLogo from "./HarshitLogo";
import "../pages/Route.css"
export const Header=()=>{
    const [open,setOpen]=useState(false);
    return (
        <>
        <nav className="w-full flex flex-row items-center px-4 sm:px-8 md:px-16 h-16 bg-gray-800 text-lg font-medium text-white sm:gap-4 justify-between ">
            <div><HarshitLogo className="max-w-8 sm:max-w-10 md:max-w-12"></HarshitLogo></div>
            <div className="hidden sm:flex justify-center gap-4">
                <NavLink to={"/"} className="nv relative transition-all hover:scale-105 duration-300">Home</NavLink>
                <NavLink to={"/about"} className="nv relative transition-all hover:scale-105 duration-300">About</NavLink>
                <NavLink to={"/movies"} className="nv relative transition-all hover:scale-105 duration-300">Movies</NavLink>
                <NavLink to={"/contact"} className="nv relative transition-all hover:scale-105 duration-300">Contact</NavLink>
            </div>
            <button className="sm:hidden" onClick={()=>setOpen(true)}>
            <IoReorderThree className="h-8 w-8" />
            </button>
        </nav>
        <div className={`z-50 sm:hidden fixed inset-0 bg-black/5 backdrop-blur-xs transition-opacity duration-300 ${open?"opacity-100 visible":"opacity-0 invisible"}`}>
        </div>
        <div className={`z-50 sm:hidden fixed h-full w-[60%] top-0 right-0 bg-white/20 backdrop-blur-md shadow-xl text-gray-800 font-bold p-6 transform transition-transform duration-300 ${open?"translate-x-0":"translate-x-full"}`}>
            <button onClick={()=>setOpen(false)}>
                <ImCross/>
            </button>
            <div className="flex flex-col items-center text-xl gap-4 mt-4">
                <NavLink to={"/"} className="nv2 relative transition-all hover:scale-105 duration-300" onClick={()=>setOpen(false)}>Home</NavLink>
                <NavLink to={"/about"} className="nv2 relative transition-all hover:scale-105 duration-300" onClick={()=>setOpen(false)}>About</NavLink>
                <NavLink to={"/movies"} className="nv2 relative transition-all hover:scale-105 duration-300" onClick={()=>setOpen(false)}>Movies</NavLink>
                <NavLink to={"/contact"} className="nv2 relative transition-all hover:scale-105 duration-300" onClick={()=>setOpen(false)}>Contact</NavLink>
            </div>
        </div>
      </>
    )
}