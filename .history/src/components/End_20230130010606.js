import React, { useContext } from 'react'
import { QuizContext } from '../Game/Context'
import { Question } from '../Game/Questions'

function End() {
  const {score, setScore} = useContext(QuizContext)
  return (
    <div>
      <h1>{score}/ {Question}</h1>
    </div>
  )
}

export default End