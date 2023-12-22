import React from "react";
import './css/header.css'
import { IoMdBusiness } from "react-icons/io";

import { IoPersonOutline } from "react-icons/io5";
import Userdetails from "../reusable/UserDetails";

function Header(props) {

    let showuser = false;
    const userHandler = () => {
        alert("its user details")
        showuser = true;
        console.log(showuser);
    }
    return (
        <div className="header-container">
            <IoMdBusiness />
            <h1 className="heading">{props.heading}</h1>
            <div className="icons-container">
                <IoPersonOutline className='icons personicon' onClick={userHandler} />
            </div>
            {(showuser) ? <Userdetails /> : ""}
            {showuser}
        </div>
    )
}

export default Header