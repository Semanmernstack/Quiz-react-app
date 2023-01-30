import React, { useContext } from 'react'
import { QuizContext } from '../Game/Context'

function End() {
  const {score, setScore} = useContext(QuizContext)
  return (
    <div>
      <h1>{score}</h1>
    </div>
  )
}

export default End