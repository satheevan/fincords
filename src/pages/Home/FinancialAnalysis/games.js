import React,{useState} from 'react'

const secretnum = Math.floor(Math.random()*10)+1

function GameGuessNumber(gameClick) {
    const [guessValue, setGuessValue] = useState("")
    const [gameMessage, setGameMessage] = useState("")

    const gameValueHandler = (e) => {
        const value = e.target.value;
        if(value < 11){
        setGuessValue((value))
        }else{
            setGameMessage("Enter amoung 1 to 10");
        }
        setTimeout(() => {
            setGameMessage("");
        },2000);

    }
    
    return (
        <div className="game-container container ">
            <div className="card">
                <div className="card-header">
                    <label>Guess the number 1 to 10</label></div>
                <div className="card-body">
                    <input type="number" id="guess" minLength={1} name="guess" onChange={gameValueHandler} value={guessValue}></input>
                    <p>{gameMessage}</p>
                </div>
                <div className="card-footer">
                    <Result guesNumber ={guessValue} gameClick ={gameClick}/>
                </div>
            </div>
        </div>
    )
}
//result componant
function Result(guessNumber,gameClick) {
    const [result,setResult] = useState("");
    const [count,setCount] = useState(0);
    const gameSubmitHandler =()=>{
        

        if(count <3){
            if(secretnum === Number(guessNumber.guesNumber)){
                setCount(4);
                setResult("wow is correct")
            } else if(secretnum < guessNumber.guesNumber){
                setResult("Greaterthan value")
            }else if(secretnum > guessNumber.guesNumber){
                setResult("Lessthan value")
            }else{
                setResult("Set a correct number")
            }
            setCount(prev => prev+1);
            
        console.log("count add",count);
        }else{
            setResult("Only three chance is permitted or correct answer")
        }

        setTimeout(() => {
            setResult("");
        },1500);
    }
    console.log("@@@@=>",secretnum ,guessNumber,result);
    return (
        <>
            <div>
                <button type="button" onClick={gameSubmitHandler}>Submit</button>
                <span className='px-2'>You Gussed: {result}</span>
            </div>
        </>
    )
}

export default GameGuessNumber;