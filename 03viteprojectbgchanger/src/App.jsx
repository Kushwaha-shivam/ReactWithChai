import React, { useState } from 'react'
import './index.css'

function App() {
  const [color, setColor] = useState('whitesmoke')
  const changeBgToBlue = () => {
    setColor('blue');
  }
  const changeBgToBlack = () => {
    setColor('black');
  }
  const changeBgToGreen = () => {
    setColor('green');
  }
  const changeBgToPurple = () => {
    setColor('purple');
  }
  const changeBgToRed = () => {
    setColor('red');
  }
  const changeBgToYellow = () => {
    setColor('yellow');
  }

  return (
    <>
      <div className="main h-screen w-full flex justify-center items-center" style={{ backgroundColor: color }}>
        <div className=''>
          <h1 className='text-center mb-5 text-2xl'>Click any button to change the background</h1>
          <button onClick={changeBgToBlue} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Blue</button>

          <button onClick={changeBgToBlack} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Black</button>

          <button onClick={changeBgToGreen} type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Green</button>

          <button onClick={changeBgToRed} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Red</button>

          <button onClick={changeBgToYellow} type="button" className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Yellow</button>

          <button onClick={changeBgToPurple} type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Purple</button>

        </div>

      </div>



    </>




  )
}

export default App