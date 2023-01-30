import React, { useContext } from 'react'
import { QuizContext } from '../Game/Context'

function Menu() {
    const { setGame} = useContext(QuizContext)
  return (
    <div className="flex">
        <button className="font-bold  text-xl cursor-pointer bg-red-800 text-white animate-pulse p-1" onClick={() => {setGame("quiz")}} >Start Quiz</button>
        
    </div>
  )
}

export default Menu