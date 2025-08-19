import { NavLink } from "react-router-dom"

export const Card=({ele,ind})=>{
    return(
        <div className="min-h-[15rem] min-w-[175px] flex flex-col gap-4 justify-between items-center shadow-[0_4px_12px_rgba(0,0,0,0.5)] rounded-sm text-center max-w-[12rem] max-h-[18rem] text-sm bg-[url('/bg.png')] bg-no-repeat
        bg-cover border-1 transition-transform hover:scale-105">
            <figure className="-mt-8 text-center px-4 rounded-xs">
                <img src={ele.Poster} alt="" onError={(e) => e.currentTarget.src = "/notFound.webp"}  className="rounded-xs shadow-2xl min-h-[13.5rem]"/>
            </figure>
                <NavLink to={`/movies/${ele.imdbID}`} className="w-full">
                <button className="w-full bg-gray-900 h-8 rounded-b-xs text-white">Watch Now</button>
                </NavLink>
        </div>
    )
}