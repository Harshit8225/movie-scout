import { useLoaderData, useNavigate, useParams } from "react-router-dom"

export const MovieDetails=()=>{

     const data=useLoaderData();
    //  console.log(data);
    const navigate=useNavigate();
    const handleBack=()=>{
        navigate(-1,{preventScrollReset:true});
    }
     const title=data.Title.split(" ")[0];
     return (
        <div className=" min-h-[78vh] flex justify-center items-center bg-[url('/bg.png')]  bg-no-repeat bg-cover">
            <div className="grid grid-cols-1 max-w-xs sm:max-w-lg md:max-w-xl sm:grid-cols-2 bg-white rounded-sm gap-y-4 p-4 my-14 mx-10">
                <div>
                    <img src={`${data.Poster}`} alt="Nahi hai" onError={(e) => e.currentTarget.src = "/notFound.webp"}  className="w-[70%] mx-auto transition-transform hover:scale-102" />
                </div>
                <div className="flex flex-col items-center justify-center gap-4">
                    <div className="flex justify-between px-2 items-center gap-2 w-full">
                        <span className="h-6 w-16 text-blue-900 font-bold max-w-[30%]">{`${title}`}</span>
                        <span className="text-xs h-6 w-16 bg-blue-300 rounded-lg text-center  max-w-[30%] p-1">{`${data.Type}`}</span>
                        <span className="text-xs h-6 w-16 bg-pink-300 rounded-lg text-center  max-w-[30%] p-1">{`${data.Year}`}</span>
                    </div>
                    <div className="text-xs ">{`${data.Plot}`}</div>
                    <div className="text-xs">{`Actors: ${data.Actors}`}</div>
                    <div className="flex justify-around items-center gap-8">
                        <span className="text-xs  text-center ">{`Rating: ${data.imdbRating}`}</span>
                        <span className="text-xs text-center">{`${data.Runtime}`}</span>
                    </div>
                    
                    <button className="w-full bg-[linear-gradient(114.2deg,rgba(121,194,243,1)_22.6%,rgba(255,180,239,1)_67.7%)] rounded-sm transition-transform hover:scale-102 h-7" onClick={handleBack}>GO BACK</button>
                </div>

            </div>

        </div>
     )
}