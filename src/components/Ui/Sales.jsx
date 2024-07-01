import React, { useEffect, useState } from "react";
import "./reusable/sales.css";

const Sales = (props) => {
  console.log(props.items);

  const [addRow, setAddRow] = useState(false);

  const legalColumnHeading = [
    "S.no",
    "Transaction/item Name",
    "Qty/Service",
    "Unit Price",
    "Total",
    "Action",
  ];

  const addInvoiceItem = () => {
    // setAddRow(true);aa
    const inputValueCount = [];
    for (let i = 1; i < legalColumnHeading.length; i++) {
      console.log("@@@",legalColumnHeading);
      inputValueCount.push(i);
    }
    console.log(inputValueCount);
    return (
      <>
        <tr>
          {inputValueCount.map((item, index) => (
            <td>
              <input type="type"></input>
            </td>
          ))}
          <td>
            <button>Edit</button>
            <button>delete</button>
          </td>
        </tr>
      </>
    );
  };
  const addRowItems = () => {
    setAddRow(true);
    if (addRow) {
      // addInvoiceItem()
      alert("working");
      setAddRow(false);
    }
  };

  return (
    <div className="main-container">
      <header>
        <div className="sales-heading f-row f-justify-center">
          <h2 className="heading-blue">Billing Invoice - Sales</h2>
        </div>
      </header>
      <section>
        <div className="sales-info f-row f-justify-btwn f-wrap f-gap-1">
          <div className="f-col">
            <strong htmlFor="">Customer Name</strong>
            <input type="search" name="" id="" />
          </div>
          <div className="f-col">
            <strong htmlFor="">Invoice Date</strong>
            <input type="date" name="" id="" />
          </div>
        </div>
      </section>
      <article className="f-gap-1">
        <div className="table-view">
          <table className="table table-bordered">
            <thead>
              <th scope="col">S.no</th>
              <th scope="col">Transaction/item Name</th>
              <th scope="col">Qty/Service</th>
              <th scope="col">Unit Price</th>
              <th scope="col">Total</th>
              <th scope="col">Action</th>
            </thead>
            <tbody id="invoiceItems">{addInvoiceItem()}</tbody>
            {/* <!-- items will be add here dynamically --> */}
          </table>
        </div>
        <button type="button" className="btn btn-primary" onClick={addRowItems}>
          Add Item
        </button>
      </article>
    </div>
  );
};

export default Sales;
