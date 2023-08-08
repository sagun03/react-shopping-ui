import React from "react";
import styled from "styled-components";
import { ShoppingCartOutlined } from "@material-ui/icons";
import {
  Backdrop,
  Badge,
  CircularProgress,
  ListItemIcon,
  ListItemText,
  Menu,
  withStyles,
} from "@material-ui/core";
import { mobile, mobileSuperSmall, ScreenWith670px } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "../firebase";
import { useState } from "react";
import HomeIcon from "@material-ui/icons/Home";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useUserAuth } from "../context/UserAuthContext";
import Alert from "./Alert";
import Logos from "../pages/images/logo.png";

const Container = styled.div`
  height: 55px;
  overflow: hidden;
  background-color: white;
  position: fixed;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  top: 0px;
  width: 100%;
  z-index: 1299;
  ${mobile({ top: "0px" })}
  ${mobileSuperSmall({ top: "0px" })}
`;

const Wrapper = styled.div`
  padding: 10px 0px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Center = styled.div`
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: 400;

  ${ScreenWith670px({
    fontSize: "1.5rem",
  })} ${mobile({ display: "none" })};
`;

const Logo2 = styled.div`
  display: none;
  font-weight: 400;

  ${mobile({
    display: "flex",
    height: "38px",
    marginRight: "5px",
  })}
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: "center";
  gap: 1rem;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  ${mobile({ fontSize: "12px" })}
`;

const StyledMenu = withStyles({
  paper: {
    background: "#2979ff",
    color: "white",
    marginTop: "10px",
    "&:hover": {
      background: "teal",
    },
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(() => ({
  root: {
    "&:focus": {
      backgroundColor: "blue",
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: "white",
      },
    },
  },
}))(MenuItem);
const StyledListIcon = withStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
    color: "white !important",
  },
}))(ListItemIcon);
const StyledListText = withStyles(() => ({
  root: {
    marginRight: "18px",
  },
}))(ListItemText);

const NavBar = () => {
  const [user, setUser] = useState({});
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [error, setError] = useState(false);
  const { logOut } = useUserAuth();
  const [loading, setLoading] = useState(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);
  const onClickHandler = async (e) => {
    try {
      setAnchorEl(null);
      setLoading(true);
      e.preventDefault();
      await logOut();
      setTimeout(() => {
        setLoading(false);
        window.location.reload();
      }, 1000);
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError(true);
    }
  };
  const { quantity } = useSelector((state) => state.cart);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to="/">
            <MenuItem>
              <HomeIcon />
            </MenuItem>
          </Link>
          {user.accessToken ? (
            <Link to="/orders">
              <MenuItem>My Orders</MenuItem>
            </Link>
          ) : (
            <Link to="/register">
              <MenuItem>REGISTER</MenuItem>
            </Link>
          )}
        </Left>
        <Link to="/">
          <Center>
            <Logo>JK Total Washing Solutions</Logo>
            <Logo2>
              {" "}
              <img src={Logos} alt="logo" />
            </Logo2>
          </Center>
        </Link>
        <Right>
          {user.accessToken ? (
            <>
              <MenuItem onClick={handleClick}>
                {(user?.displayName?.slice(0, 5)?.toUpperCase() ||
                  user?.email?.slice(0, 5)?.toUpperCase() ||
                  user?.phoneNumber?.slice(0, 5)) + ".."}
              </MenuItem>
              <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <StyledMenuItem onClick={onClickHandler}>
                  <StyledListIcon>
                    <ExitToAppIcon fontSize="small" />
                  </StyledListIcon>
                  <StyledListText primary="Logout" />
                </StyledMenuItem>
              </StyledMenu>
            </>
          ) : (
            <Link to="/login">
              <MenuItem>SIGN IN</MenuItem>
            </Link>
          )}
          <MenuItem>
            <Link to="/cart">
              <Badge
                badgeContent={quantity}
                color="primary"
                style={{ marginRight: "10px" }}
              >
                <ShoppingCartOutlined />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
      {error && (
        <Alert
          open={error}
          type={"error"}
          message={"Something Went Wrong, Please try again"}
          setOpen={setError}
        />
      )}
      <Backdrop open={loading} onClick={() => setLoading(false)}>
        <CircularProgress color="primary" />
      </Backdrop>
    </Container>
  );
};

export default NavBar;
