import React from "react";
import { Link } from "react-router-dom";
import './home.css'
import { useState,useEffect } from "react";

//data from JS
// import {Routing} from "../../routes/Routing";
import { sourceData } from "../../utils/dynamicdata/sourceData";
// import { sourceData } from "../../utils/dynamicdata/sourceData";



const Home = () => {
// Routing
// const routeHome = Routing.path.routeHome
// const routing = Routing || alert("products data not  getting from home of source data")

const productsList = sourceData.home || alert(()=>"products data not  getting from home of source data")

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
            <div className="products-container">
                {productsList.products.map((product,indx)=>(
                    <Link to={product.path}>
                    <span>{product.title}</span>
                    </Link>
                ))}
                    {/* <img src={require('../../asset/icons/inventory.svg').default} alt="billcodslogo" /> */}
                    </div>
        </>
    )
}

export default Home;