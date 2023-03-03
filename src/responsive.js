import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 550px) {
      ${props}
    }
  `;
};

export const sliderHideCustom = (props) => {
  return css`
    @media only screen and (min-width: 539px) {
      ${props}
    }
  `;
};

export const ScreenWith1200px = (props) => {
  return css`
    @media only screen and (max-width: 1299px) {
      ${props}
    }
  `;
};

export const ScreenWith1080px = (props) => {
  return css`
    @media only screen and (max-width: 1099px) {
      ${props}
    }
  `;
};

export const ScreenWith960px = (props) => {
  return css`
    @media only screen and (max-width: 990px) {
      ${props}
    }
  `;
};

export const ScreenWith670px = (props) => {
  return css`
    @media only screen and (max-width: 670px) {
      ${props}
    }
  `;
};

export const ScreenWith1670px = (props) => {
  return css`
    @media only screen and (max-width: 1699px) {
      ${props}
    }
  `;
};

export const ScreenWith1470px = (props) => {
  return css`
    @media only screen and (max-width: 1499px) {
      ${props}
    }
  `;
};

export const mobileS = (props) => {
  return css`
    @media only screen and (max-width: 390px) {
      ${props}
    }
  `;
};

export const mobileSuperSmall = (props) => {
  return css`
    @media only screen and (max-width: 290px) {
      ${props}
    }
  `;
};
