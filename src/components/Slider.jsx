import styled, { keyframes } from "styled-components";
import React from "react";
import { SlidesItems } from "../utils/data";
import {
  mobile,
  ScreenWith1080px,
  ScreenWith1200px,
  ScreenWith670px,
  ScreenWith960px,
} from "../responsive";
import { Link } from "react-router-dom";
import AnimateIn from "../customeHooks/AnimateIn";
// import { Animate } from "../customeHooks/AnimateIn";

const Container = styled.div`
  width: 100%;
  height: inherit;
  display: flex;
  position: relative;
  overflow: visible;
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: inherit;
  background-color: #${(props) => props.bg};
  ${mobile({ flexDirection: "column" })}
`;

const zoomInOutAnimation = keyframes`
0% {
  transform: scale(1, 1);
}
50% {
  transform: scale(1.2, 1.2);
}
100% {
  transform: scale(1, 1);
}
`;

const ImgContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 27%;
    left: 8%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    animation: ${zoomInOutAnimation} 5s ease infinite;
  }
  &:before {
    height: 20%;
    width: 96%;
    padding-bottom: 60%;
    background-color: #b5daf0;
    z-index: 0;
  }
  ${mobile({ width: "80px", display: "flex", order: "1" })}
`;

const Image = styled.img`
  display: block;
  width: 210px;
  height: 100%;
  object-fit: cover;
  padding-left: 2.1rem;
  z-index: 2;
  animation: ${zoomInOutAnimation} 5s ease infinite;
  ${ScreenWith1200px({ width: "170px" })}
  ${ScreenWith1080px({ width: "150px" })}
  ${ScreenWith960px({ width: "210px" })}
  ${ScreenWith670px({ width: "170px" })}
  ${mobile({ width: "80px", paddingLeft: ".8rem" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 30px;
  ${ScreenWith1200px({ padding: "25px" })}
  ${ScreenWith1080px({ padding: "20px" })}
  ${ScreenWith960px({ padding: "30px" })}
  ${ScreenWith670px({ padding: "25px" })}
  ${mobile({ padding: "40px", flex: "0" })}
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 400;
  text-align: center;
  // animation: 2s anim-lineUp ease-out infinite;
  ${ScreenWith1200px({ fontSize: "30px" })}
  ${ScreenWith1080px({ fontSize: "25px" })}
  ${ScreenWith960px({ fontSize: "40px" })}
  ${ScreenWith670px({ fontSize: "30px" })}
  ${mobile({ fontSize: "30px" })} // @keyframes anim-lineUp {
  //   0% {
  //     opacity: 0;
  //     transform: translateY(80%);
  //   }
  //   20% {
  //     opacity: 0;
  //   }
  //   50% {
  //     opacity: 1;
  //     transform: translateY(0%);
  //   }
  //   100% {
  //     opacity: 1;
  //     transform: translateY(0%);
  //   }
  // }
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 3px;
  text-align: center;

  ${ScreenWith1200px({ fontSize: "15px", margin: "30px 0px" })}
  ${ScreenWith1080px({ fontSize: "10px" })}
  ${ScreenWith960px({ fontSize: "15px" })}
  ${ScreenWith670px({ fontSize: "15px" })}
  ${mobile({ fontSize: "15px" })}
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: #333;
  color: white;
  cursor: pointer;
  transition: transform 2s;

  &:hover {
    transform: scale(1.1);
  }
  ${ScreenWith1200px({ fontSize: "15px", padding: "5px" })}
  ${ScreenWith1080px({ fontSize: "10px", padding: "5px" })}
  ${ScreenWith960px({ fontSize: "20px", padding: "10px" })}
  ${ScreenWith670px({ fontSize: "15px", padding: "5px" })}
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Slider = () => {
  return (
    <Container>
      {SlidesItems.map(({ bg, img, title, desc, id }, index) => (
        <>
          {index === 0 ? (
            <Slide bg={bg}>
              <ImgContainer>
                <Image src={img} />
              </ImgContainer>
              <InfoContainer>
                <AnimateIn
                  to={{
                    transform: "translateY(0)",
                    opacity: 1,
                    transitionDelay: "0.2s",
                  }}
                  from={{
                    "-webkit-animation-duration": "1s",
                    transform: "translateY(-30px)",
                    opacity: 0,
                  }}
                  transition="all 1s ease 0s"
                >
                  <Title>{title}</Title>
                </AnimateIn>
                <AnimateIn
                  to={{
                    transform: "translateY(0)",
                    opacity: 1,
                    transitionDelay: "0.3s",
                  }}
                  from={{
                    "-webkit-animation-duration": "1s",
                    transform: "translateY(-30px)",
                    opacity: 0,
                  }}
                  transition="all 1s ease 0s"
                >
                  <Desc>{desc}</Desc>
                </AnimateIn>
                <AnimateIn
                  to={{
                    transform: "translateY(0)",
                    opacity: 1,
                    transitionDelay: "0.5s",
                  }}
                  from={{
                    "-webkit-animation-duration": "1s",
                    transform: "translateY(-30px)",
                    opacity: 0,
                  }}
                  transition="all 1s ease 0s"
                >
                  <Link to={`/products?name=detergent&title=${title}`}>
                    <ButtonContainer>
                      <Button>SHOP NOW</Button>
                    </ButtonContainer>
                  </Link>
                </AnimateIn>
              </InfoContainer>
            </Slide>
          ) : (
            <></>
          )}
        </>
      ))}
    </Container>
  );
};

export default Slider;
