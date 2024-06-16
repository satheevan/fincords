// import exp from "constants";
import React, { useEffect, useState } from "react";
// import { Routes, Route } from 'react-router';
// import Routing from '../../../../Routes/Routing;'

const RestaurantServices = () => {
  // const [classname, setClassName] = useState({})
  // const [initialValue, setInitialValue] = useState(0)
  const [categoryRows, setCategoyRows] = useState({});
  const data = {
    "1": {
        name: "Noodles",
        items: [
            { id: 1, name: "Chicken Noodles"},
            { id: 2, name: "Chicken Noodles"},
        ]
    },
    "2": {
        name: "Rice",
        items: [
            { id: 1, name: "Chicken Rice"},
            { id: 2, name: "Veg Rice"},
        ]
    },
    "3": {
        name: "Starters",
        items: [
            { id: 1, name: "Chilli Chicken"},
            { id: 2, name: "Roasted Chicken"},
        ]
    }
  }
  const TableRow = [
    {
      itemId: 1,
      itemName: "Chicken Noodles",
      categoryId: 1,
      category: "Noodles",
      price: 220,
    },
    {
      itemId: 2,
      itemName: "Veg Noodles",
      categoryId: 1,
      category: "Noodles",
      price: 220,
    },
    {
      itemId: 3,
      itemName: "Chicken Rice",
      categoryId: 2,
      category: "Rice",
      price: 220,
    },
    {
      itemId: 4,
      itemName: "Veg Rice",
      categoryId: 2,
      category: "Rice",
      price: 220,
    },
    {
      itemId: 5,
      itemName: "Chilly Chicken ",
      categoryId: 3,
      category: "Straters",
      price: 220,
    },
    {
      itemId: 6,
      itemName: "Rosted Chicken ",
      categoryId: 3,
      category: "Straters",
      price: 220,
    },
  ];
  const loadCategory = () => {
    let rows = {}
    TableRow.forEach(tRow => {
        if (rows[tRow.categoryId]) {
            rows[tRow.categoryId].count += 1
        } else {
            rows[tRow.categoryId] = {
                name: tRow.category,
                items:TableRow.filter((value)=>{
                    return (
                        value.categoryId === rows[tRow.categoryId]
                    )
                    console.log(rows[tRow.categoryId].items);
                })
            }
        }
    })
    setCategoyRows(rows)
  }
  useEffect(() => {
    loadCategory()
  },[])
  const categoryHandler = () =>{
    alert("working cart")
  }  
  return (
    <>
      <div className="restaurant-wrapper container">
        <header className="f-col f-align-center">
          <h1 className="">Food items</h1>
          <p>
            g m hg,vfkmnmji,km i,hgjmufu,k m, jk,j, u,kmjuk,ukmu,uk
            j,jmjjuukj,ugl,j,k j,kjmjm
          </p>
        </header>
        <div className="f-row">
          {Object.keys(categoryRows).map((catId, index) => {
            return (
              <div key={index} className="f-col f-align-center" onClick={categoryHandler}>
                <span>{catId}</span>
                <strong>{data[catId].name}</strong>
                <p>Delicious and favourable food</p>
                <div className="f-row">{data[catId].items.length}</div>
              </div>
            );
          })}
        </div>
        <div className="f-row">
          <div className="f-col">
            <span>&</span>
            <strong>bread</strong>
            <p>hjdjhkjskjdlskldk;sld;skd;</p>
            <div className="f-row">$ 87</div>
          </div>
          <div className="f-col">
            <span>&</span>
            <strong>bread</strong>
            <p>hjdjhkjskjdlskldk;sld;skd;</p>
            <div className="f-row">$ 87</div>
          </div>
          <div className="f-col">
            <span>&</span>
            <strong>bread</strong>
            <p>hjdjhkjskjdlskldk;sld;skd;</p>
            <div className="f-row">$ 87</div>
          </div>
          <div className="f-col">
            <span>&</span>
            <strong>bread</strong>
            <p>hjdjhkjskjdlskldk;sld;skd;</p>
            <div className="f-row">$ 87</div>
          </div>
        </div>
        <div> kjkgjkfjgkkfjkjj</div>
      </div>
    </>
  );
};
export default RestaurantServices;
