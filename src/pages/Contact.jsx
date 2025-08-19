import { Form, useActionData } from "react-router-dom"
import "./Route.css"
import {FormContact} from "./FormContact";
export const ContactData= async({request})=>{
    let data=null;
    try {
        const res=await request.formData();
        // console.log(res);
        data=Object.fromEntries(res);
        console.log(data);
    } catch (error) {
        console.log(error);
    }
    return data;    
}
export const Contact=()=>{
    const data=useActionData();
    return(
  <div className="min-h-[78vh] bg-[url('/bg.png')] bg-no-repeat
        bg-cover w-full py-[5%] px-[8%] flex items-center">
    <div className="w-full flex flex-col items-center justify-center gap-4 p-2 sm:p-4 bg-white rounded-xl">
    <h1 className="relative m-heading text-lg sm:text-xl md:text-2xl font-bold">Get In Touch</h1>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full min-h-[50vh]">
     <FormContact className=""></FormContact>
    <div className="w-full flex items-center justify-start">
      <img src="/contact2.jpg" alt="" className="w-[50%] md:w-[70%] max-w-[400px] md:min-w-[320px] m-auto transition-transform duration-300 hover:scale-104 "/>
    </div>
    </div>

    {data && (
      <h1 className=" text-center text-xs sm:text-sm md:text-base lg:text-lg m-2 w-[100%] overflow-auto">{`Your Name is ${data.username} and email is ${data.email}`}</h1>
    )}
    </div>
  </div>

    )
}