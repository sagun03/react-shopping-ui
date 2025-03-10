/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { SwipeableDrawer, List, ListItem, ListItemText, Divider, Collapse, ListItemIcon, styled, IconButton } from "@material-ui/core";
import { ExpandLess, ExpandMore, ChevronLeft } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import { CATEGORY_MENU, flattenProductSizes } from "../utils/helper";
import { popularProducts } from "../utils/data";

const DrawerHeader = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  color: "white",
  // necessary for content to be below app bar
  // ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));
const activeTabStyle = {
  color: "#FFD700", // Highlight color for active tab
  fontWeight: "bold",
};

const SideBar = ({ anchor, toggleDrawer }) => {
  const flattenedProducts = popularProducts;
  const location = useLocation();
  const [openProducts, setOpenProducts] = useState(false);
  const [openCategories, setOpenCategories] = useState(false);

  const handleToggleProducts = () => setOpenProducts(!openProducts);
  const handleToggleCategories = () => setOpenCategories(!openCategories);

  const textStyle = {
    color: "#FFFFFF",
    fontSize: "14px",
    fontWeight: "bold",
    pointer: "cursor",
    transition: "all 0.3s ease"
  };

  const handleClick = (event, size) => {
    localStorage.setItem("size", size);
    toggleDrawer(false)(event);
  };

  const getActiveTabStyle = (path) => {
    return location.pathname === path ? activeTabStyle : {};
  };

  return (
    <SwipeableDrawer
      open={anchor}
      anchor="left"
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
      style={{
        transition: "all 0.3s ease"
      }}
      PaperProps={{
        style: {
          width: "100%",
          background: "linear-gradient(180deg, #2691E3, #0A5BD1)",
          overflow: "auto",
          top: "68px !important",
          height: "100%",
          paddingBottom: "80px",
          paddingTop: "20px"
        }
      }}
    >
       <DrawerHeader>
          <IconButton onClick={toggleDrawer(false)}>
             <ChevronLeft style={{ color: textStyle.color }} />
          </IconButton>
        </DrawerHeader>
        <Divider />
      <List style={{ padding: 16 }}>
        <ListItem button component={Link} to="/"  onClick={() => toggleDrawer(false)}
          style={getActiveTabStyle('/')}>
          <ListItemText primary="HOME" style={textStyle} />
        </ListItem>
        <Divider style={{ margin: "10px 0" }} />

        <ListItem button onClick={handleToggleProducts} style={getActiveTabStyle('/products')}>
          <ListItemText primary="OUR PRODUCTS" style={textStyle} />
          {openProducts ? (
            <ExpandLess style={{ color: textStyle.color }} />
          ) : (
            <ExpandMore style={{ color: textStyle.color }} />
          )}
        </ListItem>
        <Collapse in={openProducts} timeout="auto" unmountOnExit>
          <List component="div">
            {flattenedProducts.map((product) => (
              <ListItem
                key={product.id}
                button
                style={{
                  paddingLeft: 32,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": { transform: "scale(1.05)" }
                }}
                onClick={(event) => handleClick(event, product.size)}
                component={Link}
                to={`/product/${product.id}`}
              >
                <ListItemIcon style={{ marginTop: 5, marginRight: 10 }}>
                  <img
                    src={product.img[product.defaultSize]}
                    alt={product.title}
                    style={{
                      height: "70px",
                      borderRadius: "5px",
                      objectFit: "contain"
                    }}
                  />
                </ListItemIcon>

                <ListItemText
                  primary={`${product.title} (${product.defaultSize})`}
                  secondary={`Price: Rs. ${product.price[product.defaultSize]}`}
                  style={{
                    ...textStyle,
                    // color: "#FFD700",
                    fontSize: "15px",
                    wordBreak: "break-all"
                  }}
                  secondaryTypographyProps={{ style: { color: '#D3D3D3' } }}
                />
              </ListItem>
            ))}
          </List>
        </Collapse>

        <Divider style={{ margin: "10px 0" }} />

        <ListItem button onClick={handleToggleCategories}>
          <ListItemText primary="CATEGORIES" style={textStyle} />
          {openCategories ? (
            <ExpandLess style={{ color: textStyle.color }} />
          ) : (
            <ExpandMore style={{ color: textStyle.color }} />
          )}
        </ListItem>
        <Collapse in={openCategories} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {CATEGORY_MENU.filter((_, index) => index !== 0).map((category) => (
              <ListItem
                key={category.id}
                button
                component={Link}
                to={`/products?name=${category.name}&title=${category.title}`}
                style={{
                  paddingLeft: 32,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": { transform: "scale(1.05)" }
                }}
                onClick={toggleDrawer(false)}
              >
                <ListItemText primary={`${category.title}`} style={{
                  ...textStyle,
                  color: "#FFD700",
                  fontSize: "15px",
                  wordBreak: "break-all"
                }} />
              </ListItem>
            ))}
          </List>
        </Collapse>

        <Divider style={{ margin: "10px 0" }} />

        <ListItem button component={Link} to="/about" onClick={() => toggleDrawer(false)}  style={getActiveTabStyle('/about')}>
          <ListItemText primary="ABOUT US" style={textStyle} />
        </ListItem>

        <Divider style={{ margin: "10px 0" }} />

        <ListItem button component={Link} to="#contact" onClick={() => toggleDrawer(false)}>
          <ListItemText primary="CONTACT US" style={textStyle} />
        </ListItem>
      </List>
    </SwipeableDrawer>
  );
};

export default SideBar;
