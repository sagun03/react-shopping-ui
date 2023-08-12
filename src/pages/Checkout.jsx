import React from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import NewsLetter from "../components/NewsLetter";
import WhatsappOrder from "../components/WhatsppOrder";
import BottomNav from "../components/BottomNav";

const Checkout = () => {
  return (
    <>
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
