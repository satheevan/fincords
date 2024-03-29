import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import {Routing} from "./Routing.js";
import Header from '../layouts/Header/Header.jsx';
import Footer from '../layouts/Footer/Footor.jsx';



const PrivateRoutes = () => {
    let authentication = { 'token': Routing.authentication.status };

    return authentication.token ? (
        <>
            <Header />
            <Outlet />
            <Footer />

        </>)
        :
        (<>
            <Navigate to={'/login'} />
        </>)
};

export default PrivateRoutes