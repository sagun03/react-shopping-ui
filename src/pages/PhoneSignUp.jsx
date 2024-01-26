import {
  Backdrop,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormHelperText,
} from "@material-ui/core";
import React from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Container, Wrapper, Title, Form, Button } from "./Register";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import { Link } from "./Login";
import { useUserAuth } from "../context/UserAuthContext";
import OTPInput from "react-otp-input";
import { Helmet } from "react-helmet-async";

const PhoneSignUp = () => {
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");
  const [otp, setOtp] = useState("");
  const [openOtpDialog, setOpenOtpDialog] = useState(false);
  const [confirmObj, setConfirmObj] = useState({});
  const { setUpRecaptcha } = useUserAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const getOtp = async (e) => {
    e.preventDefault();
    if (number === "" || number === undefined) {
      return setError("enter valid number");
    }
    try {
      const response = await setUpRecaptcha(number);
      if (response) {
        setOpenOtpDialog(true);
        setConfirmObj(response);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const verifyOtp = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (otp === "" || otp === null) return;
    try {
      setError("");
      await confirmObj?.confirm(otp);
      navigate("/");
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };
  const onChangeHandler = (number) => {
    if (error) setError("");

    setNumber(number);
  };
  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Use mobile nummber to login" />
        <link rel="canonical" href="/phonesignup" />
      </Helmet>

      <Container>
        <Wrapper>
          <Title>Login With Phone</Title>
          {error && (
            <Title>
              <FormHelperText error={true}>{error}</FormHelperText>
            </Title>
          )}
          <Form onSubmit={getOtp}>
            <PhoneInput
              defaultCountry="IN"
              placeholder="Enter phone number"
              value={number}
              onChange={onChangeHandler}
            />
            <div id="recaptcha-container"></div>
            <RouterLink to="/login">
              <Link>
                <Title>Cancel</Title>
              </Link>
            </RouterLink>
            <Button type="submit">Send OTP</Button>
          </Form>
          <Dialog open={openOtpDialog}>
            <DialogTitle>
              Enter Verification Code
              {error && (
                <Title>
                  <FormHelperText error={true}>{error}</FormHelperText>
                </Title>
              )}
            </DialogTitle>
            <DialogContent
              style={{ justifyContent: "center", display: "flex" }}
            >
              {" "}
              <OTPInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span>-</span>}
                renderInput={(props) => <input {...props} />}
              />
            </DialogContent>
            <DialogActions
              style={{ justifyContent: "center", display: "flex" }}
            >
              <Title onClick={() => setOpenOtpDialog(false)}>Cancel</Title>
              <Button onClick={verifyOtp}>Verify</Button>
            </DialogActions>
          </Dialog>
        </Wrapper>
        <Backdrop open={loading} onClick={() => setLoading(false)}>
          <CircularProgress color="primary" />
        </Backdrop>
      </Container>
    </>
  );
};

export default PhoneSignUp;
