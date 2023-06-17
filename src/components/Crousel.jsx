import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { v4 as uuidv4 } from "uuid";
import "./crousel.css";

// import required modules
import { Autoplay } from "swiper";
import { ClouserItems } from "../utils/data";
import { ScreenWith1080px, ScreenWith960px, tablet } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div``;

const Slide = styled.div`
  display: flex;
  align-items: center;
  height: inherit;

  ${tablet({
    flexDirection: "column",
  })}
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
  ${tablet({
    width: "100%",
  })}
`;

const Image = styled.img`
  height: 100%;
  object-fit: fill;
  ${tablet({
    width: "100%",
  })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;

  ${ScreenWith1080px({
    padding: "30px",
    flex: "0.9",
  })}
  ${ScreenWith960px({
    padding: "20px",
    flex: "0.9",
  })}
  ${tablet({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    padding: "30px",
  })}
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: 400;
  transition: all 1s ease 0s;
  transition-delay: 1s;
  -webkit-animation-duration: 1s;
  transform: translateY(-30px);
  opacity: 0;
  ${ScreenWith1080px({
    fontSize: "45px",
  })}
  ${ScreenWith960px({
    fontSize: "40px",
  })}
  ${tablet({
    fontSize: "45px",
  })}
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
  ${ScreenWith960px({
    fontSize: "15px",
  })}
  ${tablet({
    fontSize: "20px",
  })}
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
  ${ScreenWith960px({
    fontSize: "15px",
  })}
  ${tablet({
    textAlign: "center",
    fontSize: "20px",
  })}
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
        {ClouserItems.map(
          ({ img, title, desc, name, categoryTitle }, index) => (
            <SwiperSlide className={`slide${index + 1}`} key={uuidv4()}>
              <Slide>
                <ImgContainer className="img">
                  <Image src={img} />
                </ImgContainer>
                <InfoContainer className="info">
                  <Title className="title">{title}</Title>
                  <Desc className="desc">{desc}</Desc>
                  <Link to={`/products?name=${name}&title=${categoryTitle}`}>
                    <Button className="buttton">SHOP NOW</Button>
                  </Link>
                </InfoContainer>
              </Slide>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </Container>
  );
};

export default Crousel;
