import React, { useState } from "react";
import "./financialanalysis.css"
const secretNumbber = Math.floor(Math.random() * 10) + 1;
let count = 0;
let result = "";
function GameGuessNumber() {
    const [guessValue, setGuessValue] = useState("")

    const gameValueHandler = (e) => {
        const value = e.target.value;
        setGuessValue((value))
    }
    
    return (
        <div className="game-container container ">
            <div className="card">
                <div className="card-header">
                    <label>Guess the number 1 to 10</label></div>
                <div className="card-body">

                    <input type="number" id="guess" name="guess" onChange={gameValueHandler} value={guessValue}></input>
                </div>
                <div className="card-footer">
                    {Result()}
                </div>
            </div>
        </div>
    )
}
function Result() {
    return (
        <>
            <div>
                You Gussed {result}
            </div>
        </>
    )
}

const FinancialAnalysis = () => {

    const [gameClick, setGameClick] = useState({ name: "Game start", toggle: false })
    const gameBtnHandler = () => {
        let toggleStatus = gameClick.toggle
        if (toggleStatus) {
            toggleStatus = false;
        } else {
            toggleStatus = true;
        }
        // setGameClick({ name: (toggleStatus) ? "Game End" : "Game start", toggle:toggleStatus})
        // console.log("ToggleStatus", toggleStatus);
    }
    return (
        <>
            <h1>Financial Analysis</h1>
            <button type="button" onClick={gameBtnHandler}>{gameClick.name}</button>
            {(gameClick.toggle) || GameGuessNumber()}
        </>
    )
}
export default FinancialAnalysis;