import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Routing from "./Route.js";
import Header from '../pages/BLP/BLPHeader/BLPHeader.jsx'
import Footer from '../pages/BLP/BLPFooter/BLPFooter.jsx'
// import Billcords from "../pages/ALP/Billcords/Billcords.jsx";



const PrivateRoutes = () => {
    let authentication = { 'token': Routing.authentication.status };

    return authentication.token ? (
        <>  
            <Header/>
            <Outlet />
            <Footer/>
            
        </>)
        :
        (<>
            <Navigate to={'/login'} />
        </>)
};

export default PrivateRoutes