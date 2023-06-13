import React from "react";
import ReactCompareImage from "react-compare-image";
import styled from "styled-components";
import LiquidIcon from "../pages/images/virtualLd.png";
import Before from "../pages/images/before.png";
import After from "../pages/images/after.png";
import {
  mobile,
  ScreenWith670px,
  ScreenWith960px,
  mobileS,
} from "../responsive";

const VirtualContainer = styled.div`
  margin: 5rem auto 0rem;
  padding: 5rem 2rem 10rem;
  display: flex;
  justify-content: space-around;
  background: rgb(248, 250, 255);
  ${ScreenWith960px({
    gap: "1rem",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "2rem 0",
    padding: "1rem",
    textAlign: "center",
  })}
`;
const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  justify-content: center;
`;
const LeftHeading = styled.span`
  font-size: 2rem;
  text-transform: uppercase;
  display: block;
  font-family: Roboto;
  font-size: 48px;
  font-weight: 400;
`;
const LeftDescription = styled.span`
  font-size: 1.4rem;
  display: block;
  width: 20rem;
  font-family: Roboto;
  font-weight: 300;
`;
const LeftBuyNow = styled.span`
  font-size: 1.6rem;
  font-weight: bold;
  font-family: Roboto;
`;
const Image = styled.img`
  position: absolute;
  width: 4rem;
  bottom: 4.1rem;
  left: 6.8rem;

  ${ScreenWith960px({
    width: "2rem",
    bottom: "1.8rem",
    left: "8.9rem",
  })}
`;

const RightWrapper = styled.div``;
const ImageContainer = styled.div`
  width: 30rem;

  ${ScreenWith960px({
    margin: "2rem auto 4rem",
  })}

  ${ScreenWith670px({
    width: "25rem",
  })}
  ${mobile({
    width: "20rem",
  })}
  ${mobileS({
    width: "18rem",
  })}
`;

const Svg = styled.svg`
  position: relative;
  right: 0px;
  z-index: 0;
  width: 100%;
  height: auto;
  top: auto;
  bottom: 4rem;
  transform: rotateZ(-180deg);
`;

const Virtual = () => {
  return (
    <>
      <VirtualContainer>
        <LeftWrapper>
          <LeftHeading>Virtual Try-On</LeftHeading>
          <LeftDescription>
            Never Buy the wrong Detergent Again!
          </LeftDescription>
          <LeftBuyNow>Try Now!</LeftBuyNow>
          <Image src={LiquidIcon} />
        </LeftWrapper>

        <RightWrapper>
          <ImageContainer>
            <ReactCompareImage leftImage={After} rightImage={Before} />
          </ImageContainer>
        </RightWrapper>
      </VirtualContainer>
      <Svg
        width="1600"
        height="100"
        viewBox="0 0 1600 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0)">
          <path
            d="M1198 43.1753C1403.45 43.1753 1600 73.398 1600 73.398V0H0.00012207V50.3484C0.00012207 50.3484 225.015 100 477.6 100C756.866 100 883.158 43.1753 1198 43.1753Z"
            fill="#ffff"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0">
            <path d="M0 0H1600V100H0V0Z" fill="white"></path>
          </clipPath>
        </defs>
      </Svg>
    </>
  );
};

export default Virtual;
