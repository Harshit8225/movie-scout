export const About=()=>{
    return(
        <div className="bg-[url('/bg.png')] min-h-[78vh] w-full px-[8%] py-[5%] flex flex-col justify-center">
             <div className="grid grid-cols-1 sm:grid-cols-2 bg-white rounded-2xl min-h-[60vh] p-4">
                 <div className="flex justify-center items-center">
                    <img src="/About.png" className="w-xs mx-auto bg-blend-overlay" alt="" />
                  </div>
                  <div className="flex flex-col items-center gap-8 justify-center">
                    <h1 className="text-2xl font-bold">Helping Cinephiles with movies</h1>
                    <p className="text-xs">We help people discover movies they love by providing detailed information about each film, so they can easily decide if it’s worth watching</p>
                    <div className="flex items-center justify-center gap-4">
                    <a href="">
                      <img src="/insta.svg" alt="" className="h-8 w-8"/>
                    </a>
                    <a href="">
                      <img src="/x.svg" alt="" className="h-7 w-7"/>
                    </a>
                    <a href="">
                      <img src="/linkedIn.svg" alt="" className="h-8 w-8"/>
                    </a>
                  </div>
                  </div>
             </div>
        </div>
    )
}