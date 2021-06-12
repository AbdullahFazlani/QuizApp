import React, { useContext } from 'react'
import { QuizContext } from '../helper/context'
import '../App.css'

export default function menu() {
    const { gameState, setState } = useContext(QuizContext);
    return (
        <div className="Menu">
            {" "}
            <button
                onClick={() => 
                    { setState("quiz")
                 }}
            >
                Start Quiz
             </button>
        </div>
    )
}
