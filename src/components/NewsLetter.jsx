import { Send } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile, mobileS, mobileSuperSmall } from "../responsive";

const Cointainer = styled.div`
  height: 60vh;

  background: linear-gradient(
      rgba(243, 251, 255, 0) 7.46%,
      rgb(214, 237, 255) 56.5%
    ),
    linear-gradient(rgba(87, 176, 251, 0) 2.71%, rgba(87, 176, 251, 0.5) 65%),
    rgb(214, 237, 255);
  // background: linear-gradient(
  //     0deg,
  //     rgba(242, 246, 255, 0) 0%,
  //     rgb(242, 246, 255) 100%
  //   ),
  //   rgb(255, 255, 255);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${mobile({ height: "45vh", marginTop: "6rem" })}
`;
const Title = styled.h1`
  font-size: 4.3rem;
  margin-bottom: 20px;
  font-family: Roboto;
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
      <form name="newsletter" netlify data-netlify="true">
      <input type="hidden" name="form-name" value="newsletter"/>

      <InputCointainer>
        <Input placeholder="Your email" type="email" name="email" />
        <Button type="submit">
          <Send />
        </Button>
      </InputCointainer>
      </form>
    </Cointainer>
  );
};

export default NewsLetter;
