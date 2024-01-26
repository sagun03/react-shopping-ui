import React from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import NewsLetter from "../components/NewsLetter";
import WhatsappOrder from "../components/WhatsppOrder";
import BottomNav from "../components/BottomNav";
import { Helmet } from "react-helmet-async";

const Checkout = () => {
  return (
    <>
      <Helmet>
        <title>Checkout</title>
        <meta name="description" content="Checkout page" />
        <link rel="canonical" href="/checkout" />
      </Helmet>
      <Announcement />
      <NavBar />
      <WhatsappOrder />
      <NewsLetter />
      <Footer />
      <BottomNav />
    </>
  );
};

export default Checkout;
