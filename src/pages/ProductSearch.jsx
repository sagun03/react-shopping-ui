import React from "react";
import NavBar from "../components/NavBar";
import Products from "../components/Products";
import Announcement from "../components/Announcement";
import BottomNav from "../components/BottomNav";
import { Helmet } from "react-helmet-async";

const ProductSearch = () => {
  return (
    <>
       <Helmet>
        <title>Products Page</title>
        <meta name="description" content="Search for Products in this page" />
        <link rel="canonical" href="/products" />
      </Helmet>
      <NavBar />
      <Announcement />
      <Products />
      <BottomNav />
    </>
  );
};

export default ProductSearch;
