import React from "react";
import './BLPHome.css'
import Register from '../Register/Register.jsx'
import Login from '../Login/Login.jsx'

const BLPHome = () => {
    return (
        <div className="blphome-container">
            <h1>Company Name</h1>
            <p>Company contents and its body</p>
            <Register />
            <Login />

        </div>
    )
}

export default BLPHome;