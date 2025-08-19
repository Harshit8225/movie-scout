import { useLoaderData, useNavigate } from "react-router-dom"
import { Card } from "./Card";
import { Loading } from "../components/Loading";
export const Movies=()=>{   
    const data=useLoaderData();
    if(!data)return <Loading></Loading>
    // console.log(data);
    return(
        <div className="px-[8%] py-[5%] w-full bg-[url('/bg.png')] bg-no-repeat
        bg-cover ">
        <div className="min-h-[78vh] w-full grid grid-cols-[repeat(auto-fit,minmax(175px,1fr))] gap-x-16 gap-y-32 px-8 py-14 pb-18 justify-items-center bg-white rounded-xl">
          {data.Search.map((ele,ind)=>{
              return <Card key={ele.imdbID} ele={ele} ind={ind}></Card>
          })}
        </div>
        </div>
    )
}