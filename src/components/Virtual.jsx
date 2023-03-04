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
  margin: 5rem auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-around;

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
  font-weight: bold;
`;
const LeftDescription = styled.span`
  font-size: 1.6rem;
  text-transform: uppercase;
  display: block;
  width: 20rem;
  font-family: "Lucida Handwriting", "Lucida Handwriting", cursive;
`;
const LeftBuyNow = styled.span`
  font-size: 1.6rem;
  font-weight: bold;
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

const Virtual = () => {
  return (
    <VirtualContainer>
      <LeftWrapper>
        <LeftHeading>Virtual Try-On</LeftHeading>
        <LeftDescription>Never Buy the wrong Detergent Again!</LeftDescription>
        <LeftBuyNow>Try Now!</LeftBuyNow>
        <Image src={LiquidIcon} />
      </LeftWrapper>

      <RightWrapper>
        <ImageContainer>
          <ReactCompareImage leftImage={After} rightImage={Before} />
        </ImageContainer>
      </RightWrapper>
    </VirtualContainer>
  );
};

export default Virtual;
