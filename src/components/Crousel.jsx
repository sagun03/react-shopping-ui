import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./crousel.css";

// import required modules
import { Autoplay } from "swiper";
import { ClouserItems } from "../utils/data";

const Container = styled.div``;

const Slide = styled.div`
  display: flex;
  align-items: center;
  height: inherit;
`;

const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition-delay: 2s;
  transition: all 1s ease 0s;
  transform: scale(0.5);
  opacity: 0;
  overflow: hidden;
`;

const Image = styled.img`
  height: 100%;
  object-fit: fill;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 60px;
  // font-family: "__Work_Sans_513b9b", "__Work_Sans_Fallback_513b9b";
  font-weight: 400;
  transition: all 1s ease 0s;
  transition-delay: 1s;
  -webkit-animation-duration: 1s;
  transform: translateY(-30px);
  opacity: 0;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 3px;
  transition: all 1s ease 0s;
  transition-delay: 1.3s;
  -webkit-animation-duration: 1s;
  transform: translateY(-30px);
  opacity: 0;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  color: white;
  background-color: black;
  cursor: pointer;
  transition: all 1s ease 0s;
  transition-delay: 1.5s;
  -webkit-animation-duration: 1s;
  transform: translateY(-30px);
  opacity: 0;
`;

const Crousel = () => {
  return (
    <Container>
      <Swiper
        effect={"fade"}
        pagination={{
          clickable: true,
        }}
        speed={1000}
        autoplay={{
          delay: 3500,
        }}
        loop={true}
        modules={[Autoplay]}
        className="myCrousel"
      >
        {ClouserItems.map(({ img, title, desc }, index) => (
          <SwiperSlide className={`slide${index + 1}`}>
            <Slide>
              <ImgContainer className="img">
                <Image src={img} />
              </ImgContainer>
              <InfoContainer className="info">
                <Title className="title">{title}</Title>
                <Desc className="desc">{desc}</Desc>
                <Button className="buttton">SHOP NOW</Button>
              </InfoContainer>
            </Slide>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Crousel;
