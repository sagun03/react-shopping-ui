import { SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import { ScreenWith670px } from "../responsive";
import { getPrice } from "../utils/helper";
import { useDispatch } from "react-redux";
import { addProducts } from "../redux/cartRedux";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import Alert from "./Alert";

const Info = styled.div`
  opacity: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
  gap: 2rem;
`;
const WrapperContainer = styled.div`
  height: 30rem;
  margin: 20px;
  position: relative;
  overflow: hidden;
  ${ScreenWith670px({
    margin: 0,
  })}
`;

const Content = styled.div`
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  margin: 10px;
`;

const Container = styled.div`
  margin: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color #fbfcfe;
// background-image linear-gradient(315deg, #e7eff9 0%, #cfd6e6 74%);
  // background-image: linear-gradient(
  //   95.2deg,
  //   rgba(173, 252, 234, 1) 26.8%,
  //   rgba(192, 229, 246, 1) 64%
  // );
  position: relative;
  height: 75%;
  // box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
  //   rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  &:hover ${Info} {
    opacity: 1;
  }
`;
// const Circle = styled.div`
//   width: 8rem;
//   height: 7rem;
//   border-radius: 50%;
//   background-color: white;
//   position: absolute;
// `;

const Image = styled.img`
  z-index: 2;
  height: 90%;
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

const Product = ({ img, id, title, size, ...rest }) => {
  const dispatch = useDispatch();
  const [openAlert, setOpenAlert] = useState(false);

  const handleClick = () => {
    dispatch(
      addProducts({
        ...rest,
        img,
        title,
        size,
        quantity: 1,
        id,
        price: getPrice(size),
        productId: uuidv4(),
      })
    );
    setOpenAlert(true);
  };
  return (
    <WrapperContainer>
      <Container>
        {/* <Circle /> */}
        <Image src={img} />
        <Info>
          <Icon onClick={handleClick}>
            <ShoppingCartOutlined />
          </Icon>
          <Icon>
            <Link to={`/product/${id}`}>
              <SearchOutlined />
            </Link>
          </Icon>
        </Info>
      </Container>
      <Content>
        <span style={{ marginTop: "10px" }}>Name: {title}</span>
        <span style={{ marginTop: "10px" }}> Size: {size}</span>
        <span style={{ marginTop: "10px" }}> Price: Rs. {getPrice(size)}</span>
      </Content>
      {openAlert && (
        <Alert
          open={openAlert}
          type={"success"}
          message={"Your Product has been added into Cart"}
          setOpen={setOpenAlert}
        />
      )}
    </WrapperContainer>
  );
};

export default Product;
