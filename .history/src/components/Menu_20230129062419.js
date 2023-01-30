import React, { useContext } from 'react'
import { QuizContext } from '../Game/Context'

function Menu() {
    const [game, setGame] = useContext(QuizContext)
  return (
    <div>
        <button onClick={() => {setGame("quiz")}}     >Start Quiz</button>
    </div>
  )
}

export default Menu