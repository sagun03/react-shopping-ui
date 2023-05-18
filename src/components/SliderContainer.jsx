import React from "react";
import styled from "styled-components";
import {
  mobile,
  ScreenWith1080px,
  ScreenWith1200px,
  ScreenWith1470px,
  ScreenWith1670px,
  ScreenWith960px,
} from "../responsive";
import RightSlider from "./RightSlider";
import Slider from "./Slider";

const SliderWrapper = styled.div`
  display: flex;
  margin: 7.25rem 0rem 6rem;
  justify-content: center;
  padding: 0 2rem;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  ${mobile({ margin: "6.25rem 0rem" })}
`;

const LeftContainer = styled.div`
  width: 800px;
  height: 500px;

  ${ScreenWith1670px({ width: "700px", height: "450px" })}
  ${ScreenWith1470px({ width: "600px", height: "400px" })}
  ${ScreenWith1200px({ width: "500px", height: "350px" })}
  ${ScreenWith1080px({ width: "440px", height: "300px" })}
  ${ScreenWith960px({ width: "650px", height: "500px" })};
  ${mobile({ height: "450px" })}
`;

const RightContainer = styled.div`
  display: flex;
  width: 800px;
  height: 500px;

  ${ScreenWith1670px({ width: "700px", height: "450px" })}
  ${ScreenWith1470px({ width: "600px", height: "400px" })}
  ${ScreenWith1200px({ width: "500px", height: "350px" })}
  ${ScreenWith1080px({ width: "440px", height: "300px" })}
  ${ScreenWith960px({ width: "650px", height: "500px" })}
`;

const SliderContainer = () => {
  return (
    <SliderWrapper data-test-id="SliderWrapper">
      <LeftContainer>
        <Slider />
      </LeftContainer>
      <RightContainer>
        <RightSlider />
      </RightContainer>
    </SliderWrapper>
  );
};

export default SliderContainer;
