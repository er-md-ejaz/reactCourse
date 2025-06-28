import { useCallback, useState, useEffect, useRef } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [charactersAllowed, setCharactersAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hooks

  const passwordRef = useRef(null);


  // const passwordGenerator = () => {
  //   for(let i=0; i<8; i++){
  //     let idx = Math.floor(Math.random()*52);
  //     str = str + alphabet[idx];
  //   }
  // }

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,length);
    window.navigator.clipboard.writeText(password);
  }, [password])
    
    const passwordGenerator = useCallback(() => {
      let pass = "";
      let str = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ";
      // const numbers = "0123456789";
      if(numbersAllowed){ 
        str += "0123456789";
      }
      if(charactersAllowed){ 
        str += "~!@#$%^&*()_+=-[{]}';:?/.>,<";
      }
      // const characters = "~!@#$%^&*()_+=-[{]}';:?/.>,<";
      for(let i = 1; i<=length; i++){
        let idx = Math.floor(Math.random()*str.length + 1);
        pass += str.charAt(idx);
      }
      setPassword(pass);

    }, [length, numbersAllowed, charactersAllowed, setPassword]);

  // passwordGenerator();

    useEffect(()=> {
      passwordGenerator();
    }, [length, numbersAllowed, charactersAllowed, passwordGenerator]);

  return (
    <>
      <h1 className='text-center text-white text-4xl bg-slate-400 rounded-lg'>Password Generator</h1>
      <input type="text" 
        value={password}
        placeholder='Password'
        readOnly
        ref={passwordRef}
        className='dark:bg-yellow-800 dark:text-black'
      />
      <button 
        onClick={copyToClipboard}
        className='bg-blue-400 hover:bg-blue-100 hover:text-black'
      >Copy</button>
      <div>
        <input type="range"
          min={1}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}
        />
        <label>Length={length}</label>
        <input type="checkbox" 
          defaultChecked = {numbersAllowed}
          onChange={()=>setNumbersAllowed((prev)=> !prev)}
        /> 
        <label htmlFor="numbersAllowed"> Numbers</label>
        <input type="checkbox" 
          defaultChecked = {charactersAllowed}
          onChange={()=> {
            setCharactersAllowed((prev)=> !prev)}}
        />
        <label htmlFor="charactersAllowed"> Characters</label>
      </div>
      <div className="m-10 bg-amber-500 custom-container">Hello</div>
    </>
  )
}

export default App
