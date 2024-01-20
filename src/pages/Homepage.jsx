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
import BottomNav from "../components/BottomNav";
import { Helmet } from 'react-helmet-async'

const homepage = () => {

  return (
    <>
    <Helmet>
    <title>Homepage</title>
    <meta
      name="description"
      content="Shop for our latest products now."
    />
    <link rel="canonical" href="/" />
    </Helmet>
    <div style={{ overflow: 'auto'}}>
      <NavBar />
      <Announcement />
      <div>
        {" "}
        <Crousel />
        <SliderContainer />
        <Categories />
        <Virtual />
        <SimpleMap />
        <NewsLetter />
        <Footer />
      </div>
      <BottomNav />
    </div>
    </>
  );
};

export default homepage;
