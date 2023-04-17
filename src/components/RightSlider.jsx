import React from "react";
import styled from "styled-components";
import {
  mobile,
  ScreenWith1080px,
  ScreenWith1200px,
  ScreenWith1470px,
  ScreenWith1670px,
  ScreenWith670px,
  ScreenWith960px,
} from "../responsive";
import HandWash from "./../pages/images/hw.png";
import FloorCleaner from "./../pages/images/fc.png";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: inherit;
  display: flex;
  overflow: visible;
  flex-direction: column;
  gap: 2rem;
`;

const ImgContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 230px;
  transition: transform 2s;

  &:hover {
    transform: scale(1.25);
  }
  ${ScreenWith1670px({ height: "180px" })}
  ${ScreenWith1470px({ height: "165px" })}
  ${ScreenWith1200px({ height: "157px" })}
  ${ScreenWith1080px({ height: "123px" })}
  ${ScreenWith960px({ height: "220px" })}
  ${ScreenWith670px({ height: "230px" })}
  ${mobile({ height: "115px" })}
  ${(p) => (p.fc ? mobile({ position: "relative", bottom: "-57px" }) : "")}
`;

const Image = styled.img`
  display: block;
  width: 210px;
  height: 100%;
  bottom: ${(p) => (p.fc ? 0 : 10)}%;
  right: ${(p) => (p.fc ? 0 : 10)}%;
  overflow: hidden;
  position: relative;

  ${ScreenWith1470px({ width: "170px" })}
  ${ScreenWith1200px({ width: "150px" })}
  ${ScreenWith1080px({ width: "130px" })}
  ${ScreenWith960px({ width: "210px" })}
  ${ScreenWith670px({ width: "170px" })}
  ${mobile({ width: "130px" })}
`;

const ChildContainer = styled.div`
  height: 50%;
  display: flex;
  cursor: pointer;
  pointer-events: all;
  transition: transform 2s;

  &:hover ${ImgContainer} {
    transform: scale(1.2);
  }
`;

const InfoContainer = styled.div`
  padding: 2rem;
  ${ScreenWith1670px({ padding: "1.5rem" })}
  ${ScreenWith1200px({ padding: "1rem" })}
  ${ScreenWith960px({ padding: "2rem" })}
  ${ScreenWith670px({ padding: "1.75rem" })}
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  justify-content: ${(p) => (p.fc ? "space-between" : "space-around")};
  background-color: #${(props) => props.bg};
`;

const Title = styled.h1`
  font-size: 50px;
  text-align: center;
  ${ScreenWith1470px({ fontSize: "45px" })}
  ${ScreenWith1200px({ fontSize: "35px" })}
  ${ScreenWith1080px({ fontSize: "30px" })}
  ${ScreenWith960px({ fontSize: "50px" })}
  ${ScreenWith670px({ fontSize: "40px" })}
  ${mobile({ fontSize: "20px" })}
`;

const Desc = styled.p`
  margin-top: 45px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  text-align: center;

  ${ScreenWith1670px({ marginTop: "20px" })}
  ${ScreenWith1470px({ fontSize: "15px" })}
  ${ScreenWith1200px({ fontSize: "15px", marginTop: "15px" })}
  ${ScreenWith1080px({ fontSize: "10px" })}
  ${ScreenWith960px({ fontSize: "20px" })}
  ${ScreenWith670px({ fontSize: "20px" })}
  ${mobile({ fontSize: "8px" })}
`;

const RightSlider = () => {
  return (
    <Container>
      <ChildContainer>
        <Link to={`/product/2`}>
          <Slide bg={"fcf1ed"}>
            <InfoContainer>
              <Title>{"Strawberry Handwash"}</Title>
              <Desc>
                {"DON'T COMPROMISE ON CLEANING! GET FLAT 20% FOR NEW USERS"}
              </Desc>
            </InfoContainer>
            <ImgContainer>
              <Image src={HandWash} />
            </ImgContainer>
          </Slide>
        </Link>
      </ChildContainer>
      <ChildContainer>
        <Link to={`/product/3`}>
          <Slide fc={true} bg={"F7F7F7"}>
            <ImgContainer fc={true}>
              <Image fc={true} src={FloorCleaner} />
            </ImgContainer>
            <InfoContainer>
              <Title>{"Floor Cleaner"}</Title>
              <Desc>
                {"DON'T COMPROMISE ON CLEANING! GET FLAT 20% FOR NEW USERS"}
              </Desc>
            </InfoContainer>
          </Slide>
        </Link>
      </ChildContainer>
    </Container>
  );
};

export default RightSlider;
