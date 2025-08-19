import { FiLoader } from "react-icons/fi";
export const  Loading=()=>{
    return (
        <div className="h-screen p-0 m-0 flex items-center justify-center">
            <FiLoader className="text-gray-800 h-12 w-12 animate-spin"/>
        </div>
    )
}