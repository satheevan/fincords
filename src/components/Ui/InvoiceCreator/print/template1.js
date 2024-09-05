import { React } from "react";
import "./invoiceStyle.css";

const InvoiceTemp1 = ({ className = "t2", invoiceData = {}, ...props }) => {
  // const businessDetail = localStorage.getItem()
  console.log("data",invoiceData);
  
  return (
    <div className={`container ${className}-main-wrapper`}>
      <div className={`${className}-box1`}>
        <header>
          <div className={`${className}-header-wrapper`}>
            <h1>INVOICE</h1>
          </div>
        </header>
      </div>
            <hr></hr>
      <div className={`${className}-box2`}>
        <section className="customer-details">
          <h2>Bill To:</h2>
          <p>Customer details</p>
        </section>
        <section className="customer-details">
          <h2>Info:</h2>
          <p>Invoioce No:</p>
          <p>Invoice Date:</p>
          <p>Due Date:</p>
        </section>
      </div>
              <hr></hr>
      <div className={`${className}-box3`} style={{ overflow: "auto", width: "425" }}>
        <table className="invoice-items" style={{ width: "100%" }}>
          <thead style={{ width: "100%" }}>
            <tr style={{ width: "100%", padding: "2px" }}>
              <th>Description</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {invoiceData?.items?.map((item, index) => (
              <tr key={index}>
                <td>{item.description}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>{item.totalItemsValue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <hr></hr>
      <div className={`${className}-box4`}>
        <div>
          <p>Other charges</p>
          <p>Tax charges</p>
          <p>Deduction charges</p>
        </div>
        <div className="totalValue">
          <h3>Total: Rs{invoiceData?.invoiceValue}</h3>
        </div>
      </div>
      <div className={`${className}-box5`}>
        <p>Notes</p>
      </div>
    </div>
  );
};

export default InvoiceTemp1;
