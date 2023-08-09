import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  mobileS,
  ScreenWith1200px,
  ScreenWith1470px,
  ScreenWith670px,
  mobileSuperSmall,
} from "../responsive";

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60%;
`;

const Image = styled.img`
  display: block;
  // width: 10rem;

  // ${mobileS({ width: "8rem" })}
  // ${mobileSuperSmall({ width: "7rem" })}
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  color: black;
  font-weight: 400;
  font-size: 1.7rem;

  ${ScreenWith1470px({ fontSize: "1.6rem" })}
  ${ScreenWith1200px({ fontSize: "1.5rem" })}
  ${ScreenWith670px({ fontSize: "1.3rem", marginTop: "1rem" })}
  ${mobileS({ fontSize: "1.2rem", marginTop: "1.2rem" })}
  ${mobileSuperSmall({ fontSize: "1rem" })}
`;

const Detail = styled.div`
  font-size: 1rem;
  margin-top: 20px;
  ${ScreenWith1470px({ fontSize: "0.9rem", marginTop: "1rem" })}
  ${ScreenWith1200px({ fontSize: "0.8rem", marginTop: ".5rem" })}
    ${ScreenWith670px({ fontSize: "0.8rem", marginTop: ".5rem" })}
    ${mobileS({ fontSize: ".8rem", marginTop: ".5rem" })}
    ${mobileSuperSmall({ fontSize: "0.8rem", marginTop: ".5rem" })};
`;
const Price = styled.span`
  font-weight: 100;
  text-decoration: line-through;
  color: #615F5F;
  font-size: 1.7rem;
  ${ScreenWith1470px({ fontSize: "1.6rem" })}
  ${ScreenWith1200px({ fontSize: "1.4rem" })}
  ${ScreenWith670px({ fontSize: "1.1rem" })}
`;
const Price2 = styled.span`
  font-weight: bold;
  font-size: 1.7rem;
  ${ScreenWith1470px({ fontSize: "1.6rem" })}
  ${ScreenWith1200px({ fontSize: "1.4rem" })}
  ${ScreenWith670px({ fontSize: "1.1rem" })}
`;

const Button = styled.button`
  cursor: pointer;
  font-weight: 600;
  background-color: transparent;
  padding: 15px 0px;
  border-radius: 15px;
  text-transform: uppercase;
  width: 100%;
  transition: all 0.5s ease;
  &:hover {
    background-color: white;
    transform: scale(1.1);
  }
`;

const CategoryItem = ({ img, title, detail, price, id, defaultSize }) => {
  return (
    <>
      <InfoContainer>
        <Info>
          <Title>{title}</Title>
          <Detail>{detail}</Detail>
        </Info>
        <Price>Rs. {price[defaultSize]}</Price>
        <Price2
        >  
          Rs. {price[defaultSize] - price[defaultSize] * 0.05}
        </Price2>
        <Link to={`/product/${id}`}>
          <Button>Shop Now</Button>
        </Link>
      </InfoContainer>
      <Image src={img[defaultSize]} />
    </>
  );
};

export default CategoryItem;
