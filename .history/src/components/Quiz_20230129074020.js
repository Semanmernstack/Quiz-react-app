import React, { useState } from 'react'
import { Question } from '../Game/Questions';


function Quiz() {
    const [current, setCurrent] = useState(0);

  return (
    <div className=" p-1 rounded-xl   ">
        <h1 className="text-2xl">{Question[current].prompt}</h1>
        <div className="flex, flex-col">
            <button>{Question[current].optionA}</button>
            <button>{Question[current].optionB}</button>
            <button>{Question[current].optionC}</button>
            <button>{Question[current].optionD}</button>
        </div>
        
    </div>
  )
}

export default Quiz