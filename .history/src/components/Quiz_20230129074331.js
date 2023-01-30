import React, { useState } from 'react'
import { Question } from '../Game/Questions';


function Quiz() {
    const [current, setCurrent] = useState(0);

  return (
    <div className=" p-1 rounded-xl   ">
        <h1 className="text-2xl">{Question[current].prompt}</h1>
        <div className="flex mt-5  cursor-pointer flex-col gap-5 items-center text-center">
            <button className="w-24 bg-rose-800 p-1 rounded-lg">{Question[current].optionA}</button>
            <button className="w-24 bg-rose-800 p-1 rounded-lg">{Question[current].optionB}</button>
            <button className="w-24 bg-rose-800 p-1 rounded-lg">{Question[current].optionC}</button>
            <button className="w-24 bg-rose-800 p-1 rounded-lg">{Question[current].optionD}</button>
        </div>
        
    </div>
  )
}

export default Quiz