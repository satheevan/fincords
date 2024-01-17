import React from "react";
import "./header.css";
const Header = () => {
    return (
        <>
            <div className="header-container">
                <div className="header-search-box mt-3">
                    <input type="search" placeholder="search"></input>
                </div>
            </div>
        </>
    )
}
export default Header