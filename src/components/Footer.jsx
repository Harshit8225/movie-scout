export const Footer=()=>{
    return (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] bg-gray-800 text-white px-4 py-6 gap-y-4 "> 
            {/* <div className="sm:text:sm text-xs flex justify-center items-center">Welcome to Harshit Ecom Store , Your ultimate destination for cutting edge gadgets</div>   */}
                <div className="flex flex-col justify-center items-center gap-1">
                    <h1 className="text-base font-bold">Experience</h1>
                    <a href="" className="text-center text-xs">Contact Us</a>
                    <a href="" className="text-center text-xs">Payment Method</a>
                    <a href="" className="text-center text-xs">Delivery</a>
                    <a href="" className="text-center text-xs">Return and Exchange</a>
                </div>
                <div className="flex flex-col justify-start items-center gap-1">
                    <h1 className="text-base font-bold">Shopping</h1>
                    <a href="" className="text-center text-xs">Computer store</a>
                    <a href="" className="text-center text-xs">Laptop Store</a>
                    <a href="" className="text-center text-xs">Accessories</a>
                    <a href="" className="text-center text-xs">Sales and Discount</a>
                </div>
        </div>
    )
}