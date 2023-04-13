// import Product from "./pages/Product";
import Homepage from "./pages/Homepage";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { UserAuthContextProvider } from "./context/UserAuthContext";
// import Cart from "./pages/Cart";
import "./App.css";
import { useEffect } from "react";
import { auth } from "./firebase";
import PhoneSignUp from "./pages/PhoneSignUp";

const App = () => {
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("user", user);
      }
    });
  }, []);
  return (
    <>
      <UserAuthContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/phonesignup" element={<PhoneSignUp />} />
          </Routes>
        </Router>
      </UserAuthContextProvider>
    </>
  );
};

export default App;
