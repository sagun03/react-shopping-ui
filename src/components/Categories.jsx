import React, { useRef, useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { categories } from "../utils/data";
import CategoryItem from "./CategoryItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "./styles.css";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/navigation/navigation.min.css";

const Cointainer = styled.div`
  font-size: 14px;
  display: flex;
  ${mobile({ padding: "1rem", flexDirection: "column" })};
`;

const Categories = () => {
  return (
    <Cointainer>
      <Swiper
        effect={"fade"}
        // centeredSlides={false}
        loopFillGroupWithBlank={true}
        slidesPerView={3}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        spaceBetween={40}
        slicePerView={1}
        navigation={false}
        loop={true}
        modules={[Navigation, Pagination, Autoplay]}
        breakpoints={{
          990: {
            slidesPerView: 3,
          },
          550: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
            pagination: true,
          },
        }}
        className="mySwiper"
      >
        {categories.map((item, index) => (
          <SwiperSlide>
            <CategoryItem {...item} key={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Cointainer>
  );
};

export default Categories;
