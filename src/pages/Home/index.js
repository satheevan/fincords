import React from "react";
import { Link } from "react-router-dom";
import {Routing} from "../../routes/Routing";
import './home.css'
import { useState,useEffect } from "react";

//data from JS
// import { sourceData } from "../../utils/dynamicdata/sourceData";



const Home = () => {
// Routing
// const routeHome = Routing.path.routeHome
const routeBilling = Routing.path.routeBilling

//useState 
const[count, setCount]=useState(0);
const [windowWidth, setWindowWidth] = useState(window.innerWidth);
// add EventListner when component mount
useEffect(()=>{
    window.addEventListener('resize',handleResize);
    
    // clean up eventLlistner 
    return ()=>{
        window.removeEventListener('resize',handleResize);
    };
},[]);


//Methods
const countClickHandler =()=>{
    setCount((prev)=>prev+1);
};
const handleResize=()=>{
    setWindowWidth(window.innerWidth)
}
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
            <div>window size : {windowWidth}</div>
            <div className="icons-container"><Link to={routeBilling.billCords}><img src={require('../../asset/images/billcords.png')} alt="billcodslogo" /></Link><span>Billcords</span></div>
            <div className="icons-container"><Link to={'./report'}>Report</Link><span>Summary Report</span></div>
        </>
    )
}

export default Home;