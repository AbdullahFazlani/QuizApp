import React, { useState,useContext } from 'react'
import { Questions } from "../helper/question";
import { QuizContext } from '../helper/context'

export default function quiz()
{
    const { score,setScore,setGameState} = useContext(QuizContext);
    const [currQuestion, setCurrQuestion] = useState(0);
    const [option,setOption]=useState("")
    const nextQuestion=()=>{
        if(Questions[currQuestion].answer == option)
        {
            setScore(score+1); 
        } 
        alert(score);
        setCurrQuestion(currQuestion+1);
    }
    const finishQuiz=() =>{
        if(Questions[currQuestion].answer == option)
        {
            setScore(score+1); 
        } 
        setGameState("ends")
    }
    return(
        <div className="Quiz">
            <h1>{Questions[currQuestion].prompt}</h1>
            <div className="options">
                <button onClick={() => setOption("A")}>{Questions[currQuestion].optionA}</button>
                <button onClick={() => setOption("B")}>{Questions[currQuestion].optionB}</button>
                <button onClick={() => setOption("C")}>{Questions[currQuestion].optionC}</button>
                <button onClick={() => setOption("D")}>{Questions[currQuestion].optionD}</button>
            </div>

{currQuestion == Questions.length -1 ? (
   <button onClick={finishQuiz}>Finish Quiz</button> 
):
(
    <button onClick={nextQuestion}> neXT QUESTION</button>
)}

       
        </div>
    )
}
