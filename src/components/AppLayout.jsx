import {Header} from "./Header.jsx";
import {Footer} from "./Footer.jsx";
import { Outlet, useNavigation } from "react-router-dom";
import { Loading } from "./Loading.jsx";
export const  AppLayout=()=>{
    const navigate=useNavigation();
    if(navigate.state==="loading")return <Loading/>
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}