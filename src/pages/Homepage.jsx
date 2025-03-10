import React from "react";
// import Announcement from "../components/Announcement";
// import Categories from "../components/Categories";
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
import Categories from "../components/Home/Catrgories";

const homepage = () => {

  return (
    <>
    <Helmet>
    <title>The JK products</title>
    <script type="application/ld+json">
      {
        `{
          "@context": "https://schema.org",
          "@type": "Organization",
          "url": "https://thejkproducts.com/",
          "name": "The JK Products",
          "logo": "/logo.png",
          "@id": "#b2c-store-org"
        }`
      }
    </script>
    <script type="application/ld+json">
    {
      `{
        "@context": "https://schema.org",
        "@type": "WebSite",
        "url": "https://www.example.com/",
        "potentialAction": [{
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://thejkproducts.com/search?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        },{
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "android-app://com.example/https/thejkproducts.com/search/?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }]
      }`
    }
    </script>
    <meta
      name="description"
      content="One stop shop for all cleaning products"
    />
    <link rel="canonical" href="/" />
    </Helmet>
    <div style={{ overflow: 'auto'}}>
      <NavBar />
      <Announcement />
      <div>
        {" "}
        <Crousel />
        <Categories />
        <SliderContainer />
        {/* <Categories /> */}
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
