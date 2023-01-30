import React, { useState } from 'react'
import { Questions } from '../Game/Questions';


function Quiz() {
    const [current, setCurrent] = useState(0);

  return (
    <div className="bg-pink-700 p-1 rounded-xl   ">
        <h1>{Questions[current].prompt}</h1>
        <div>
            <button>{Questions[current].optionA}</button>
            <button>{Questions[current].optionB}</button>
            <button>{Questions[current].optionC}</button>
            <button>{Questions[current].optionB}</button>
        </div>
        
    </div>
  )
}

export default Quiz