import React, { Suspense } from "react";
import Product from "./pages/Product";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Cart from "./pages/Cart";
import "./App.css";
import PhoneSignUp from "./pages/PhoneSignUp";
import Orders from "./pages/Orders";
import Checkout from "./pages/Checkout";
import { CircularProgress } from "@material-ui/core";

const Home = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./pages/Homepage")), 1500);
  });
});

const App = () => {
  return (
    <>
      <UserAuthContextProvider>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Suspense
                  fallback={
                    <div
                      style={{
                        display: "block",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                      }}
                    >
                      <CircularProgress />
                    </div>
                  }
                >
                  <Home />
                </Suspense>
              }
            />
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
