import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import AnimateIn from "../../customeHooks/AnimateIn";
import "./styles.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { categories } from "../../utils/data";
import CategoryItem from "../CategoryItem";
import { mobile } from "../../responsive";

// Styled Components
const Container = styled.div`
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 60px 40px;
  margin: 2.5rem auto;
  gap: 5rem;

    ${mobile({ margin: "1.5rem auto", gap: "2.5rem" })}

`;

const HeadingContainer = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const EffectCardHeading = styled.h1`
  color: #004f8d;
  font-family: Arial, sans-serif;
  max-width: 1200px;
  font-size: 56px;
  font-weight: bold;

  ${mobile({ fontSize: "32px" })}
`;

const CategorySection = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
`;

const CategoryItemWrapper = styled.div`
  text-align: center;
`;

const CategoryImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 1rem;
`;

const CategoryDescription = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

const CategoryButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #003366;
  text-decoration: underline;
`;

const Price = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #000;
  margin: 0;
`;

const DiscountedPrice = styled(Price)`
  color: red;
  text-decoration: line-through;
`;

const Categories = () => {
  return (
    <Container>
      <AnimateIn to={{ opacity: 1, transitionDelay: "0.3s" }} from={{ opacity: 0 }} transition="all 1s ease 0s">
        <HeadingContainer>
          <EffectCardHeading>
            Explore Our Diverse Range of Cleaning Products for Every Need
          </EffectCardHeading>
        </HeadingContainer>
      </AnimateIn>

      {/* <AnimateIn to={{ opacity: 1, transitionDelay: "0.5s" }} from={{ opacity: 0 }} transition="all 1s ease 0s"> */}
        {/* <CategorySection> */}
          <Swiper
             effect={"fade"}
             // centeredSlides={false}
             loopFillGroupWithBlank={true}
            //  slidesPerView={3}
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
        {/* </CategorySection> */}
      {/* </AnimateIn> */}
    </Container>
  );
};

export default Categories;
