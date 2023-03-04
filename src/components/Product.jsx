import { SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components";
import React from "react";

const Info = styled.div`
  opacity: 0;
  height: inherit;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
  gap: 2rem;
`;

const Container = styled.div`
  margin: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(135deg, #abdcff 10%, #0396ff 100%);
  position: relative;
  height: inherit;

  &:hover ${Info} {
    opacity: 1;
  }
`;
const Circle = styled.div`
  width: 8rem;
  height: 7rem;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  z-index: 2;
  height: 7rem;
  margin-left: 1rem;
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Product = ({ img }) => {
  return (
    <Container>
      <Circle />
      <Image src={img} />x
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        {/* <Icon>
          <FavoriteBorderOutlined />
        </Icon> */}
      </Info>
    </Container>
  );
};

export default Product;
