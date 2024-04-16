// import exp from "constants";
import React, { useState } from 'react';
// import { Routes, Route } from 'react-router';
// import Routing from '../../../../Routes/Routing;'

const RestaurantServices = () => {
    // const [classname, setClassName] = useState({})
    // const [initialValue, setInitialValue] = useState(0)
    const [categoryValue, setCategoyValue] = useState([]);
    const TableRow = [
        { itemId: 1, itemName: "Chicken Noodles", categoryId: 1, category: "Noodles", price: 220 },
        { itemId: 2, itemName: "Veg Noodles", categoryId: 1, category: "Noodles", price: 220 },
        { itemId: 3, itemName: "Chicken Rice", categoryId: 2, category: "Rice", price: 220 },
        { itemId: 4, itemName: "Veg Rice", categoryId: 2, category: "Rice", price: 220 },
        { itemId: 5, itemName: "Chilly Chicken ", categoryId: 3, category: "Straters", price: 220 },
        { itemId: 5, itemName: "Rosted Chicken ", categoryId: 3, category: "Straters", price: 220 },
    ]
    const viewHandler = () => {
        alert("working")
        setCategoyValue("Rice")
        //   
    }
    console.log("table data", TableRow);
    return (
        <>

            <h1>Restaurant services</h1>
            {/* <Routes>
                <Route path={Routing.path.}></Route>
            </Routes> */}
            <div className='container restaurant-activity'>
                <div className='listView'>
                    <h1>Menu List</h1>
                    <button onClick={viewHandler} className={`menu-items`}>{`Food :${categoryValue}`}</button>

                </div>

            </div>
        </>
    )
}
export default RestaurantServices;