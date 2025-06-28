import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  let myObj = {
    username: "mdejaz",
    age: 21,
  };
  let myBtn = "click";

  return (
    <>
      <h1 className="bg-blue-400 text-black rounded-xl p-3 mb-9">
        MD EJAZ ANSARI
      </h1>
      <Card name="Ejaz" Btn={myBtn} />
      <Card name="Ansari" />

      <button class="dark:md:hover:bg-fuchsia-600 ...">Save changes</button>
    </>
  );
}

export default App;
