"use client";

import { useState } from 'react'

function ButtonComponent({ onClick, buttonText }) {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onClick}>
      {buttonText}
    </button>
  )
}

function VisibleComponent() {
  return (
    <div className="bg-green-500 p-4">
      This is the visible component
    </div>
  )
}


export default function Testing () {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
      setIsVisible(!isVisible)
    }

    return (
       
        <div className="flex flex-col items-center justify-center h-screen">
            <ButtonComponent onClick={toggleVisibility} buttonText={isVisible ? "Hide Content" : "Show Content"} />
            {isVisible && <VisibleComponent />}
          </div>
    )
}