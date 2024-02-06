import React, { useEffect, useState } from 'react';

// import Billingdata from '../../../Json/Billscords.json';
// import { Link } from 'react-router-dom';
import CustomButton from '../../../components/shared/customButton/index';
import './inventory.css';


const InventoryManagement = () => {

    const [count, setCount] = useState(0);

    useEffect(()=>{
        // console.log("Screen render");
        checkCount();
    },[count])

    function checkCount(){
        if(count > 10){
            setCount(1)
        }
    }


    function updateCount(){
        setCount((prevState)=>{return(prevState+1)})
    }



    return (
        <div className='inventory-container'>
            <h1>Billing Page</h1>
            {/* <span>{Billingdata.Billcords.companyInfo.comapanyLogo}</span>
            <span>{Billingdata.Billcords.companyInfo.comapanyName}</span>
            <span>{Billingdata.Billcords.companyInfo.comapanyAddress}</span> */}

            <nav className='inventory-nav-container'>
                <CustomButton title={"updateCount"} onClickHandler={updateCount}/>
                <p>{count}</p>
            </nav>
            <CustomButton title={"Inventory"} classNameBtn="inventory-statusbtn" onClickHandler={() => alert("new Page Opening")} containerClassName="container-billing-statusbtn" />
        </div >
    )
}
export default InventoryManagement;