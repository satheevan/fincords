import React from "react";
import { Routing } from "../../../routes/Routing";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="container">
      <nav className="f-row f-j-b mt-1">
        <h1>Fincords - Register Page</h1>
        <div className="">
          <ul className="f-row f-gap-1">
            <li>
              <Link to={Routing.path.guest.guest} className="btn btn-light active">Home</Link>
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
              
            </li>
            <li>
              <Link to={Routing.path.guest.login} className="btn btn-primary">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Register;
