import React from "react";
import styled from "styled-components";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { mobile, mobileSuperSmall, ScreenWith670px } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "../firebase";
import { useState } from "react";
import HomeIcon from "@material-ui/icons/Home";

const Container = styled.div`
  height: 60px;
  overflow: hidden;
  background-color: white;
  position: fixed;
  top: 20px;
  width: 100%;
  z-index: 1299;
  ${mobile({ height: "50px", top: "20px" })}
  ${mobileSuperSmall({ top: "15px" })}
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
  display: flex;
  align-items: center;
  ${mobile({ fontSize: "12px" })}
`;

const NavBar = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);
  const { quantity } = useSelector((state) => state.cart);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to="/">
            <MenuItem>
              <HomeIcon />
            </MenuItem>
          </Link>
          {user.accessToken ? (
            <Link to="/orders">
              <MenuItem> Orders</MenuItem>
            </Link>
          ) : (
            <Link to="/register">
              <MenuItem>REGISTER</MenuItem>
            </Link>
          )}
        </Left>
        <Link to="/">
          <Center>
            <Logo>JK Total Washing Solutions</Logo>
            <Logo2>JK</Logo2>
          </Center>
        </Link>
        <Right>
          {user.accessToken ? (
            <MenuItem>
              {(user?.displayName?.slice(0, 5)?.toUpperCase() ||
                user?.email?.slice(0, 5)?.toUpperCase() ||
                user?.phoneNumber?.slice(0, 5)) + ".."}
            </MenuItem>
          ) : (
            <Link to="/login">
              <MenuItem>SIGN IN</MenuItem>
            </Link>
          )}
          <MenuItem>
            <Link to="/cart">
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
