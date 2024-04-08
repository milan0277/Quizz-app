import { useContext, useState } from "react"
import {question} from '../Helpers/Questionbank'
import { Quizzcontext } from "../Helpers/Context"
function QuizApp(){
    const {gstate,setgstate, score,setscore}=useContext(Quizzcontext)
    const [currentQ,setCurentQ]=useState(0)
    const [optionchosen,setoptionchosen]=useState('')
    const nQ=()=>{
        if(question[currentQ].answer==optionchosen){
            setscore(score+1)
            
           
            
        }
        setCurentQ(currentQ+1)
        
    }
    const finidhq=()=>{
        if(question[currentQ].answer==optionchosen){
            setscore(score+1)
            
           
            
        }
        setgstate('end')
    }
    return(
        <div className="quiz">
         
        <h1>{question[currentQ].prompt}</h1>
        <div className="options">
        <button onClick={()=>setoptionchosen('A')}>{question[currentQ].optionA}</button>
        <button onClick={()=>setoptionchosen('B')}>{question[currentQ].optionB}</button>
        <button onClick={()=>setoptionchosen('C')}>{question[currentQ].optionC}</button>
        <button onClick={()=>setoptionchosen('D')}>{question[currentQ].optionD}</button>
        </div>
        {
            currentQ==question.length-1?(
                <button onClick={finidhq}>finish quiz</button>
            ):(
                <button onClick={nQ}> Next Question</button>
            )
        }
        
        <h3>score</h3>
        <p>{score}</p>
        </div>
    )
}
export default QuizApp