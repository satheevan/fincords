import React, { useState } from "react";
import './css/main.css'

//----------function reusability-------------------
import { Activity } from './useFunctions/activity.js'


//Messages
export const messages = {
    hello: Activity.message.hello(),
    success: Activity.message.success(),
}
//Calulations
export const math = {
    addition: (a, b) => Activity.calculation.addition(a, b),
    sub: (a, b) => Activity.calculation.subtraction(a, b),
    multiple: (a, b) => Activity.calculation.multiple(a, b),
    division: (a, b) => Activity.calculation.division(a, b)
}
// const employeeTableInfo = {
//     cols: [
//         { label: 'S.no', key: 's' },
//         { label: 'Name', key: 'name' },
//         { label: 'Role', key: 'role' },
//         { label: 'Status', key: 'status' }
//     ]
// }
//---------other components------------------------
function TableHead(props) {
    return Activity.tablelist.TableHead(props.items)
}
function TableRows(props) {
    return Activity.tablelist.TableRow(props.items)

}

function DataTable(props) {
    if (!props.items || !props.items.length) {
        return <p>{props.emptyMsg}</p>;
    }
    return (
        <table className={props.className}>
            <thead>
                <TableHead items={props.items[0]} />
            </thead>
            <tbody>
                {props.items.map((item) => {

                    return <TableRows items={item} />
                })}
            </tbody>
        </table>
    )
}

const employeeData = [
    { s: 1, name: "ramu1", role: "software", status: "working" },
    { s: 2, name: "ramu2", role: "software", status: "working" },
    { s: 3, name: "ramu3", role: "testing", status: "working" },
    { s: 4, name: "ramu4", role: "software", status: "working" },
]
//main components 
function Main(props) {

    function shoot() {
        alert(messages.success)
    }
    const shooterpara = (a, b) => {
        console.log(a, "the type of the event", b)
        return alert(b.target.innerHTML)
    }
    //usestate Vs normal functions
    const [employee, setEmployee] = useState(employeeData);

    // const [coutn]
    const addrow = () => {
        let row = { s: 4, name: "ramu4", shift: "morning", timetaken: "40" };
        setEmployee((preEmpdata) => {
            return [...preEmpdata, row]
        })
        console.log(employeeData);
    }
    const worklist = [
        { s: 1, name: "ramu1", shift: "morning", timetaken: "48" },
        { s: 2, name: "ramu2", shift: "evening", timetaken: "40" },
        { s: 3, name: "ramu3", shift: "night", timetaken: "41" },
        { s: 4, name: "ramu4", shift: "morning", timetaken: "40" },
    ]
    return (
        <div className="main-container">
            <h1 className="mh1">{props.mainContent}</h1>
            <p>{props.masterValue}</p>
            <scan>No parameter passed</scan>
            <button onClick={shoot}>submit</button>
            <scan>Parameter passed</scan>
            {/* <button onClick={() => shootpara("goal")}>with parameter</button> */}
            <button onClick={(e) => shooterpara('yes', e)}>parameter shooter</button>
            <p>message value passed from Activity js= <q>{messages.success}</q></p>
            <span>sub:</span>{math.multiple(12, 3)}
            <div className="table-container">
                <DataTable items={employee} className="employee-table" emptyMsg="There are no employee records" />
                <p>there are around {employee.length} employees</p>
                <DataTable items={worklist} className="worklist-table" emptyMsg="There are no Shift Records" />
                <button onClick={addrow}>Add Employee</button>
                {/* <table className="worklist-table">
                    <thead>
                        <th>s.no</th>
                        <th>Name</th>
                        <th>shift</th>
                        <th>time taken</th>
                    </thead>
                    <tbody>
                        {worklist.map((items, index) => {
                            return <tr>
                                <td key={index}>{items.s}</td>
                                <td key={index}>{items.name}</td>
                                <td key={index}>{items.shift}</td>
                                <td key={index}>{items.timetaken}</td>
                            </tr>
                        })}
                    </tbody>
                </table> */}
            </div>
            <div></div>
        </div >
    )
}
export default Main