import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 500px;
  margin: 130px 40px 60px;
  padding: 20px;
  background: aliceblue;
`;

const OrdersComponent = () => {
  return (
    <>
      <Wrapper>No orders yet... but I can smell them coming!</Wrapper>
    </>
  );
};

export default OrdersComponent;
