import React from "react";
import GoogleMapReact from "google-map-react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Map from "../pages/images/maps.png";
import styled from "styled-components";
import { mobile } from "../responsive";
// const AnyReactComponent = ({ text }) => <div>{text}</div>;

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5rem;
`;
const Image = styled.img`
  transition: transform 2s;
  &:hover {
    transform: scale(1.25);
  }
  cursor: pointer;
  ${mobile({
    width: "300px",
  })}
`;
const Heading = styled.h1`
  font-family: Roboto;
  font-size: 30px;
  font-weight: 400;
`;
const Wrapper = styled.div`
  // background: linear-gradient(
  //   rgba(243, 251, 255, 0) 7.46%,
  //   rgb(214, 237, 255) 56.5%
  // );
  // background: linear-gradient(
  //     0deg,
  //     rgba(242, 246, 255, 0) 0%,
  //     rgb(242, 246, 255) 100%
  //   ),
  //   rgb(255, 255, 255);
  display: flex;
  justify-content: center;
  padding: 0px 0px 50px;
  text-align: center;
`;
const SimpleMap = () => {
  const defaultProps = {
    address:
      "GURUNANAK GRAM UDYOG SEWA SANTHAN , 2KM MILE STONE NAGINA ROAD DHAMPUR, DHAMPUIR, Uttar Pradesh 246761",
    center: {
      lat: 29.324006102523754,
      lng: 78.49786334293917,
    },
    zoom: 11,
  };
  const location = {
    address:
      "GURUNANAK GRAM UDYOG SEWA SANTHAN , 2KM MILE STONE NAGINA ROAD DHAMPUR, DHAMPUIR, Uttar Pradesh 246761",
    lat: 29.324006102523754,
    lng: 78.49786334293917,
  };

  return (
    // Important! Always set the container height explicitly
    <>
      <Wrapper>
        <Heading>Come Visit Us</Heading>
      </Wrapper>
      <ImgContainer>
        <Image
          src={Map}
          alt="map"
          onClick={() =>
            window.open(
              "https://www.google.com/maps/place/JK+DETERGENT+POWDER+AND+SOAP/@29.3200918,78.4992511,15z/data=!4m14!1m7!3m6!1s0x390bc86819fb8d33:0x7052b3e4be01f611!2sJK+DETERGENT+POWDER+AND+SOAP!8m2!3d29.3235856!4d78.4972448!16s%2Fg%2F11ckqr8k0t!3m5!1s0x390bc86819fb8d33:0x7052b3e4be01f611!8m2!3d29.3235856!4d78.4972448!16s%2Fg%2F11ckqr8k0t?entry=ttu",
              "_blank"
            )
          }
        />
      </ImgContainer>
    </>
  );
};

export default SimpleMap;
