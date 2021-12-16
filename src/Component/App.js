import AppRouter from "./Route";
import { useState } from "react";
import firebase from "../firebase";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <AppRouter isLogin={isLogin} />
      <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </>
  );
}

export default App;
