import { Form } from "react-router-dom"
export const FormContact=()=>{
    return(
        <div className="w-full flex items-center justify-center md:justify-end p-2 ">
        <Form
      className="flex flex-col py-4 px-8 gap-5 bg-[url('/bg.png')] bg-no-repeat bg-cover rounded-md md:text-base border-1 transition-transform duration-300 ease-in-out hover:scale-102 hover:shadow-[0_0_4px_#66ccff,0_0_6px_#66ccff,0_0_8px_#99ffff]"
      method="POST"
      action="/contact"
    >
      <div className="flex flex-col items-start gap-2">
        <label htmlFor="username" className="text-xs sm:text-sm font-bold 
   drop-shadow-[0_0_2px_#38bdf8]">Full Name: </label>
        <input
          className="border-1 rounded-xs w-full h-5 sm:h-6 md:h-8 text-xs bg-white p-1 outline-none
         focus:shadow-[0_0_4px_#66ccff,0_0_6px_#66ccff,0_0_8px_#99ffff] focus:border-1 "
          type="text"
          name="username"
          id="username" placeholder="Enter Your Name"
          required
        />
      </div>

      <div className="flex flex-col items-start gap-2">
        <label htmlFor="email" className="text-xs sm:text-sm font-bold 
   drop-shadow-[0_0_2px_#38bdf8]">Email Address:</label>
        <input
          className="border-1 rounded-xs w-full h-5 sm:h-6 md:h-8 text-xs bg-white p-1 outline-none
         focus:shadow-[0_0_4px_#66ccff,0_0_6px_#66ccff,0_0_8px_#99ffff] focus:border-1 "
          type="text"
          name="email"
          id="email"
          placeholder="Enter Your Email"
          required
        />
      </div>

      <div className="flex flex-col items-start gap-2">
        <label htmlFor="message" className="text-xs sm:text-sm font-bold 
   drop-shadow-[0_0_2px_#38bdf8]">Message:</label>
        <textarea
          name="message"
          id="message"
          className="resize-none border-1 rounded-xs w-full text-xs h-10 bg-white p-1 outline-none
         focus:shadow-[0_0_4px_#66ccff,0_0_6px_#66ccff,0_0_8px_#99ffff] focus:border-1" placeholder="Leave us a Message"
        />
      </div>

      <button type="submit" className="bg-gray-800 text-white h-8 rounded-xs">
        Submit
      </button>
    </Form>
    </div>
    )
}