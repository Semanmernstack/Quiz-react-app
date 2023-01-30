import React, { useContext } from 'react'
import { QuizContext } from '../Game/Context'
import { Question } from '../Game/Questions'

function End() {
  const {score, setGame} = useContext(QuizContext)
  const finishedGame = () => {
    setGame("menu")
  }
  return (
    <div>
      <h1 className="font-bold animate-bounce mb-4 mt-5">{score}/ {Question.length}</h1>
      <div>
        <p onClick={finishedGame} className="font-bold cursor-pointer hover:animate-pulse text-2xl">Quiz Finished</p>
      </div>
    </div>
    
  )
}

export default End