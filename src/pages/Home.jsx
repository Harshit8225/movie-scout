import { NavLink } from "react-router-dom"
import "./Route.css"
import { Shape } from "./Shape"
export const Home=()=>{
    return(
        <div className="min-h-[78vh] z-0 relative pb-32 bg-[url('/bg.png')]  grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] w-full">
          <div className="flex flex-col items-center justify-center text-white gap-4 p-10 w-full text-center">
            <div className="text-xs sm:text-sm md:text-base">Explore The Latest In Movie Industries</div>
            <div className="text-xl font-bold sm:text-2xl md:text-3xl">Unlimited Movie,TVs Shows, & More </div>
            <div className="text-xs sm:text-sm md:text-base">Discover the top best Movies and Dramas with a catchy subtitle like your ultimate guide to must-watch content</div>
            <NavLink to="/movies">
             <button className="bg-red-600 text-white h-8 w-25 text-sm">Explore Now</button>
            </NavLink>
          </div>
          <div className="flex flex-col items-center justify-center w-full py-4 px-4 max-w-xs mx-auto sm:max-w-sm ">
            <img src="./movies.png" alt="" className="w-full"/>
          </div>
        <Shape />
        </div>
    )
}