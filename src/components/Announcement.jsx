import styled from "styled-components";

const Container = styled.div`
  height: fit-content;
  background-color: teal;
  color: white;
  display: flex;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  padding: 2px;
`;
const Announcement = () => {
  return (
    <Container>Super Deal! Extra 20% Discount on Order Over Rs. 200</Container>
  );
};

export default Announcement;
