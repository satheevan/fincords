import React, { useEffect, useState } from 'react';

// import Billingdata from '../../../Json/Billscords.json';
// import { Link } from 'react-router-dom';
import CustomButton from '../../../components/shared/customButton/index';
import './inventory.css';
import NewInventoryForms from '../../../components/Ui/Forms/Inventory/NewInventoryForms';



const InventoryManagement = () => {
    console.log('inventory-mgmt invoked')
    const [count, setCount] = useState(0);
    const [msg, setMsg] = useState('Count is =>zero')

    useEffect(() => {
        console.log('hook for counter, ', count)
        if (count > 0) {
            setMsg(`Count is ${count}`)
            console.log('condition true Messge changed :',msg)
        } else {
            setMsg('Count is Zero')
            console.log('condition false Messge changed to zero :',msg)
        }
    }, [count])

    useEffect(()=>{
        console.log("Initial Screen render");
        setCount(1)
        console.log("Initial count change inside useEffect to 1 checking ",count);
    },[])
    console.log("Initial count changes Outside useEffect to 1 checking ",count);

    useEffect(() => {
        console.log('message state changed useEffect:', msg)
    }, [msg])

    useEffect(() => {
        console.log('initialized')
    })


    function updateCount(){
        setCount((prevState)=>{return(prevState+1)})
    }

    const resetCountHandler = () => {
        setCount(0)
    }


    return (
        <div className='inventory-container'>
            <h1>Inv Page</h1>
            {/* <span>{Billingdata.Billcords.companyInfo.comapanyLogo}</span>
            <span>{Billingdata.Billcords.companyInfo.comapanyName}</span>
            <span>{Billingdata.Billcords.companyInfo.comapanyAddress}</span> */}

            <nav className='inventory-nav-container'>
                <CustomButton title={"nav count"} onClickHandler={updateCount}/>
                <CustomButton title={"reset count"} onClickHandler={resetCountHandler}/>
                <p>{count}</p>
                <p>{msg}</p>
            </nav>
            <div>
                <NewInventoryForms/>
            </div>
        </div >
    )
}
export default InventoryManagement;