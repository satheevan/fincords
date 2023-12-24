import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// import ALPHome from "../pages/ALP/ALPHome/ALPHome.jsx";
import Routing from "./Route.js";
// import Billcords from "../pages/ALP/Billcords/Billcords.jsx";



const PrivateRoutes = () => {
    let authentication = { 'token': Routing.authentication.status };

    return authentication.token ? (
        <>
            <Outlet />
        </>)
        :
        (<>
            <Navigate to={'/login'} />
        </>)
};

export default PrivateRoutes