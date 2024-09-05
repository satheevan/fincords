import React, { useEffect, useState } from "react";
import { Routing } from "../../../routes/Routing";
import { Link, useNavigate } from "react-router-dom";

const invoiceData = {
  name: "Organization Name",
  cDetails: {
    name: "cuser1",
    inNo: "011",
    date: "01/08/2024",
    DudeDate: "30/08/2024",
    billValue: "12400",
  },
};
const InvoiceDetails = () => {
  const [businessDetails, setBusinessDetails] = useState();
  const [invoiceDetails, setInvoiceDetails] = useState();
  const navigate = useNavigate()
  // const [windowswidth, setWindowsWidth] = useState()

  useEffect(() => {
    const storeBusiness = localStorage.getItem("businessData");
    const businessData = storeBusiness ? JSON.parse(storeBusiness) : {};
    setBusinessDetails({ ...businessData });
    const storeInvoice = localStorage.getItem("invoiceData");
    const invoiceData = storeInvoice ? JSON.parse(storeInvoice) : [];
    setInvoiceDetails(invoiceData);
    console.log("local storage", businessData, invoiceData);
  }, []);
  const renderAction = (index) => {
    return (
      <>
        <span className="mx-2">edit</span>
        <span>del</span>
      </>
    );
  };
  const handleSelectinvoiceListner=(id)=>{
    navigate("/fincord/invoice-gen",{state:id})
  }
  return (
    <div className=" container f-col f-gap-1">
      <nav className="f-row f-j-b mt-1">
        <h1>Fincords Invoice details</h1>
        <div className="">
          <ul className="f-row f-gap-1">
            <li>
              <Link to={Routing.path.guest.guest} className="btn btn-light">
                Home
              </Link>
            </li>
            <li>
              <Link
                to={Routing.path.guest.invoiceGen}
                className="btn btn-light"
              >
                Invoice Create
              </Link>
            </li>
            <li>
              <Link
                to={Routing.path.guest.invoiceDetails}
                className="btn btn-light active"
              >
                Invoice Details
              </Link>
            </li>
            <li>
              <button className="btn btn-light">Contact Us</button>
            </li>
          </ul>
        </div>
        <div className="">
          <ul className="f-row f-gap-1">
            <li>
              <Link
                to={Routing?.path?.guest?.register}
                className="btn btn-primary"
              >
                Register
              </Link>
            </li>
            <li>
              <Link to={Routing?.path?.guest?.login} className="btn btn-primary">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <h3>
        Invoice Data : {businessDetails?.businessName || ""}{" "}
        <span className="text-danger">Total data : {businessDetails?.invoiceNo.length}</span>
      </h3>
      <div className="card card-wrapper">
        <div className="card-header f-row f-j-b f-a-c">
          <span className="">Invoice List</span>

          <div className="f-row f-j-b f-grow mx-2">
            <div className="search-container form-control">
              <span>@</span>
              <input type="search" className="no-br"></input>
            </div>
            <div className="feature-container f-row mx-2 f-gap-1">
              <button className="btn btn-success">Export</button>
              <Link
                to={Routing?.path?.guest?.invoiceGen}
                className="btn btn-success"
              >
                New
              </Link>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="table-container">
            <table className="">
              <thead className="f-grow">
                <th className="th-content">Invoice No</th>
                <th className="th-content">Customer</th>
                <th className="th-content">Date</th>
                <th className="th-content">Due date</th>
                <th className="th-content">Bil Value</th>
                <th className="th-action">action</th>
              </thead>
              <tbody>
                {
                  invoiceDetails?.map((val,ind)=>(
                  <tr>
                    <td>
                      <span
                        className="text-info"
                        onClick={()=>handleSelectinvoiceListner(val?.invoiceNo)}
                        style={{ cursor: "pointer" }}
                      >
                        {val?.invoiceNo || ""}
                      </span>
                    </td>
                    <td>{val?.customerName}</td>
                    <td>{val?.invDate}</td>
                    <td>{val?.duedate}</td>
                    <td>{val?.invoiceValue}</td>
                    <td>{renderAction()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InvoiceDetails;
