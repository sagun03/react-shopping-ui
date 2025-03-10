import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import { useEffect } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { v4 as uuidv4 } from "uuid";
import "./crousel.css";

// import required modules
import { Autoplay } from "swiper";
import { ClouserItems } from "../utils/data";
import { mobile, ScreenWith1080px, ScreenWith1200px, ScreenWith960px, tablet } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`to`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  height: inherit;
  flex-direction: column;
  position: relative;
  ${tablet({
    flexDirection: "column",
  })}
`;

const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  transition-delay: 2s;
  transition: all 1s ease 0s;
  transform: scale(0.8);
  opacity: 0;
  overflow: hidden;
  ${tablet({
    width: "100%",
  })}
`;

const Image = styled.img`
  height: 100%;
  object-fit: fill;

    ${ScreenWith1200px({
    height: "75%",
    width: "100%"
  })}
  
  ${ScreenWith1080px({
    height: "70%",
  })}
  ${ScreenWith960px({
    height: "65%",
  })}
  
  ${mobile({
    height: "55%",
  })}

`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  position: absolute;
  bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  right: 50px;

  ${ScreenWith1200px({
    bottom: "50px",
    right: "unset",
  })}

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
    bottom: "50px",
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
  margin: 15px 0px;
  font-size: 34px;
  font-weight: 400;
  letter-spacing: 3px;
  transition: all 1s ease 0s;
  transition-delay: 1.3s;
  -webkit-animation-duration: 1s;
  transform: translateY(-30px);
  opacity: 0;
  ${ScreenWith1200px({
    fontSize: "28px",
  })}

  ${ScreenWith1080px({
    fontSize: "30px",
  })}

  ${tablet({
    fontSize: "30px",
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
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 750);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1299);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsDesktop(window.innerWidth > 1299);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
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
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        className="myCrousel"
      >
        {ClouserItems.map(
          ({ img, title, desc, name, categoryTitle, mobileImg }, index) => (
            <SwiperSlide className={`slide${index + 1}`} key={uuidv4()}>
              <Slide>
                <ImgContainer className="img">
                <Image src={isMobile ? mobileImg : img} alt="Slide Image" />
                </ImgContainer>
                <InfoContainer className="info">
                  {/* <Title className="title">{title}</Title> */}
                {!isDesktop &&  <Desc className="desc">{desc}</Desc>}
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
