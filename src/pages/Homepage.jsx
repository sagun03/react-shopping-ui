import React from 'react'
import Announcement from '../components/Announcement';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import NewsLetter from '../components/NewsLetter';
import Products from '../components/Products';
import Slider from '../components/Slider';

const homepage = () => {
    return (
        <>
        <Announcement />
        <NavBar />
        <Slider />
        <Categories />
        <Products />
        <NewsLetter />
        <Footer />
        </>
    )
}

export default homepage;
