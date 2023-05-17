import {
  Box,
  Button,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { mobile, ScreenWith670px } from "../responsive";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";
import smiley from "../pages/images/smiley.png";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 20px 60px;
  ${ScreenWith670px({ margin: "20px" })}
`;

const CustomStepper = styled(Stepper)`
  ${mobile({ flexDirection: "column !important", gap: "10px" })}
`;

const CompleteOrder = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  height: 300px;
  margin: 40px;
  padding: 10px;
  background: aliceblue;
  ${mobile({ height: "300px", margin: "10px", padding: "20px" })}

  h6 {
    ${mobile({ fontSize: "12px" })}
  }
  h5 {
    ${mobile({ fontSize: "16px", textAlign: "center" })}
  }
`;

const Image = styled.img`
  height: 60px;
`;

const CheckoutForm = () => {
  const steps = ["Shipping address", "Payment details", "Review your order"];

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <AddressForm />;
      case 1:
        return <PaymentForm />;
      case 2:
        return <Review />;
      default:
        throw new Error("Unknown step");
    }
  };
  return (
    <Wrapper>
      {" "}
      <Typography
        component="h1"
        variant="h4"
        align="center"
        style={{ background: "whitesmoke", padding: "10px" }}
      >
        Checkout
      </Typography>
      <CustomStepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </CustomStepper>
      {activeStep === steps.length ? (
        <CompleteOrder>
          <Image src={smiley} alt="smiley" />
          <Typography variant="h5" gutterBottom>
            Thank you for your order.
          </Typography>
          <Typography variant="subtitle1" style={{ textAlign: "center" }}>
            Your order number is #2001539. We have emailed your order
            confirmation, and will send you an update when your order has
            shipped.
          </Typography>
        </CompleteOrder>
      ) : (
        <React.Fragment>
          {getStepContent(activeStep)}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              margin: "20px 0px",
            }}
          >
            {activeStep !== 0 && (
              <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                Back
              </Button>
            )}
            <Button
              variant="contained"
              onClick={handleNext}
              color="primary"
              sx={{ mt: 3, ml: 1 }}
            >
              {activeStep === steps.length - 1 ? "Place order" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Wrapper>
  );
};

export default CheckoutForm;
