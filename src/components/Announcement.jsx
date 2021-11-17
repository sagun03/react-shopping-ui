import styled from "styled-components";

const Container = styled.div`
height: 20px;
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
        <Container>
            Super Deal! Free Shipping on Order Over Rs. 250
        </Container>
    )
}

export default Announcement;
