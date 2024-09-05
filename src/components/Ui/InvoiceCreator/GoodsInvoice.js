import React, { useEffect, useState } from "react";
import "./invoiceGen.css";
// import { CiCirclePlus } from "react-icons/ci";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Routing } from "../../../routes/Routing";

const GoodsInvoice = () => {
  // Item data
  const itemData = {
    desc: "",
    quantity: "",
    price: "",
    amount: "",
  };
  const kV = Object.keys(itemData);
  // Invoice data
  const InvoiceData = {
    invoiceNo: "",
    customerName: "",
    billTo: "",
    invDate: "",
    duedate: "",
    taxNo: "",
    itemsData: [],
    TotalItemsValue: 0,
    otherCharges: 0,
    tax: 0,
    deductions: 0,
    invoiceValue: 0,
  };
  // Business Data
  const businessData = {
    businessName: "",
    businessDetail: "",
    invoiceNo: [],
  };

  // Operation work
  const [imagePreview, setImagePreview] = useState(null);
  const [businessDetails, setBusinessDetails] = useState({ ...businessData });
  const [invoiceItems, setInvoiceItems] = useState([]);
  const [productItems, setProductItems] = useState([]);
  const [invoiceDetails, setInvoiceDetails] = useState({ ...InvoiceData });
  const [currentItem, setCurrentItems] = useState({ ...itemData });
  const [storedInvoiceNo, setStoredInvoiceNo] = useState([]);
  // General work
  const [imgWidth, setImgwidth] = useState("200");
  const [inputBox, setInputBox] = useState();
  const [showPrint, setShowPrint] = useState(false);
  const [getInvoice,setGetInvoice] = useState(false)
  const navigate = useNavigate();
  const location = useLocation();
  console.log("location",location?.state);

  //========================Operational======================================
  useEffect(() => {
    const storeBusiness = localStorage.getItem("businessData");
    const businessData = storeBusiness ? JSON.parse(storeBusiness) : {};
    setBusinessDetails(businessData);
    const storeInvoices = localStorage.getItem("invoiceData");
    const invoiceData = storeInvoices ? JSON.parse(storeInvoices) : [];
    console.log("invoiceData", invoiceData);

    setInvoiceItems(invoiceData);
  }, []);

  // useEffect(() => {
  //   let storeValue = localStorage.getItem("businessData");
  //   const businessData = storeValue ? JSON.parse(storeValue) : {};
  //   setBusinessDetails((prev) => ({ ...prev, invoiceNo: [...prev.invoiceNo] }));
  // }, [invoiceDetails.invoiceNo]);
  useEffect(()=>{
    if(location.state){
      console.log("Invoice List",invoiceItems);
    const selectInvoice= invoiceItems.find((val)=>(val.invoiceNo === location?.state))
    console.log("data",selectInvoice);
    if(selectInvoice){
      setInvoiceDetails({...selectInvoice})
      setProductItems(selectInvoice?.itemsData)
    }
    }
  },[location?.state,invoiceItems])
  useEffect(() => {
    setInvoiceDetails((prev) => ({
      ...prev,
      ["TotalItemsValue"]: productItems.reduce(
        (acc, value) => (acc += value.amount),
        0
      ),
      ["itemsData"]: productItems,
    }));
  }, [productItems]);
  // Invoice Calculation
  const invoiceCalc = () => {
    invoiceDetails.invoiceValue =
      invoiceDetails.TotalItemsValue +
      +invoiceDetails.otherCharges -
      +invoiceDetails.deductions +
      +invoiceDetails.tax;
  };

  useEffect(() => {
    if (invoiceDetails.TotalItemsValue) {
      invoiceCalc();
    }
  }, [
    invoiceCalc,
    productItems,
    invoiceDetails.otherCharges,
    invoiceDetails.tax,
    invoiceDetails.deductions,
  ]);
  //=========================Logo UpLoad=======================
  // initial runs
  useEffect(() => {
    const storedImage = localStorage.getItem("uploadImg");
    if (storedImage) {
      setImagePreview(storedImage);
    }
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log("files data", file);

    if (file) {
      console.log("working");

      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Str = reader.result;
        setImagePreview(base64Str); //Display the image
        localStorage.setItem("uploadImg", base64Str); //store the img in loacl storage
      };
      reader.readAsDataURL(file);
    }
  };

  const handleWidthListner = (e) => {
    let targetValue = e.target.value;
    if (NaN(!targetValue)) {
      setImgwidth(targetValue);
    }
  };
  const handleCloseImg = () => {
    setImagePreview(null);
    localStorage.setItem("uploadImg", "");
  };
  //================Input Box===================
  const addInputBox = () => {
    let typeValue = prompt("Enter the type as text/number/date etc");
    return (
      <div className="f-row f-j-b">
        <label className="content-label" contentEditable>
          Date
        </label>
        <input type={typeValue} className=""></input>
        <span className="text-info">
          {/* <CiCirclePlus onClick={addInputBox} /> */}
        </span>
      </div>
    );
  };
  // ===============Input update================

  const handleUpdateListner = (e) => {
    const { name, value } = e.target;
    setCurrentItems((prev) => ({ ...prev, [name]: value }));
    // console.log("value update", name,value);
  };
  const handleChooseData =()=>{
    console.log("working");

    console.log("checking",invoiceItems,invoiceDetails.invoiceNo);
    
      if(invoiceItems.includes(invoiceDetails.invoiceNo)){
        setGetInvoice(
          prompt("Data already There if you need enter'Yes'"))
      };
  }
  const handleUpdateInvoiceListner = (e) => {
    const { name, value } = e.target;
    if ("billFrom" === e.target.id) {
      setBusinessDetails((prev) => ({ ...prev, [name]: value }));
    } else {
      setInvoiceDetails((prev) => ({ ...prev, [name]: value }));
    }

    console.log("Invoice =>", name, value);
  };
  invoiceCalc();

  // console.log("invoice value :", invoiceDetails);
  // console.log("Business details :", businessDetails);

  const handleAddListner = (e) => {
    if (currentItem.desc && currentItem.quantity && currentItem.price) {
      setProductItems([...productItems, currentItem]);
      // reset the value
      setCurrentItems({ ...itemData });
      setInvoiceDetails((prev) => ({
        ...prev,
        ["TotalItemsValue"]: productItems.reduce(
          (acc, value) => (acc += value.amount),
          0
        ),
      }));
    } else {
      alert("please add some values");
    }
  };
  // ===============Input Edit================
  const handleEditLlister = (e) => {
    console.log("editable");
  };
  // console.log("productItems",productItems);

  // ===============Input Remove================
  const handleRemoveListner = (index) => {
    const updateItems = productItems.filter((_, i) => {
      return i !== index;
    });
    console.log(updateItems);

    setProductItems(updateItems);
  };
  // ===============Print================
  const printListner = () => {
    navigate("/fincord/printInvoice",{state:{invoiceDetails}});
    // setBusinessDetails((prev) => [...prev,["invoiceNo"].push(invoiceDetails.invoiceNo)]);
    localStorage.setItem("invoiceData", JSON.stringify(invoiceItems));
    localStorage.setItem("businessData", JSON.stringify(businessDetails));
    console.log("working");
    };

  const generateInvoiceListner = () => {
    if(invoiceDetails.invoiceNo){
    if (businessDetails.invoiceNo.includes(invoiceDetails.invoiceNo)) {
      alert("Invoice Already there ");
    } else {
      setInvoiceItems([...(invoiceItems || []), invoiceDetails]);
      setBusinessDetails((prev) => ({
        ...(prev || {}), // spread the previous invoice object
        invoiceNo: [...(prev.invoiceNo || []), invoiceDetails.invoiceNo],
      }));
      setShowPrint(true);
    }
  }else{
    alert("No Invoice Number")
  }
  };
  return (
    <>
      <div className=" container f-col f-gap-1 main-container">
        <nav className="f-row f-j-b mt-1 nav-container">
          <h1>
            Fincords <span className="head-content">Invoice</span>
          </h1>
          <div className="nav-menu">
            <ul className="f-row f-gap-1">
              <li>
                <Link to={Routing.path.guest.guest} className="btn btn-light">
                  Home
                </Link>
              </li>
              <li>
                <button className="btn btn-light active">Invoice Gen</button>
              </li>
              <li>
                <Link
                  to={Routing.path.guest.invoiceDetails}
                  className="btn btn-light"
                >
                  Invoice Details
                </Link>
              </li>
              <li>
                <button className="btn btn-light">Contact Us</button>
              </li>
            </ul>
          </div>
          <div className="nav-users">
            <ul className="f-row f-gap-1">
              <li>
                <Link
                  to={Routing.path.guest.register}
                  className="btn btn-primary"
                >
                  Register
                </Link>
              </li>
              <li>
                <Link to={Routing.path.guest.login} className="btn btn-primary">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <header className="f-col">
          <h1 contentEditable>INVOICE</h1>
          <div
            className="img-container"
            style={{ border: "1px solid #333", width: `${imgWidth}px` }}
          >
            <div className="">
              {!imagePreview && (
                <div>
                  <input
                    type="text"
                    placeholder="width"
                    size={3}
                    maxLength={3}
                    onChange={handleWidthListner}
                  ></input>
                  <br></br>
                  <label>Upload Logo</label>
                  <input
                    type="file"
                    accept="image/*"
                    placeholder="upload Logo"
                    style={{ border: "none" }}
                    onChange={handleImageChange}
                  ></input>
                  <label></label>
                </div>
              )}
              {imagePreview && (
                <div className="f-col">
                  <span className="" onClick={handleCloseImg}>
                    Close
                  </span>
                  <img
                    src={imagePreview}
                    alt="Logo"
                    style={{ width: `${imgWidth * 0.5}px`, height: "auto" }}
                  ></img>
                </div>
              )}
            </div>
          </div>
        </header>
        {/* Details of Owner and customer */}
        <section className="input-container">
          <div className="row mb-4">
            <div className="col col-sm-4 mt-2">
              <div className="f-col">
                <label htmlFor="billFrom">Bill From</label>
                <input
                  type="text"
                  placeholder="Business Name"
                  id="billFrom"
                  value={businessDetails.businessName}
                  name="businessName"
                  onChange={handleUpdateInvoiceListner}
                ></input>
                <textarea
                  style={{
                    minWidth: "200px",
                    maxWidth: "500px",
                    minHeight: "90px",
                  }}
                  name="businessDetail"
                  value={businessDetails.businessDetail}
                  id="billFrom"
                  row={4}
                  cols={150}
                  onChange={handleUpdateInvoiceListner}
                  placeholder="Address & contact details"
                  resize={false}
                  prefix="Bill To:"
                ></textarea>
              </div>
            </div>
            <div className="col col-sm-4 mt-2">
              <div className="f-col">
                <label htmlFor="billFrom">Bill To</label>
                <input
                  type="text"
                  placeholder="Business Name"
                  name="customerName"
                  value={invoiceDetails.customerName}
                  onChange={handleUpdateInvoiceListner}
                ></input>
                <textarea
                  style={{
                    minWidth: "200px",
                    maxWidth: "500px",
                    minHeight: "90px",
                  }}
                  name="billTo"
                  row={4}
                  cols={150}
                  value={invoiceDetails.billTo}
                  onChange={handleUpdateInvoiceListner}
                  // value={invoiceItems.billTo}
                  placeholder="Address & contact details"
                  resize={false}
                  prefix="Bill To:"
                ></textarea>
                {/* <input type="number" placeholder="Mobile No" prefix="91"></input> */}
                {/* <input type="email" placeholder="Email Id"></input> */}
              </div>
            </div>
            {/* Invoice No, Date */}
            <div className="col-sm-4 mt-4 invoice-details">
              <div className="f-row f-j-b">
                <label className="content-label" contentEditable>
                  Invoice No
                </label>
                <input
                  type="text"
                  className=""
                  name="invoiceNo"
                  value={invoiceDetails.invoiceNo}
                  onChange={handleUpdateInvoiceListner}
                  onBlur={handleChooseData}
                ></input>
              </div>
              <div className="f-row f-j-b">
                <label className="content-label" contentEditable>
                  Date
                </label>
                <input
                  type="date"
                  className=""
                  name="invDate"
                  value={invoiceDetails.invDate}
                  onChange={handleUpdateInvoiceListner}
                ></input>
                {/* <span className="text-info">
                <CiCirclePlus onClick={addInputBox} />
              </span> */}
              </div>
              <div className="f-row f-j-b">
                <label className="content-label" contentEditable>
                  Tax No
                </label>
                <input
                  type="text"
                  className=""
                  name="taxNo"
                  value={invoiceDetails.taxNo}
                  onChange={handleUpdateInvoiceListner}
                ></input>
              </div>
              <div className="f-row f-j-b">
                <label className="content-label" contentEditable>
                  Due date
                </label>
                <input
                  type="date"
                  className=""
                  name="duedate"
                  value={invoiceDetails.duedate}
                  onChange={handleUpdateInvoiceListner}
                ></input>
              </div>
            </div>
          </div>
        </section>
        {/* Billing Items */}
        <article className="table-item-container">
          <div className="table-container f-col">
            <table className="table-items">
              <thead>
                <th className="th-action">Sr.no</th>
                <th className="f-grow desc-full t-th-content" contentEditable>
                  Items
                </th>
                <th className="th-content" contentEditable>
                  Quantity
                </th>
                <th className="th-content" contentEditable>
                  Price
                </th>
                <th className="th-content" contentEditable>
                  Amount
                </th>
                <th className="th-action" contentEditable></th>
              </thead>
              <tbody className="invoice-table-body">
                {productItems.map((value, index) => {
                  return (
                    <tr key={index}>
                      <td className="">{index + 1}</td>
                      <td
                        className="f-grow"
                        contentEditable
                        onChange={() => handleEditLlister(index, kV[0])}
                      >
                        {value.desc}
                      </td>
                      <td
                        className=""
                        contentEditable
                        onChange={() => handleEditLlister(index, kV[1])}
                      >
                        {value.quantity}
                      </td>
                      <td
                        className=""
                        contentEditable
                        onChange={() => handleEditLlister(index, kV[2])}
                      >
                        {value.price}
                      </td>
                      <td className="" contentEditable>
                        {value.amount}
                      </td>
                      <td className="" contentEditable>
                        <button onClick={() => handleRemoveListner(index)}>
                          #
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot className="mt-3"></tfoot>
            </table>
          </div>
          <div className="mt-2">
            <span className="">
              Total Items:<b>{productItems.length}</b>
            </span>{" "}
            &nbsp;
            <span>
              Total Value:
              <b>{invoiceDetails.TotalItemsValue}</b>
            </span>
          </div>
          <div className="mt-5">
            <h4>Enter details:</h4>
            <div className="table-container f-row">
              <input
                type="text"
                name={kV[0]}
                value={currentItem.desc}
                onChange={handleUpdateListner}
                placeholder="Description"
              ></input>
              <input
                type="text"
                name={kV[1]}
                value={currentItem.quantity}
                onChange={handleUpdateListner}
                placeholder="Service or Quantity"
              ></input>
              <input
                type="text"
                name={kV[2]}
                value={currentItem.price}
                onChange={handleUpdateListner}
                placeholder="Price"
              ></input>
              <input
                type="text"
                name={kV[3]}
                value={
                  (currentItem.amount =
                    currentItem.quantity * currentItem.price)
                }
                onChange={handleUpdateListner}
                placeholder="ItemValue"
              ></input>
            </div>
            <button
              type="button"
              className=" mt-2 btn btn-primary"
              onClick={handleAddListner}
            >
              Add
            </button>
          </div>
        </article>
        <section className="f-row f-j-b inv-amt-details">
          <div className="right-side">
            <h1>Invoice calc:</h1>
          </div>
          <div className="">
            <div className="value-enter">
              <label htmlFor="">Total Items Value :</label>
              <strong className="form-control">
                {invoiceDetails.TotalItemsValue}
              </strong>
            </div>
            {
              <div className="value-enter">
                <label htmlFor="" contentEditable>
                  OtherCharges :
                </label>
                <input
                  type="number"
                  className="form-control"
                  name={"otherCharges"}
                  onChange={handleUpdateInvoiceListner}
                  placeholder=""
                ></input>
              </div>
            }
            {
              <div className="value-enter">
                <label htmlFor="">Tax :</label>
                <input
                  type="number"
                  className="form-control"
                  name={"tax"}
                  onChange={handleUpdateInvoiceListner}
                  placeholder=""
                ></input>
              </div>
            }
            {
              <div className="value-enter">
                <label htmlFor="">Deductions :</label>
                <input
                  type="number"
                  className="form-control"
                  name={"deductions"}
                  onChange={handleUpdateInvoiceListner}
                  placeholder=""
                ></input>
              </div>
            }
            <div className="f-grow">
              <h5>Value :</h5>
              <strong className="form-control">
                {invoiceDetails.invoiceValue}
              </strong>
            </div>
          </div>
        </section>
        <footer>
          <h1>Print and chooseTemp</h1>
          <button className="btn btn-primary mt-2" onClick={generateInvoiceListner}>
            Generate Invoice
          </button>
          <br></br>
          <br></br>
          {showPrint && (
            <button className="btn btn-primary" onClick={printListner}>
              Print
            </button>
          )}
        </footer>
      </div>
    </>
  );
};
export default GoodsInvoice;
