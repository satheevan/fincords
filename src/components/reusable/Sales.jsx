import React from "react";
import './reusable css/sales.css'

const Sales = (props) => {
    console.log(props.items);
    return (
        <div className="table-container">
            <table className="sales-table">
                <thead>
                    <th className="col">Name</th>
                    <th className="col">Category</th>
                    <th className="col">Amount</th>
                </thead>
                <tbody>

                    <tr>
                        <td className="colvalue">Pack of Plums </td>
                        <td className="colvalue">Cake</td>
                        <td className="colvalue">300</td>
                    </tr>
                </tbody>

            </table>
        </div >
    )
}

export default Sales;