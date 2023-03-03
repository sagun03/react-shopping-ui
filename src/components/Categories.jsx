import React from "react";
import styled from "styled-components";
import { categories } from "../utils/data";
import CategoryItem from "./CategoryItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards, Navigation, Pagination } from "swiper";
import "./styles.css";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/navigation/navigation.min.css";
import { sliderHideCustom } from "../responsive";

const Container = styled.div`
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 98%;
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
  background-image: linear-gradient(135deg, #8bc6ec 0%, #9599e2 100%);

  padding: 5px 10px;
  color: white;
`;

const Categories = () => {
  return (
    <>
      <Container>
        <Swiper
          effect={"fade"}
          // centeredSlides={false}
          loopFillGroupWithBlank={true}
          slidesPerView={3}
          autoplay={{
            delay: 2500,
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
            <SwiperSlide>
              <CategoryItem {...item} key={index} />
            </SwiperSlide>
          ))}
        </Swiper>
        <HeadingContainer>
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
        </Swiper>
      </Container>
    </>
  );
};

export default Categories;
