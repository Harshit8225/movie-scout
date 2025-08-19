import { useNavigate } from "react-router-dom"

export const ErrorPage=()=>{
    const navigate=useNavigate();
    const handleBack=()=>{
        navigate(-1,{preventScrollReset:true});
    }
    return(
        <div className="flex flex-col items-center">
        <div className="text-center text-sm sm:text-base md:text-2xl font-bold m-4 ">Page Not Found</div>
        <button className="bg-red-300 h-8 w-28 rounded-sm"onClick={handleBack}>Go back</button>
        </div>
    )
}