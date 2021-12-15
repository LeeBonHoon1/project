import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [test, setTest] = useState({
    text: "",
  });

  useEffect(() => {
    console.log("실행됨");
  }, []);
  return (
    <div className="App">
      <div>hello</div>
      <div>{test}</div>
    </div>
  );
}

export default App;
