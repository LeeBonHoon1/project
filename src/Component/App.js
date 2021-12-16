/*eslint-disable*/
import AppRouter from "./Route";
import { useState, useEffect } from "react";
import { authService } from "../firebase";

function App() {
  const [init, setInit] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <>
      {init ? <AppRouter isLogin={isLogin} /> : "Initializing..."}
      <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </>
  );
}

export default App;
