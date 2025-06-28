import { useState } from "react";


function App() {

  // let counter = 5;
  let [counter, setCounter] = useState(5);



  const incCounter = () => {
    // counter = counter + 1;
    // if(counter > 10){
    //   setCounter(10);
    // }
    // else{
    //   setCounter(counter);

    // }

    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);

  }

  const decCounter = () => {
    // counter = counter - 1;
    // if(counter < 0){
    //   setCounter(0);
    // }
    // else{
    //   setCounter(counter);

    // }

    
    setCounter(prevCounter => prevCounter - 1);
    setCounter(prevCounter => prevCounter - 1);
    setCounter(prevCounter => prevCounter - 1);
    setCounter(prevCounter => prevCounter - 1);
  }


  return (
    <>
      <h1>Hello Ejaz</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={incCounter}>increase</button>
      <button onClick={decCounter}>decrease</button>
    </>
  )
}

export default App
