import Product from "./pages/Product";
import Homepage from "./pages/Homepage";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Cart from "./pages/Cart";
import "./App.css";
import { useEffect } from "react";
import { auth } from "./firebase";
import PhoneSignUp from "./pages/PhoneSignUp";
import { useState } from "react";
import Orders from "./pages/Orders";
import Checkout from "./pages/Checkout";

const App = () => {
  const [accessToken, setAccessToken] = useState("");
  console.log("accessToken", accessToken);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setAccessToken(user?.accessTOken);
      }
    });
  }, []);
  return (
    <>
      <UserAuthContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/phonesignup" element={<PhoneSignUp />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Router>
      </UserAuthContextProvider>
    </>
  );
};

export default App;
