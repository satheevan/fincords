import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes.js";
import { Routing } from "./Routing.js";
// styles -utilities
import "../utils/styles/flex.css";
//--Before Login
import GuestPage from '../pages/Guest/index.js'
import Login from "../pages/Guest/Login/index.js";
import Register from "../pages/Guest/Register/register.js";
import GoodsInvoice from "../components/Ui/InvoiceCreator/GoodsInvoice.js";
import InvoiceTemp1 from "../components/Ui/InvoiceCreator/print/template1.js";

//--After Login
import Home from '../pages/Home/index.js'
// Billcords
import Billcords from "../pages/Home/Billcords/index.jsx"
import RestaurantServices from "../pages/Home/Billcords/RestaurantServices/index.js";
import LegalServices from "../pages/Home/Billcords/LegalServices/index.js"
// Inventory
import InventoryManagement from "../pages/Home/Inventory/index.js";
// Financial
import FinancialAnalysis from "../pages/Home/FinancialAnalysis/index.js";
import InvoiceDetails from "../components/Ui/InvoiceCreator/InvoiceDetails.js";
import PrintInvoice from "../components/Ui/InvoiceCreator/print/PrintInvoices.js";


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
                    <Route path={routebilling.services.restaurantServices} element={<RestaurantServices />} />
                    <Route path={routebilling.services.legalServices} element={<LegalServices/>}/>
                    {/* Inventory */}
                    <Route path={Routing.path.routeInventory.inventory} element={<InventoryManagement />} />
                    {/* Financial Analysis */}
                    <Route path={Routing.path.routeFinancialAnalysis.finacialAnalysis} element={<FinancialAnalysis />} />
                    <Route path="/*" element={<Navigate to={"/"} />} />
                </Route>
                {/* Other full pages */}
                <Route>
                <Route path={Routing.path.guest.guest} element={authentication.token ? <Navigate to={'/'} /> : <GuestPage/>}/>
                <Route path={Routing.path.guest.login} element={authentication.token ? <Navigate to={'/'} /> : <Login />}/>
                <Route path={Routing.path.guest.register} element={authentication.token ? <Navigate to={'/'} /> : <Register />}/>
                <Route path={Routing.path.guest.invoiceGen} element={authentication.token ? <Navigate to={'/'} />:<GoodsInvoice/>}/>
                <Route path={Routing.path.guest.invoiceDetails} element={authentication.token ? <Navigate to={'/'} />:<InvoiceDetails/>}/>
                <Route path={Routing.path.guest.InvoiceTemp} element={authentication.token? <Navigate to={'/'}/>:<InvoiceTemp1/>}/>
                <Route path={Routing.path.guest.printInvoice} element={authentication.token? <Navigate to={'/'}/>:<PrintInvoice/>}/>
                </Route>
                

            </Routes>
        </BrowserRouter >
    )
}

export default RouterComponent;