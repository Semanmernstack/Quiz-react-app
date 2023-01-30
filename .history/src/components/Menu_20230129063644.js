import React, { useContext } from 'react'
import { QuizContext } from '../Game/Context'

function Menu() {
    const {game, setGame} = useContext(QuizContext)
  return (
    <div>
        <button onClick={() => {setGame("quiz")}} >Start Quiz</button>
        <p>ff</p>
    </div>
  )
}

export default Menu