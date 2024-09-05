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
            <Navigate to={Routing.path.guest.login} />
            <Navigate to={Routing.path.guest.register} />
            <Navigate to={Routing.path.guest.guest} />
            <Navigate to={Routing.path.guest.invoiceGen}/>
            <Navigate to={Routing.path.guest.invoiceDetails}/>
        </>)
};

export default PrivateRoutes