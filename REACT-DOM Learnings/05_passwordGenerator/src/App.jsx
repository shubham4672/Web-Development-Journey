import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789";
    let specialChars = "!@#$%^&*()_+~|}{[]:;?><,./-=";

    let charPool = chars;
    if (numberAllowed) charPool += numbers;
    if (charAllowed) charPool += specialChars;

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      generatedPassword += charPool.charAt(
        Math.floor(Math.random() * charPool.length)
      );
    }
    setPassword(generatedPassword);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);
  return (
    <>
      <div
        className='main w-full h-screen'
        style={{ backgroundColor: "#14213d", color: "#fca311" }}
      >
        <h1
          className='flex justify-center text-5xl font-semibold pt-7'
          style={{ color: "#e5e5e5" }}
        >
          Password Generator
        </h1>
        <div className='flex justify-center items-start w-full h-screen mt-14'>
          <div
            className='section bg-slate-600 w-full max-w-lg mx-auto shadow-md h-44 rounded-xl py-7 px-8 relative'
            style={{ color: "#e5e5e5" }}
          >
            <input
              type='text'
              className='mt-3 w-10/12 h-9 px-3 rounded-l-lg focus:outline-none cursor-text text-black'
              placeholder='Password'
              value={password}
              readOnly
              ref={passwordRef}
            />
            <button
              className='inline px-3 bg-blue-700 rounded-r-lg h-9 w-1/6'
              onClick={copyPasswordToClipboard}
            >
              Copy
            </button>
            <div className='more-info absolute bottom-7 flex gap-x-1'>
              <input
                type='range'
                className='cursor-pointer'
                name='len'
                id='len'
                min={6}
                max={100}
                value={length}
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label htmlFor='len' style={{ color: "#ffffff" }}>
                Length ({length})
              </label>
              <input
                type='checkbox'
                name='nums'
                id='nums'
                checked={numberAllowed}
                className='ml-4 cursor-pointer'
                onChange={(e) => {
                  setNumberAllowed(e.target.checked);
                }}
              />
              <label htmlFor='nums'>Numbers</label>
              <input
                type='checkbox'
                name='char'
                id='char'
                className='ml-4 cursor-pointer'
                checked={charAllowed}
                onChange={(e) => setCharAllowed(e.target.checked)}
              />
              <label htmlFor='char'>Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
