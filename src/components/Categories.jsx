import React from "react";
import styled from "styled-components";
import { categories } from "../utils/data";
import CategoryItem from "./CategoryItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "./styles.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { sliderHideCustom } from "../responsive";

const Container = styled.div`
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 98%;
  margin-bottom: 60px;
`;

const HeadingContainer = styled.div`
  width: 101%;
  height: 20px;
  border-bottom: 1px solid black;
  text-align: center;
  margin: 10px auto 80px;

  ${sliderHideCustom({ display: "none" })}
`;

const EffectCardHeading = styled.span`
  font-size: 35px;
  font-weight: 500;
  background-color: #8bc6ec;
  padding: 5px 10px;
  color: white;
`;

const Categories = () => {
  return (
    <>
      <Container>
        <HeadingContainer>
          <EffectCardHeading>Popular Products</EffectCardHeading>
        </HeadingContainer>
        <Swiper
          effect={"fade"}
          // centeredSlides={false}
          loopFillGroupWithBlank={true}
          slidesPerView={3}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
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
            <SwiperSlide key={item.id}>
              <CategoryItem {...item} key={index} />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <HeadingContainer>
          <EffectCardHeading>Flip The Cards</EffectCardHeading>
        </HeadingContainer>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          centeredSlides={true}
          className="mySwiperCards"
        >
          {categories.map((item, index) => (
            <SwiperSlide>
              <CategoryItem {...item} key={index} />
            </SwiperSlide>
          ))}
        </Swiper> */}
      </Container>
    </>
  );
};

export default Categories;
