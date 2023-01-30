import React, {  useContext, useState } from 'react'
import { QuizContext } from '../Game/Context';

import { Question } from '../Game/Questions';


function Quiz() {
    const {score, setScore, setGame} = useContext(QuizContext)
    
    const [current, setCurrent] = useState(0);
    const [option, setOption]= useState("")
    
    const nextQuestion = () => {
      if (Question[current].answer === option) {
        setScore(score + 1)
      }
      alert(score)
      setCurrent(current + 1)
    }
    const finishQuiz = () => {
      if (Question[current].answer === option) {
        setScore(score + 1)
      }
      setGame("End")

    }
    


  return (
    <div className=" p-1 rounded-xl   ">
        <h1 className="text-2xl">{Question[current].prompt}</h1>
        <div className="flex mt-5  cursor-pointer flex-col gap-5 items-center text-center">
            <button onClick={() => setOption("A")} className="w-24 bg-rose-800 p-1 rounded-lg hover:bg-red-500">{Question[current].optionA}</button>
            <button  onClick={() => setOption("B") } className="w-24 bg-rose-800 p-1 rounded-lg hover:bg-red-500">{Question[current].optionB}</button>
            <button onClick={() => setOption("C")} className="w-24 bg-rose-800 p-1 rounded-lg hover:bg-red-500">{Question[current].optionC}</button>
            <button onClick={() => setOption("D")} className="w-24 bg-rose-800 p-1 rounded-lg hover:bg-red-500">{Question[current].optionD}</button>
        </div>
        <div>
          {current === Question.length - 1 ? (
            <button onClick={finishQuiz}>Finished</button>
          ):(
            <button className="w-[200px] h-7 mt-7 rounded-full bg-green-800" onClick={nextQuestion} >Next Question</button>
          )}
         
        </div>
        
    </div>
  )
}

export default Quiz