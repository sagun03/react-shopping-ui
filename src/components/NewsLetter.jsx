import { Send } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile, mobileS, mobileSuperSmall } from "../responsive";

const Cointainer = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${mobile({ height: "45vh", marginTop: "6rem" })}
`;
const Title = styled.h1`
  font-size: 4.3rem;
  margin-bottom: 20px;
  ${mobileS({ fontSize: "3.3rem" })}
  ${mobileSuperSmall({ fontSize: "2rem" })}
`;
const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center", fontSize: "20px" })}
`;
const InputCointainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const NewsLetter = () => {
  return (
    <Cointainer>
      <Title>NewsLetter</Title>
      <Description>Get Timely updates from your favorite products.</Description>
      <InputCointainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputCointainer>
    </Cointainer>
  );
};

export default NewsLetter;
