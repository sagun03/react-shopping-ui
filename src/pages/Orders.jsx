import React, { useEffect } from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import NewsLetter from "../components/NewsLetter";
import OrdersComponent from "../components/OrdersComponent";

const Orders = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Announcement />
      <NavBar />
      <OrdersComponent />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Orders;
