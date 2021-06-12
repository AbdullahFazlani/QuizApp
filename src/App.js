

import './App.css';
import React,{useState, useContext} from 'react'
import Menu  from './Components/menu'
import Quiz from './Components/quiz'
import End from './Components/end'

import {QuizContext} from "./helper/context";

function App() {
  const [gameState,setState]=useState("menu");
  const [score,setScore] = useState(0);
  return (
   <div className="App">
      {" "}
      <h1>Quiz App</h1  >
      <QuizContext.Provider value={{gameState,setState,score,setScore}}>
      {gameState == "menu" && <Menu/>}
      {gameState == "quiz" && <Quiz/>}
      {gameState == "end" && <End/>}
      </QuizContext.Provider> 
   </div>
  );
}

export default App;
