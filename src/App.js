import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Components/Main/Main";
import Login from "./Components/Login/Login";
import Checkout from "./Components/Checkout/Checkout";
import { useStateValue } from "./Components/StateAPI/StateProvider";
import { useEffect } from "react";
import { auth } from "./Firebase/Firebase";

function App() {

  // eslint-disable-next-line no-empty-pattern
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    const unSuscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // user is logged in
        dispatch({
          type: "SET_USER",
          user: user,
        });
      } else {
        // user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      unSuscribe();
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
