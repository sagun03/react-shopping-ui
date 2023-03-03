import React from "react";
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
  width: 10rem;

  ${mobileS({ width: "8rem" })}
  ${mobileSuperSmall({ width: "7rem" })}
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  color: black;
  font-weight: bold;
  font-family: Verdana, Fantasy;
  font-size: 1.7rem;

  ${ScreenWith1470px({ fontSize: "1.6rem" })}
  ${ScreenWith1200px({ fontSize: "1.5rem" })}
  ${ScreenWith670px({ fontSize: "1.3rem", marginTop: "1rem" })}
  ${mobileS({ fontSize: "1rem", marginTop: "1.2rem" })}
  ${mobileSuperSmall({ fontSize: "0.9rem" })}
`;

const Detail = styled.div`
  font-size: 1rem;
  font-family: "Lucida Handwriting", "Lucida Handwriting", cursive;
  ${ScreenWith1470px({ fontSize: "0.9rem" })}
  ${ScreenWith1200px({ fontSize: "0.8rem" })}
  ${ScreenWith670px({ fontSize: "0.6rem", marginTop: ".5rem" })}
  ${mobileS({ fontSize: ".8rem", marginTop: ".rem" })}
  ${mobileSuperSmall({ fontSize: "0.8rem" })}
`;
const Price = styled.div`
  font-weight: bold;
  font-size: 1.7rem;
  font-family
  ${ScreenWith1470px({ fontSize: "1.6rem" })}
  ${ScreenWith1200px({ fontSize: "1.4rem" })}
  ${ScreenWith670px({ fontSize: "1.1rem" })}
`;

const Button = styled.button`
  cursor: pointer;
  border: none;
  color: gray;
  font-weight: 600;
  padding: 15px 0px;
  border-radius: 15px;
  text-transform: uppercase;
  background-color: #e9f5f5
  transition: all 0.5s ease;
  &:hover {
    background-color: white;
    transform: scale(1.1);
  }
`;

const CategoryItem = ({ img, title, detail, price }) => {
  return (
    <>
      <InfoContainer>
        <Info>
          <Title>{title}</Title>
          <Detail>{detail}</Detail>
        </Info>
        <Price>Rs. {price}</Price>
        <Button>Shop Now</Button>
      </InfoContainer>
      <Image src={img} />
    </>
  );
};

export default CategoryItem;
