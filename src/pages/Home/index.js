import React from "react";
import { Link } from "react-router-dom";
import {Routing} from "../../routes/Routing";
import './home.css'
import { useState } from "react";

//data from JS
// import { sourceData } from "../../utils/dynamicdata/sourceData";



const Home = () => {
// Routing
// const routeHome = Routing.path.routeHome
const routeBilling = Routing.path.routeBilling

//useState 
const[count, setCount]=useState(0)

const countClickHandler =()=>{
    
    setCount(prev=>prev +1)
    setTimeout(() => {
        setCount(prev=>prev +2)
    },2000);
    setTimeout(() => {
        setCount(prev=>prev +3)
    },1000);
    setCount(prev=>prev +4)

}

//Methods

return (
        <>
        <nav className="">
            <button onClick={countClickHandler} className="bg-primary px-4 py-2">click to count</button><span className="px-2">count is:{count}</span>
        </nav>
            <div className="icons-header-container">

                <div>Fincodrs</div>
            </div>
            <nav>
                
            </nav>
            <div className="icons-container"><Link to={routeBilling.billCords}><img src={require('../../asset/images/billcords.png')} alt="billcodslogo" /></Link><span>Billcords</span></div>
            <div className="icons-container"><Link to={'./report'}>Report</Link><span>Summary Report</span></div>

        </>
    )
}

export default Home;