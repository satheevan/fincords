import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes.js";
import {Routing} from "./Routing.js";
//--Before Login
import Login from "../pages/Guest/index.js";

//--After Login
import Home from '../pages/Home/index.js'
// Billcords
import Billcords from "../pages/Home/Billcords/index.jsx"
// Inventory
import InventoryManagement from "../pages/Home/Inventory/index.js";
import FinancialAnalysis from "../pages/Home/FinancialAnalysis/index.js";
// import Login from "../pages/BLP/Login/Login.jsx";


const RouterComponent = () => {

    const routebilling = Routing.path.routeBilling;
    let authentication = { 'token': Routing.authentication.status };

    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PrivateRoutes />}>
                    <Route index path='/' element={<Home />} />
                    {/* Billing */}
                    <Route path={routebilling.billCords} element={<Billcords />} />
                    <Route path={routebilling.billNew} element={<Billcords />} />
                    {/* Inventory */}
                    <Route path={Routing.path.routeInventory.inventory} element={<InventoryManagement />} />
                    {/* Financial Analysis */}
                    <Route path={Routing.path.routeFinancialAnalysis.finacialAnalysis} element ={<FinancialAnalysis/>}/>
                    <Route path="/*" element={<Navigate to={"/"} />} />
                </Route>
                {/* Other full pages */}
                
                <Route
                    path="/login"
                    element={authentication.token ? <Navigate to={'/'} /> : <Login />}
                ></Route>

            </Routes>
        </BrowserRouter >
    )
}

export default RouterComponent;