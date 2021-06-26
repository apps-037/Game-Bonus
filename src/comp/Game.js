import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

const Game = (
    {score,myChoice, setScore}
) => {

  const [house, setHouse] = useState("");
  const [playerWin, setPlayerWin] = useState("");

  const newHousePick=()=>{
     const ramdom = Math.floor(Math.random() * 100);

    if (ramdom >= 0 && ramdom <= 19) {
      setHouse("paper");
    } else if (ramdom >= 20 && ramdom <= 39) {
      setHouse("scissors");
    } else if (ramdom >= 40 && ramdom <= 59) {
      setHouse("rock");
    } else if (ramdom >= 60 && ramdom <= 79) {
      setHouse("lizard");
    } else {
      setHouse("spock");
    }
     console.log(ramdom);
      // const choices=["rock","paper","scissors","lizard","spock"];
      // setHouse(choices[Math.floor(Math.random()*3)]);
    
  }
  useEffect(() => {
     newHousePick();
  }, [])

  const Result = ()=>{
    if (myChoice === "paper" && house === "rock") {
        setPlayerWin("YOU WIN");
        setScore(score+1);
      } else if (myChoice === "paper" && house === "spock") {
        setPlayerWin("YOU WIN");
        setScore(score+1);
      } else if (myChoice === "spock" && house === "scissors") {
        setPlayerWin("YOU WIN");
        setScore(score+1);
      } else if (myChoice === "spock" && house === "rock") {
        setPlayerWin("YOU WIN");
        setScore(score+1);
      } else if (myChoice === "rock" && house === "scissors") {
        setPlayerWin("YOU WIN");
        setScore(score+1);
      } else if (myChoice === "rock" && house === "lizard") {
        setPlayerWin("YOU WIN");
        setScore(score+1);
      } else if (myChoice === "lizard" && house === "spock") {
        setPlayerWin("YOU WIN");
        setScore(score+1);
      } else if (myChoice === "lizard" && house === "paper") {
        setPlayerWin("YOU WIN");
        setScore(score+1);
      } else if (myChoice === "scissors" && house === "paper") {
        setPlayerWin("YOU WIN");
        setScore(score+1);
      } else if (myChoice === "scissors" && house === "lizard") {
        setPlayerWin("YOU WIN");
        setScore(score+1);
      } else if (myChoice === "paper" && house === "scissors") {
        setPlayerWin("YOU LOSE");
        setScore(score-1);
      } else if (myChoice === "paper" && house === "lizard") {
        setPlayerWin("YOU LOSE");
        setScore(score-1);
      } else if (myChoice === "scissors" && house === "rock") {
        setPlayerWin("YOU LOSE");
        setScore(score-1);
      } else if (myChoice === "scissors" && house === "spock") {
        setPlayerWin("YOU LOSE");
        setScore(score-1);
      } else if (myChoice === "lizard" && house === "scissors") {
        setPlayerWin("YOU LOSE");
        setScore(score-1);
      } else if (myChoice === "lizard" && house === "rock") {
        setPlayerWin("YOU LOSE");
        setScore(score-1);
      } else if (myChoice === "rock" && house === "paper") {
        setPlayerWin("YOU LOSE");
        setScore(score-1);
      } else if (myChoice === "rock" && house === "spock") {
        setPlayerWin("YOU LOSE");
        setScore(score-1);
      } else if (myChoice === "spock" && house === "paper") {
        setPlayerWin("YOU LOSE");
        setScore(score-1);
      } else if (myChoice === "spock" && house === "lizard") {
        setPlayerWin("YOU LOSE");
        setScore(score-1);
      } else {
        setPlayerWin("DRAW");
      }


 
  }

  useEffect(() => {
    Result();
 }, [house])

    return (
        <div className="game">
            {/* my choice:{myChoice} <br/>
            House choice:{house}

            Result: 
            {playerWin=="YOU WIN" && <h2>you win</h2>}
            {playerWin=="YOU LOSE" && <h2>you lose</h2>}
            {playerWin=="DRAW" && <h2>draw</h2>}

            <Link to="/" onClick={()=>setHouse()}>
                Play again
            </Link> */}

            <div className="game__you">
              <span className="text">Your Choice</span>
          <div className={`icon icon--${myChoice} ${playerWin=="YOU WIN"?`icon icon--${myChoice}--winner`:"" }`}></div>
            
            </div>
            {playerWin=="YOU WIN" &&   <div className="game__play">
          
              <span className="text">YOU WIN</span>
              <Link to="/" className="play-again" onClick={()=> setHouse()}>
                Play Again
              </Link>

            </div>}
            {playerWin=="YOU LOSE" &&   <div className="game__play">
          
              <span className="text">YOU LOSE</span>
              <Link to="/" className="play-again" onClick={()=> setHouse()}>
                Play Again
              </Link>

            </div>}
            {playerWin=="DRAW" &&   <div className="game__play">
         
              <span className="text">DRAW</span>
              <Link to="/" className="play-again" onClick={()=> setHouse()}>
                Play Again
              </Link>

            </div>}

            <div className="game__house">
              <span className="text">Opponent's Choice</span>
          <div className={`icon icon--${house} ${playerWin=="YOU LOSE"?`icon icon--${house}--winner`:"" }`}></div>
            
            </div>

          

        </div>
    )
}

export default Game
