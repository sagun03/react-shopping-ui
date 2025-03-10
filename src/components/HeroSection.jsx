import React from "react";
import styled from "styled-components";
import { Button, Typography } from "@material-ui/core";
import { mobile, tablet } from "../responsive";
import { useNavigate } from "react-router-dom";

// Styled Components
const HeroSection = styled.section`
  background: linear-gradient(90deg, #2bb8ff 0%, #1a2999 100%);
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  flex: 2.5;

  ${tablet({
    padding: "30px",
  })}

  ${mobile({
    flex: 1,
    padding: "20px",
  })}
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  gap: 5rem;
  width: 100%;
  max-width: 1200px;

  ${tablet({
    flexDirection: "column",
    textAlign: "center",
    gap: "3rem",
  })}

  ${mobile({
    flexDirection: "column",
    textAlign: "center",
    gap: "2rem",
  })}
`;

const ContentWrapper = styled.div`
  flex: 1;
  max-width: 600px;

  ${tablet({
    maxWidth: "80%",
  })}

  ${mobile({
    maxWidth: "100%",
  })}
`;

const Title = styled(Typography)`
  font-weight: bold;
  font-size: 3.5rem;

  ${tablet({
    fontSize: "2.8rem",
  })}

  ${mobile({
    fontSize: "2rem",
  })}
`;

const Des = styled(Typography)`
  font-weight: 700;
  margin-bottom: 20px;
  font-size: 1.25rem;

  ${tablet({
    fontSize: "1.1rem",
  })}

  ${mobile({
    fontSize: "1rem",
  })}
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;

  ${tablet({
    flexDirection: "column",
  })}

  ${mobile({
    flexDirection: "column",
    width: "100%",
  })}
`;

const StyledButton = styled(Button)`
  text-transform: none;
  padding: 10px 24px;
  font-weight: bold;

  ${mobile({
    width: "100%",
  })}
`;

// Main Component
const HeroSectionComponent = () => {
  const navigate = useNavigate();

  return (
    <HeroSection>
      <Container>
        <ContentWrapper>
          <Title variant="h3" component="h1">
            Brighten Your Home with Our Cleaning Solutions
          </Title>
        </ContentWrapper>
        <ContentWrapper>
          <Des variant="subtitle1" component="p" gutterBottom>
            Discover the power of cleanliness with JK’s vibrant range of
            cleaning products. From detergents to toilet cleaners, we have
            everything you need to keep your home sparkling.
          </Des>
          <ButtonContainer>
            <StyledButton
              style={{ background: "#E74C3C" }}
              variant="contained"
              color="primary"
              onClick={() => navigate("/products")}
            >
              Buy Now
            </StyledButton>
            <StyledButton variant="text" style={{ color: "white" }}>
              {`Learn More >`}
            </StyledButton>
          </ButtonContainer>
        </ContentWrapper>
      </Container>
    </HeroSection>
  );
};

export default HeroSectionComponent;
