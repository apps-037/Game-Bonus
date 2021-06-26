
import React,{useState} from "react";
import Header from './comp/Header';
import Footer from './comp/Footer';
import Play from './comp/Play';
import Game from './comp/Game';
import Modal from './comp/Modal';
import {Switch, Route} from 'react-router-dom';


function App() {

  const [myChoice, setMyChoice] = useState("");               //one state is to choose r p or s
  const [score, setScore] = useState(0);             //this state is to store the score

  return (
    <>
    <div className="container">
      <Header score={score} />
      <Switch> 
        <Route exact path ="/" >
          <Play setMyChoice={setMyChoice} />
        </Route>
        <Route exact path ="/game" >
          <Game myChoice={myChoice} score={score} setScore={setScore}  />
        </Route>
      </Switch>
    </div>
    <Footer/>
    </>
  )
}

export default App

