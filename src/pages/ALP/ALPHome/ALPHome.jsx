import React from "react";
import { Link } from "react-router-dom";
import Routing from "../../../Routes/Route";
import '../ALPHome/ALPHome.css'
// Icons
import Billcords from "../../../asset/Icons/billcords.png";

const ALPHome = () => {
    return (
        <>
            <div className="icons-header-container">
                <div>Fincodrs</div>
            </div>
            <nav>

            </nav>
            <div className="icons-container"><Link to={Routing.path.Billcords}><img src={Billcords} alt="billcodslogo" /></Link><span>Billcords</span></div>
            <div className="icons-container"><Link to={'./report'}>Report</Link><span>Summary Report</span></div>
        </>
    )
}

export default ALPHome;