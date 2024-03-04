import React, {useState } from 'react'
import { CustomCard } from "../../../components/shared/customCard";
import CustomButton from '../../../components/shared/customButton';

function OrderDeliveryCostOptimization() {

    const [calc, setCalc] = useState({})
    const [resultdata, setResultdata] = useState({})

    function inputCalcHandler(e) {
        const value = e.target.value
        const name = e.target.name
        setCalc((calc) => {
            return { ...calc, [name]: value }
        })
    }

    const submitCalcHandler = (e) => {
        e.preventDefault()

        // console.log("data@@@=>",resultdata);
        setResultdata((resultdata) => { return { ...resultdata, ...calc } })
    }


    return (
        <>
            <div className="Order-delivery-cost-optimization-container mt-3 container">
                <CustomCard className="Order-delivery-cost-optimization-card container">
                    <div className="Order-delivery-cost-optimization-heading">
                        <h1>Order-Delivery Cost Optimization</h1>
                    </div>
                    <form>
                        <select>
                            <option value={1}>Ordering and Carring Cost</option>
                            <option value={2}>Delivery and Storage Cost</option>
                        </select>
                        <div className="container mt-2 row">
                            <h1>WithOut Discounting</h1>
                            <div className="col-sm-12 col-md-4 mx-2 col-lg-3">
                                <label htmlFor="annual" className="row">Annual Requirement :
                                    <input type="number" className="col-sm-12" name="annual" onChange={inputCalcHandler}></input>
                                </label>

                            </div>
                            {/* <div className="col-md-2 col-lg-4"></div> */}
                            <div className="col-sm-12 col-md-4 mx-2 col-lg-3">
                                <label className="row" htmlFor="order">Per Order Cost :
                                    <input type="number" className="col-sm-12" name="orderingCost" onChange={inputCalcHandler}></input>
                                </label>
                            </div>
                            <div className="col-sm-12 col-md-4 mx-2 col-lg-3">
                                <label className="row" htmlFor="order">Carring cost :
                                    <input type="number" className="col-sm-12" name="carringcost" onChange={inputCalcHandler} ></input>
                                </label>
                            </div>
                            <div className="col-sm-12 col-md-4 mx-2 col-lg-3">
                                <label className="row" htmlFor="order">Resourse Per Cost:
                                    <input type="number" className="col-sm-12" name="resourseCost" onChange={inputCalcHandler}></input>
                                </label>
                            </div>
                        </div>
                        <div className=''><CustomButton title={"Submit"} classNameBtn={"mt-2"} onClickHandler={submitCalcHandler} ></CustomButton></div>
                        {/* Result */}
                        <div className="container mt-2 row">
                            <Result data={resultdata} />
                        </div>
                    </form>
                </CustomCard>
            </div>
        </>
    )
}
function Result({ data = {}, ...props }) {

    const [resultValue, setResultvalue] = useState({})

    // useEffect((data) => {
        // const {annual,orderingCost,carringCost,resourseCost} = data;
        // let value1,value2,freqDays,freqMonth = 0;
        function result(){
        let value1,value2 =1;
        // const report ={}
        value1 = ((2 * data.annual * data.orderingCost) / (data.carringcost * data.resourseCost))
        value2 = Math.floor(Math.sqrt(value1))
        // freqDays = value2/365;
        // freqMonth = value2/12;
        console.log("optimizationValue", value1);
        //  setResultvalue((report)=>{return{...report,perOrder:value2,days:freqDays,month:freqMonth}});
        return value2
        }

    return (
        <>
            Result veiws
            { 
                <div className='result-order-delivery'>
                    <h1>RESULT : </h1>
                    <h1> <span>{(result()) || 0}</span> No of Resourse Per Order</h1>
                    {/* <h1> <span>{(resultValue.days) || 0}</span> Orders in frequent of days </h1> */}
                    {/* <h1> <span>{(resultValue.month) || 0}</span> Orders in frequent of month</h1> */}
                </div>
            }
        </>
    )
}


export default OrderDeliveryCostOptimization