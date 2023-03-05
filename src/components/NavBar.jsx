import React from "react";
import styled from "styled-components";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { mobile, ScreenWith670px } from "../responsive";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 0px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const Center = styled.div`
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${ScreenWith670px({
    fontSize: "1.5rem",
  })} ${mobile({ display: "none" })};
`;

const Logo2 = styled.h1`
  display: none;

  ${mobile({
    display: "flex",
    justifyContent: "flex-end",
    fontWeight: "bold",
  })}
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: "center";
  gap: 1rem;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ fontSize: "12px" })}
`;

const NavBar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <MenuItem>REGISTER</MenuItem>
        </Left>
        <Center>
          <Logo>JK Total Washing Solutions</Logo>
          <Logo2>JK</Logo2>
        </Center>
        <Right>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
