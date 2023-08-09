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
import AnimateIn from "../customeHooks/AnimateIn";

const Container = styled.div`
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 3rem;
  margin-bottom: 2rem;
`;

const HeadingContainer = styled.div`
  text-align: center;
`;

const EffectCardHeading = styled.div`
  padding: 5px 10px;
  color: #333;
  font-family: Roboto;
  font-size: 48px;
  font-weight: 400;
  margin: 0rem 0rem 4rem;
`;

const Categories = () => {
  return (
    <>
      <Container>
        <HeadingContainer>
          <AnimateIn
            to={{
              // transform: "translateY(0)",
              opacity: 1,
              transitionDelay: "0.3s",
            }}
            from={{
              "-webkit-animation-duration": "1s",
              opacity: 0,
            }}
            transition="all 1s ease 0s"
          >
            <EffectCardHeading>Popular Products</EffectCardHeading>
          </AnimateIn>
        </HeadingContainer>
        <Swiper
          effect={"fade"}
          // centeredSlides={false}
          loopFillGroupWithBlank={true}
          // slidesPerView={3}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={6000}
          spaceBetween={40}
          slicePerView={1}
          navigation={false}
          loop={true}
          modules={[Navigation, Pagination, Autoplay]}
          breakpoints={{
            1600: {
              slidesPerView: 3.5,
            },
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
          className="mySwiper1"
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
