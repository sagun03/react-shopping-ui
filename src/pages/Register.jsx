import styled from "styled-components";
import jk from "./images/jk.jpeg";
import { mobile } from "../responsive";
import { useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import { FormHelperText } from "@material-ui/core";
import { useNavigate } from "react-router";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${jk}) center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

export const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const [userInfo, setUserInfo] = useState({});
  const [error, setError] = useState("");
  const { signUp } = useUserAuth();
  const navigate = useNavigate();
  const handleOnChange = (key, value) => {
    setUserInfo((state) => ({ ...state, [key]: value }));
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const { email = "", password = "" } = userInfo;
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setUserInfo({});
      setError(err.message);
    }
  };
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        {error && (
          <Title>
            <FormHelperText error={true}>{error}</FormHelperText>
          </Title>
        )}
        <Form onSubmit={handleSubmit}>
          {/* <Input placeholder="name"  />
          <Input placeholder="last name" />
          <Input placeholder="username" /> */}
          <Input
            placeholder="email"
            onChange={(e) => handleOnChange("email", e.target.value)}
          />
          <Input
            placeholder="password"
            onChange={(e) => handleOnChange("password", e.target.value)}
          />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
