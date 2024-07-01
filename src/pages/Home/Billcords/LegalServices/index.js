import React, { useEffect } from "react";
import Sales from "../../../../components/Ui/Sales";
import authURL from "../../../../app/client";

const LegalServices =()=>{
    useEffect( async ()=>{
        const users = await authURL.get("users")
        console.log("auth", users);
    },[])
    return(
        <>
        <h1>Legal Services</h1>
        <Sales/>
        </>
    )
}

export default LegalServices