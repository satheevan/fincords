import React from "react";
import { Link } from "react-router-dom";
import Routing from "../../routes/Route";
import './home.css'


const Home = () => {
    return (
        <>
            <div className="icons-header-container">
                <div>Fincodrs</div>
            </div>
            <nav>

            </nav>
            <div className="icons-container"><Link to={Routing.path.Billcords}><img src={require('../../asset/images/billcords.png')} alt="billcodslogo" /></Link><span>Billcords</span></div>
            <div className="icons-container"><Link to={'./report'}>Report</Link><span>Summary Report</span></div>
        </>
    )
}

export default Home;