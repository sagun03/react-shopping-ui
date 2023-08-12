import React from "react";
import NavBar from "../components/NavBar";
import Products from "../components/Products";
import Announcement from "../components/Announcement";
import BottomNav from "../components/BottomNav";

const ProductSearch = () => {
  return (
    <>
      <NavBar />
      <Announcement />
      <Products />
      <BottomNav />
    </>
  );
};

export default ProductSearch;
