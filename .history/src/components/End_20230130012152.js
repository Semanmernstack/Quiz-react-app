import React, { useContext } from 'react'
import { QuizContext } from '../Game/Context'
import { Question } from '../Game/Questions'

function End() {
  const {score} = useContext(QuizContext)
  return (
    <div>
      <h1 className="font-bold animate-bounce mb-4 mt-5">{score}/ {Question.length}</h1>
      <div>
        <p className="font-bold">Quiz Finished</p>
      </div>
    </div>
    
  )
}

export default End