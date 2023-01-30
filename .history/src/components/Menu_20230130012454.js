import React, { useContext } from 'react'
import { QuizContext } from '../Game/Context'

function Menu() {
    const { setGame} = useContext(QuizContext)
  return (
    <div className="flex">
        <button className="font-bold" onClick={() => {setGame("quiz")}} >Start Quiz</button>
        
    </div>
  )
}

export default Menu