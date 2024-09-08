import { useState } from "react";

function Button() {
  const [color, setColor] = useState("#212121");

  return (
    <>
      <div
        className='w-screen h-screen flex items-end justify-center pb-9 relative'
        style={{ backgroundColor: color }}
      >
        <h1 className='absolute top-5 font-bold text-5xl text-yellow-950'>
          Background Color Changer
        </h1>
        <div className='bg-white w-11/12 h-12 rounded-full flex items-center justify-evenly'>
          <button
            className='bg-red-500 rounded-full text-gray-100 p-2 w-20 border-solid border-2 border-gray-800 hover:outline-none'
            onClick={() => setColor("Red")}
          >
            Red
          </button>
          <button
            className='bg-green-500 rounded-full text-gray-100 p-2 w-20 border-solid border-2 border-gray-800 hover:outline-none'
            onClick={() => setColor("Green")}
          >
            Green
          </button>
          <button
            className='bg-white-500  rounded-full text-gray-900 p-2 w-20 border-solid border-2 border-gray-800'
            onClick={() => setColor("White")}
          >
            White
          </button>
          <button
            className='bg-blue-500  rounded-full text-gray-100 p-2 w-20 border-solid border-2 border-gray-800'
            onClick={() => setColor("Blue")}
          >
            Blue
          </button>
          <button
            className='bg-pink-500  rounded-full text-gray-100 p-2 w-20 border-solid border-2 border-gray-800'
            onClick={() => setColor("Pink")}
          >
            Pink
          </button>
          <button
            className='bg-gray-500  rounded-full text-gray-100 p-2 w-20 border-solid border-2 border-gray-800'
            onClick={() => setColor("Gray")}
          >
            Gray
          </button>
          <button
            className='bg-orange-500  rounded-full text-gray-100 p-2 w-20 border-solid border-2 border-gray-800'
            onClick={() => setColor("Orange")}
          >
            Orange
          </button>
          <button
            className='bg-purple-500  rounded-full text-gray-100 p-2 w-20 border-solid border-2 border-gray-800'
            onClick={() => setColor("Purple")}
          >
            Purple
          </button>
          <button
            className='bg-yellow-500  rounded-full text-gray-100 p-2 w-20 border-solid border-2 border-gray-800'
            onClick={() => setColor("Yellow")}
          >
            Yellow
          </button>
          <button
            className='bg-gray-900  rounded-full text-gray-100 p-2 w-20 border-solid border-2 border-gray-800'
            onClick={() => setColor("Black")}
          >
            Black
          </button>
        </div>
      </div>
    </>
  );
}

export default Button;
