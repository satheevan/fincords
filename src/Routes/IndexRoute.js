import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import Routing from "./Route.js";
//--After login
import ALPHome from "../pages/ALP/ALPHome/ALPHome.jsx";
import Billcords from "../pages/ALP/Billcords/Billcords.jsx";
import BLPHome from "../pages/BLP/BLPHome/BLPHome.jsx";
import Report from "../components/ALComponents/Billcords/Report.jsx";
//--Before Login
// import Login from "../pages/BLP/Login/Login.jsx";


const RouterComponent = () => {
    let authentication = { 'token': Routing.authentication.status };

    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PrivateRoutes />}>
                    <Route index path='/' element={<ALPHome />} />
                    <Route path={Routing.path.Billcords} element={<Billcords />} />
                    <Route path='/report' element={<Report />} />
                    <Route path='/newbilling' element={<Billcords />} />
                    <Route path="/*" element={<Navigate to={"/"} />} />
                </Route>
                <Route
                    path="/login"
                    element={authentication.token ? <Navigate to={'/'} /> : <BLPHome />}
                ></Route>

            </Routes>
        </BrowserRouter >
    )
}

export default RouterComponent;