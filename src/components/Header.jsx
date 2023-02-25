import React from "react";
import styled from "styled-components";

const Container = styled.div``;
const Logo = styled.div``;
const RightSide = styled.div``;
const Menu = styled.div``;
const Search = styled.input``;

const Header = () => {
  return (
    <Container>
      <Logo>logo</Logo>
      <RightSide>
        <Menu></Menu>
      </RightSide>
      <Search type="text" />
      <span>Cart</span>
    </Container>
  );
};

export default Header;
