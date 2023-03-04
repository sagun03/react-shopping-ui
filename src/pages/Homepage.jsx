import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import NewsLetter from "../components/NewsLetter";
import Products from "../components/Products";
import SliderContainer from "../components/SliderContainer";
import Virtual from "../components/Virtual";

const homepage = () => {
  return (
    <>
      <Announcement />
      <NavBar />
      <SliderContainer />
      <Categories />
      <Virtual />
      <Products />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default homepage;
