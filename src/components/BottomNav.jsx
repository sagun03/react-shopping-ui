import {
  Badge,
  BottomNavigation,
  BottomNavigationAction,
  Paper,
} from "@material-ui/core";
import React, { useEffect } from "react";
import HomeIcon from "@material-ui/icons/Home";
import LineWeightIcon from "@material-ui/icons/LineWeight";
import ListAltIcon from "@material-ui/icons/ListAlt";
import CallIcon from "@material-ui/icons/Call";
import ShoppingCartOutlined from "@material-ui/icons/ShoppingCartOutlined";
import { useUserAuth } from "../context/UserAuthContext";
import { useLocation, useNavigate } from "react-router";
import styled from "styled-components";
import { ScreenWith670px } from "../responsive";
import { useSelector } from "react-redux";

const PaperUi = styled(Paper)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1300;
  display: none;
  ${ScreenWith670px({ display: "block" })}
`;

const BottomNavigationActionUi = styled(BottomNavigationAction)`
  margin-top: 0.5rem;
`;

const bottomNavigationValues = {
  0: "/",
  1: "/products",
  2: "/orders",
  3: "/cart",
};
const BottomNav = () => {
  const { user } = useUserAuth();
  const [value, setValue] = React.useState(0);
  const { quantity } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    const getKeyByValue = (object, value) => {
      return +Object.keys(object).find((key) => object[key] === value);
    };
    console.log(getKeyByValue(bottomNavigationValues, location.pathname));
    setValue(getKeyByValue(bottomNavigationValues, location.pathname));
  }, [setValue, location]);
  return (
    <PaperUi elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          navigate(bottomNavigationValues[newValue]);
          if (newValue === value) {
            window.location.reload();
            return;
          }
          if (newValue !== 4) {
            setValue(newValue);
          }
        }}
      >
        <BottomNavigationActionUi label="Home" icon={<HomeIcon />} showLabel />
        <BottomNavigationActionUi
          label="Products"
          icon={<LineWeightIcon />}
          showLabel
        />
        {Boolean(user) && (
          <BottomNavigationActionUi
            label="My Orders"
            icon={<ListAltIcon />}
            showLabel
          />
        )}
        <BottomNavigationActionUi
          label="Cart"
          showLabel
          icon={
            <Badge
              badgeContent={quantity}
              color="primary"
              style={{ marginRight: "2px" }}
            >
              <ShoppingCartOutlined />{" "}
            </Badge>
          }
        />
        <a href="tel:+918755447070">
          {" "}
          <BottomNavigationActionUi
            label="Call Us"
            icon={<CallIcon />}
            showLabel
          />
        </a>
      </BottomNavigation>
    </PaperUi>
  );
};

export default BottomNav;
