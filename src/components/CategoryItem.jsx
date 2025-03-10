import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  mobileS,
  ScreenWith1200px,
  ScreenWith1470px,
  ScreenWith670px,
  mobileSuperSmall,
  mobile,
} from "../responsive";

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  flex: 7;
`;

const Image = styled.img`
  display: block;
height: 100%;
  // ${mobileS({ width: "8rem" })}
  // ${mobileSuperSmall({ width: "7rem" })}
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  color: black;
  font-weight: 600;
  font-size: 1.7rem;
  margin-bottom: 0.5rem;

  ${ScreenWith1470px({ fontSize: "1.6rem" })}
  ${ScreenWith1200px({ fontSize: "1.5rem" })}
  ${ScreenWith670px({ fontSize: "1.3rem" })}
  ${mobileS({ fontSize: "1.2rem" })}
  ${mobileSuperSmall({ fontSize: "1rem" })}
`;

const Detail = styled.div`
  font-size: 1rem;
  color: #555;
  margin-top: 10px;
  line-height: 1.5;
  ${ScreenWith1470px({ fontSize: "0.9rem", marginTop: "1rem" })}
  ${ScreenWith1200px({ fontSize: "0.8rem", marginTop: ".5rem" })}
  ${ScreenWith670px({ fontSize: "0.8rem", marginTop: ".5rem" })}
  ${mobileS({ fontSize: ".8rem", marginTop: ".5rem" })}
  ${mobileSuperSmall({ fontSize: "0.8rem", marginTop: ".5rem" })};
`;

const Price = styled.span`
  font-weight: 300;
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
  color: #E74C3C;
  ${ScreenWith1470px({ fontSize: "1.6rem" })}
  ${ScreenWith1200px({ fontSize: "1.4rem" })}
  ${ScreenWith670px({ fontSize: "1.1rem" })}
`;

const DiscountTag = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  background-color: red;
  color: white;
  padding: 5px 10px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 50%;
  transform: translate(50%, -50%);
`;

const Button = styled.button`
  cursor: pointer;
  font-weight: 600;
  background-color: #E74C3C;
  padding: 15px 0px;
  border-radius: 15px;
  text-transform: uppercase;
  width: 100%;
  border: none;
  color: white;
  transition: all 0.5s ease;
  &:hover {
    background-color: #C0392B;
    transform: scale(1.05);
  }
`;

const ImageContainer = styled.div`
  flex: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const DiscountText = styled.span`
  width: fit-content;
  ${mobile({
    fontSize: ".8rem",
    padding: "2px 5px",
    width: "fit-content",
  })}
  ${ScreenWith670px({
    fontSize: "1rem",
  })}
  font-size: 1.3rem;
  color: green;
  padding: 2px 5px;
  font-weight: bold;
  border: 1px solid green;
  margin-bottom: 1rem;
`;

const CategoryItem = ({ img, title, detail, price, id, defaultSize }) => {
  const discount = 5; // 5% discount, for example
  const discountedPrice = price[defaultSize] - price[defaultSize] * (discount / 100);

  return (
    <>
      <InfoContainer>
        <Info>
          <Title>{title}</Title>
          <Detail>{detail}</Detail>
        </Info>
        <Price>Rs. {price[defaultSize]}</Price>
        <Price2>Rs. {discountedPrice}</Price2>
        <DiscountText>{discount}% OFF</DiscountText>
        <Link to={`/product/${id}`}>
          <Button>Shop Now</Button>
        </Link>
      </InfoContainer>
      <ImageContainer>
      <Image src={img[defaultSize]} />
      </ImageContainer>
    </>
  );
};

export default CategoryItem;
