import React from 'react'
import { Link } from "react-router-dom";
import Pentagon from "../img/bg-pentagon.svg";

const Play = (

    {setMyChoice }
) => {

    const setChoice=(e)=>{
        setMyChoice(e.target.dataset.id);
    } 


    return (
        <div className="play">
            <img src={Pentagon} alt="" className="pentagon" />
            <div className="items">
            <Link to="/game">
                <div data-id="paper" onClick={setChoice} className="icon icon--paper">
                </div>
            </Link>
            <Link to="/game">
                <div data-id="scissors" onClick={setChoice} className="icon icon--scissors">
                </div>
            </Link>
            <Link to="/game">
                <div data-id="rock" onClick={setChoice} className="icon icon--rock">
                </div>
            </Link>
            <Link to="/game">
                <div data-id="lizard" onClick={setChoice} className="icon icon--lizard">
                </div>
            </Link>
            <Link to="/game">
                <div data-id="spock" onClick={setChoice} className="icon icon--spock">
                </div>
            </Link>
            </div>
        </div>
     

    )
}

export default Play
