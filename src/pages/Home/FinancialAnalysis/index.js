import React, { useState } from "react";
import "./financialanalysis.css"

import GameGuessNumber from './games'

import OrderDeliveryCostOptimization from "./OrderAndDelivery";

//Main component
const FinancialAnalysis = () => {

    const [gameClick, setGameClick] = useState({ name: "Game start", toggle: false })
    const gameBtnHandler = () => {

        //  let messageToggle ="" 
        if (gameClick.toggle) {
            setGameClick({ ...gameClick, toggle: false, name: "Game Start" })
        } else {
            setGameClick({ ...gameClick, toggle: true, name: "Game End" })
        }
        console.log("working");
    }
    return (
        <>
            <h1>Financial Analysis</h1>
            <div className="games-container container">
                <button type="submit" onClick={gameBtnHandler}>{gameClick.name}</button>
                <span> Just Normal game</span>
                {(gameClick.toggle) && <GameGuessNumber gameClick={gameClick.toggle} />}
            </div>
            <div>
                <OrderDeliveryCostOptimization/>
            </div>
        </>
    )
}
export default FinancialAnalysis;