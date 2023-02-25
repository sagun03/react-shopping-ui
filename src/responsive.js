import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 415px) {
      ${props}
    }
  `;
};

export const ScreenWith1200px = (props) => {
  return css`
    @media only screen and (max-width: 1280px) {
      ${props}
    }
  `;
};

export const ScreenWith1080px = (props) => {
  return css`
    @media only screen and (max-width: 1080px) {
      ${props}
    }
  `;
};

export const ScreenWith960px = (props) => {
  return css`
    @media only screen and (max-width: 960px) {
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
    @media only screen and (max-width: 1680px) {
      ${props}
    }
  `;
};

export const ScreenWith1470px = (props) => {
  return css`
    @media only screen and (max-width: 1480px) {
      ${props}
    }
  `;
};
