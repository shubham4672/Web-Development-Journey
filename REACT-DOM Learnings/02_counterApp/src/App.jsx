import { useState } from "react";
import "./App.css";

function App() {
  function incre() {
    setCounter((counter) => counter + 1);
    setCounter((counter) => counter + 1);
    setCounter((counter) => counter + 1);
    setCounter((counter) => counter + 1);
  }
  // function decre() {
  //   setCounter(() => counter - 1);
  // }
  const [counter, setCounter] = useState(0);
  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter value: {counter}</h2>
      <button className='increment' onClick={incre}>
        Increment
      </button>
      <button
        className='decrement'
        onClick={setCounter(() => counter - 1)}
        disabled={counter === 0}
      >
        Decrement
      </button>
    </>
  );
}

export default App;
