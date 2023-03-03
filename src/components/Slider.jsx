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
  font-size: 50px;
  text-align: center;
  ${ScreenWith1200px({ fontSize: "40px" })}
  ${ScreenWith1080px({ fontSize: "35px" })}
  ${ScreenWith960px({ fontSize: "50px" })}
  ${ScreenWith670px({ fontSize: "40px" })}
  ${mobile({ fontSize: "20px" })}
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  text-align: center;
  font-family: "Lucida Handwriting", "Lucida Handwriting", cursive;

  ${ScreenWith1200px({ fontSize: "20px", margin: "30px 0px" })}
  ${ScreenWith1080px({ fontSize: "15px" })}
  ${ScreenWith960px({ fontSize: "20px" })}
  ${ScreenWith670px({ fontSize: "20px" })}
  ${mobile({ fontSize: "10px" })}
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
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
      {SlidesItems.map(({ bg, img, title, desc }, index) => (
        <>
          {index === 0 ? (
            <Slide bg={bg}>
              <ImgContainer>
                <Image src={img} />
              </ImgContainer>
              <InfoContainer>
                <Title>{title}</Title>
                <Desc>{desc}</Desc>
                <ButtonContainer>
                  <Button>SHOP NOW</Button>
                </ButtonContainer>
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
