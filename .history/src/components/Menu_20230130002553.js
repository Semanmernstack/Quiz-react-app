import React, { useContext } from 'react'
import { QuizContext } from '../Game/Context'

function Menu() {
    const { setGame} = useContext(QuizContext)
  return (
    <div className="flex">
        <button onClick={() => {setGame("quiz")}} >Start Quiz</button>
        <p>ff</p>
    </div>
  )
}

export default Menu