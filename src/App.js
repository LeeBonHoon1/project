import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [text, setText] = useState("나는");

  const buttonHandler = () => {
    setText("존잘남");
  };

  useEffect(() => {
    console.log("맞아그거");
  }, [text]);

  return (
    <div className="App">
      <div>
        <h1>hello</h1>
        <button onClick={buttonHandler}>버튼</button>
        <h2>{text}</h2>
        <input
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></input>
      </div>
    </div>
  );
}

export default App;
