import React from "react";
import './customcard.css'

export const CustomCard =({className,...props})=>{
    return(
        <div className={`card ${className}`}>
            {props.children}
        </div>
    )
}