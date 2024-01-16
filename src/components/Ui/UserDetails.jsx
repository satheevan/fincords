import React from "react";
import './reusable css/userdetails.css'

const Userdetails = () => {
    return (
        <div className="user-container">
            <ul className="userlist-container">
                <li className="userlist">Profile</li>
                <li className="userlist">history</li>
                <li className="userlist">logout</li>
            </ul>
        </div>
    )
}
export default Userdetails