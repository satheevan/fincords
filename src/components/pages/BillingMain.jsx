import React from 'react';
import './css/billingmain.css'
import Sales from '../reusable/Sales';
import { IoMenuSharp } from "react-icons/io5";
import { useState } from 'react';


export const BillingMain = () => {

    const [sales, setSales] = useState([
        { id: 1, Name: "luxsoap", category: "soap", amount: 500 },
        { id: 2, Name: "Mary biscuts", category: "biscuit", amount: 50 },
        { id: 3, Name: "banna juice", category: "juice", amount: 80 },
        { id: 4, Name: "giner tea", category: "tea", amount: 10 },
    ]);

    const menuHandler = () => {
        alert("menus list")
    }
    return (
        <div>
            <div className='main-head-container'>
                <h1 className='heading-fincords'>Fincords</h1>
                <IoMenuSharp className='icons menuicons' onClick={menuHandler} />
            </div>
            <Sales className="sales-table" items={sales} />
        </div>
    )
}