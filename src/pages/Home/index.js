import React from "react";
// import { Link } from "react-router-dom";
import "./home.css";
import { useState, useEffect } from "react";

//data from JS
// import {Routing} from "../../routes/Routing";
import { sourceData } from "../../utils/dynamicdata/sourceData";
import { CustomCard } from "../../components/shared/customCard";
// import { sourceData } from "../../utils/dynamicdata/sourceData";

const Home = () => {
  // Routing
  // const routeHome = Routing.path.routeHome
  // const routing = Routing || alert("products data not  getting from home of source data")

  const productsList =
    sourceData.home ||
    alert(() => "products data not  getting from home of source data");

  //useState
  const [count, setCount] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // add EventListner when component mount
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // clean up eventLlistner
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //Methods
  const countClickHandler = () => {
    setCount((prev) => prev + 1);
  };
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  return (
    <div className="main-container">
      
      <div className="f-row h-100">
        <aside className="w-nav">
          <header className="">
            {/* why, if will give row it shows down */}
            <spa>^</spa>
            <strong>ravi ch-retteri</strong>
          </header>
          <nav className="col menu-container">
            <ul className="menu-list">
              {productsList.products.map((product, index) => {
                return (
                  <li className="row">
                    <a className="" href={product.path}>
                      <span>{product.id}</span>
                      <strong className="product-title navHide">{product.title}</strong>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>
        <main className="f-col w-bal f-grow">
          <div>
            <input type="search" size={24} placeholder="Search"></input>
          </div>
          <div className="f-col">
            <div className="f-row f-j-b m-top-1">
              <strong>DashBoard</strong>
              <input type="date" />
            </div>
            <div className="f-row f-j-c col-sm-12 f-gap-1 f-wrap">
              
              {
                productsList.menuItems.map((menu,index)=>{
                    return(
                        <CustomCard key={index} className={"dashboard-cards"}>
                <div className="f-col card-container">
                  <div className="icon-card-content">{menu.icon}</div>
                  <label className="label-card-content">{menu.labelName}</label>
                  <strong className="amount-card-content">{menu.Amount}</strong>
                </div>
              </CustomCard> 
                    )
                })
              }
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
