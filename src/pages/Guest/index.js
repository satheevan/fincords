import React from "react";
import GoodsInvoice from "../../components/Ui/InvoiceCreator/GoodsInvoice";
import { Link } from "react-router-dom";
import { Routing } from "../../routes/Routing";

const GuestPage = () => {
  return (
    <div className="container">
      <nav className="f-row f-j-b mt-1">
        <h1>Fincords</h1>
        <div className="">
          <ul className="f-row f-gap-1">
            <li>
              <button className="btn btn-light active">Home</button>
            </li>
            <li>
              <Link className="btn btn-light">Services</Link>
            </li>
            <li>
              <button className="btn btn-light">About</button>
            </li>
          </ul>
        </div>
        <div className="">
          <ul className="f-row f-gap-1">
            <li>
            <Link to={Routing.path.guest.register} className="btn btn-primary">Register</Link>
            </li>
            <li>
              <Link to={Routing.path.guest.login} className="btn btn-primary">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container mt-3">
        <ul>
          <li> Its preparing and maintaining the Financial Records</li>
          <ul>
            <li>
              Invoice Generate-
              <Link
                to={Routing.path.routeInvoice.goodsInvoice}
                className="btn btn-light"
              >
                Click
              </Link>
            </li>
            <li>finacialAnalysis</li>
          </ul>
        </ul>
      </div>
    </div>
  );
};
export default GuestPage;
