import React from "react";
import { Link } from "react-router-dom";
import Routing from "../../../Routes/Route";
import '../ALPHome/ALPHome.css'
// Icons
import Billcords from "../../../asset/Icons/billcords.png";

const ALPHome = () => {
    return (
        <>
            <div className="header-container">
                <h1>Fincodrs</h1>
            </div>
            <nav>

            </nav>
            <div className="icons-container"><Link to={Routing.path.Billcords}><img src={Billcords} alt="billcodslogo" /></Link><span>Billcords</span></div>
        </>
    )
}

export default ALPHome;