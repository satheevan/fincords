import React, {useState } from "react";
import { useLocation } from "react-router-dom";
import InvoiceTemp1 from "./template1";
import '../print/invoiceStyle.css'

const PrintInvoices = () => {
  const [selectValue, setSelectValue] = useState("t1");
  const location = useLocation();
  const invoiceData = location?.state
  console.log("Invoice data",invoiceData, location?.state);
  
  return(
    <div className="container main-container">
      <nav className="navbar">
        <select className="" id="" placeholder="select template" onChange={(e)=>setSelectValue(e.target.value)}>
          <option label="template1" value={"t1"}>
            Template1
          </option>
          <option label="template2" value={"t2"}>
            Template2
          </option>
          <option label="template3" value={"t3"}>
            Template3
          </option>
          <option label="template4">Template4</option>
        </select>
      </nav>
      <div className="Invoice-container print">
        <InvoiceTemp1 invoiceData={invoiceData} className={selectValue} />
      </div>
    </div>
  );
};
export default PrintInvoices;