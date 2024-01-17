import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes.js";
import Routing from "./Route.js";
//bfore Login

//--After Login
import Billcords from "../pages/Home/Billcords/index.jsx"
import Home from '../pages/Home/index.js'
import Login from "../pages/Login/index.js";
import InventoryManagement from "../pages/Home/Inventory/index.js";
//--Before Login
// import Login from "../pages/BLP/Login/Login.jsx";


const RouterComponent = () => {
    let authentication = { 'token': Routing.authentication.status };

    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PrivateRoutes />}>
                    <Route index path='/' element={<Home />} />
                    <Route path={Routing.path.Billcords} element={<Billcords />} />
                    <Route path='/inventory' element={<InventoryManagement />} />
                    <Route path="/*" element={<Navigate to={"/"} />} />
                </Route>
                <Route
                    path="/login"
                    element={authentication.token ? <Navigate to={'/'} /> : <Login />}
                ></Route>

            </Routes>
        </BrowserRouter >
    )
}

export default RouterComponent;