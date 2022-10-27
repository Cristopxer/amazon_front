import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Components/Main/Main";
import Login from "./Components/Login/Login";
import Checkout from "./Components/Checkout/Checkout";
import { useStateValue } from "./Components/StateAPI/StateProvider";
import { useEffect } from "react";
import { auth, db } from "./Firebase/Firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
function App() {
  // eslint-disable-next-line no-empty-pattern
  const [{}, dispatch] = useStateValue();

  const getHomeProducts = async (q) => {
    const data = await getDocs(q);
    return data.docs.map((doc) => ({ ...doc.data().basket, id: doc.id }));
  };

  useEffect(() => {
    const unSuscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // user is logged in
        dispatch({
          type: "SET_USER",
          user: user,
        });
        // console.log(action.user.email);
        // Get the basket from the db of the logged user
        const q = query(
          collection(db, "basket"),
          where("email", "==", user.email)
        );

        getHomeProducts(q).then((data) => {          
          dispatch({
            type: "ADD_TO_BASKET",
            item: data[0][0],
            basketId: data[0].id,
          });
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
