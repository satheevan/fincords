import React from "react";
import "./header.css";

// data
import { sourceData } from "../../utils/dynamicdata/sourceData";
// import CustomButton from "../../components/shared/customButton";
import NavBar from "../navbar/index.js";


const Header = () => {
    const headerdetails = sourceData.basicItems.header



    return (
        <>
            <div className="header-container">
                <div className="header-content d-flex justify-content-between align-item-center">

                    <div className="header-logoheading-content d-flex">
                        <img src={require('../../asset/logo.svg').default} alt="fincords" width={"50px"} />
                        <h1 className="mt-2" style={{ color: "#ffffff" }}>{headerdetails.keyAndPhrase.headingContent}</h1>
                    </div>
                    <div className="header-navbar">
                        <NavBar />
                    </div>
                    <div className="header-search-icon">
                        <img src={require('../../asset/icons/search.svg').default} alt="search" width={"40px"} style={{ color: "#ffffff" }} />
                    </div>
                </div>
                <div className="header-search-box">
                    {/* <input type="search" placeholder="search"></input> */}
                </div>
            </div>
        </>
    )
}
export default Header