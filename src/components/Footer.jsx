import { MailOutline, Phone, Room, WhatsApp } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile, ScreenWith670px } from "../responsive";

const Cointainer = styled.div`
  display: flex;
  background: #1d2b36;
  padding-top: 5rem;
  ${mobile({ flexDirection: "column" })}
  color: white;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
  ${ScreenWith670px({ display: "none" })}
`;
const Title = styled.h2`
  margin-bottom: 30px;
  color: white;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const Logo = styled.h1`
  color: white;
`;

const Desc = styled.p`
  margin: 20px 0px;
  color: white;
`;

const SocialCointainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  word-wrap: break-word;
  color: white;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Cointainer>
      <Left>
        <Logo>Total Washing Solutions</Logo>
        <Desc>
          Manufacturer of all type of liquids , detergent powder & cake ,oil
          soap ,checmical trading in DHAMPUR
        </Desc>
        <SocialCointainer>
          {/* <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon> */}
          <SocialIcon color="25D366">
            <a
              href={`https://wa.me/919560363492?text=${encodeURIComponent(
                `Hi I Visited your side`
              )}`}
            >
              <WhatsApp />
            </a>
          </SocialIcon>
        </SocialCointainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>
            <Link to="/">Home </Link>
          </ListItem>
          <ListItem>
            <Link to="/cart">Cart</Link>
          </ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          GURUNANAK GRAM UDYOG SEWA SANTHAN , 2KM MILE STONE NAGINA ROAD
          DHAMPUR, Uttar Pradesh 246761, India
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +91 8755447070
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />{" "}
          saluja.pawan6@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Cointainer>
  );
};

export default Footer;
