import styled from "styled-components";
import { mobileS, mobileSuperSmall } from "../responsive";

const Container = styled.div`
  height: fit-content;
  background-color: teal;
  color: white;
  display: flex;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  padding: 2px;
  overflow: hidden;
  z-index: 1299;
  position: fixed;
  top: 54px;
  width: 100%;
  ${mobileS({ fontSize: "12px" })}
  ${mobileSuperSmall({ fontSize: "10px" })}
`;
const Announcement = () => {
  return (
    <Container>Super Deal! Free Shipping on Order over Rs. 200</Container>
  );
};

export default Announcement;
