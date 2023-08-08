import React from "react";
// import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import NewsLetter from "../components/NewsLetter";
// import Products from "../components/Products";
import SliderContainer from "../components/SliderContainer";
import Virtual from "../components/Virtual";
import Crousel from "../components/Crousel";
import SimpleMap from "../components/Map";
import Announcement from "../components/Announcement";

const homepage = () => {
  return (
    <>
      <NavBar />
      <Announcement />

      <Crousel />
      <SliderContainer />
      <Categories />
      <Virtual />
      {/* <Products /> */}
      <SimpleMap />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default homepage;
