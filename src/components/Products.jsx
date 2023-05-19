import styled from "styled-components";
import React, { useState } from "react";
import { popularProducts } from "../utils/data";
import Product from "./Product";
// import Plane from "../pages/images/plane.png";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import {
  mobileS,
  mobileSuperSmall,
  ScreenWith670px,
  ScreenWith960px,
} from "../responsive";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import { Divider } from "@material-ui/core";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { useCallback } from "react";
import productBackground from "../pages/images/productBackground.jpg";

const Container = styled.div`
  display: flex;
  margin: 3rem auto;
  padding: 0rem 0.5rem;
  position: relative;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;
// const Image = styled.img`
//   position: relative;
//   left: 50%;
// `;
const Heading = styled.h1`
  padding-left: 120px;
  ${mobileS({
    fontSize: "1.7rem",
    paddingLeft: "30px",
  })}
  ${mobileSuperSmall({
    fontSize: "1.5rem",
    paddingLeft: "20px",
  })}
`;

const ProductsWrapper = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: 25% auto;

  ${ScreenWith960px({ gridTemplateColumns: "none", gap: "2rem" })}
`;
const ProductMenuList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-weight: 500;
  font-size: 1.3rem;

  ${ScreenWith960px({
    display: "none",
  })}
`;
const ProductMenuListMobile = styled.div`
  display: none;

  ${ScreenWith960px({
    display: "flex",
    justifyContent: "center",
  })}
`;
const CustomButton = styled(Button)`
  &.MuiButton-root {
    background-color: #0396ff;
    border-color: #0396ff;
    color: white;
    &:hover {
      box-shadow: none;
      background-color: #0062cc;
      border-color: #0396ff;
    }
    &:focus {
      box-shadow: 0 0 0 0.2rem rgba(0,123,255,.5),
    },
  }
`;
const ProductMenu = styled.li`
  &:hover {
    color: #0396ff;
    cursor: pointer;
  }
  color: ${(props) => props.selected && "#0396ff"};
`;
const ProductImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  height: 70rem;
  overflow-y: scroll;

  ${ScreenWith960px({
    height: "70rem",
    gridTemplateColumns: "repeat(auto-fill, minmax(310px, 1fr))",
  })}
  ${ScreenWith670px({
    height: "auto",
    overflowY: "unset",
    display: "block",
  })}
`;
const ProductImageWrapper = styled.div``;
const Wrapper = styled.div`
  background-image: url(${productBackground});
  padding: 120px 0px;
`;

const ListMenu = [
  { id: 1, title: "All", name: "" },
  { id: 2, title: "Liquid Detergent", name: "detergent" },
  { id: 3, title: "Hand Wash", name: "handWash" },
  { id: 4, title: "Floor Cleaner", name: "floorCleaner" },
  { id: 6, title: "Dish Washer", name: "dishWasher" },
  { id: 7, title: "Toilet Cleaner", name: "toiletCleaner" },
  { id: 8, title: "Bathing Soap", name: "bathingSoap" },
];

const Products = () => {
  const [products, setProducts] = useState([]);
  const productCollectionRef = collection(db, "product");
  const [productImageData, setProductImageData] = useState(popularProducts);
  const [parent] = useAutoAnimate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selected, setSelected] = useState("All");

  const getProducts = useCallback(async () => {
    try {
      const data = await getDocs(productCollectionRef);
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } catch (err) {
      console.log(err);
    }
  }, [productCollectionRef]);
  useEffect(() => {
    if (false) getProducts();
  }, [getProducts]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  console.log("products", products);
  const filterData = (name = "", title) => {
    if (name) {
      const filterData = popularProducts.filter(({ type }) => type === name);
      setProductImageData(filterData);
    } else {
      setProductImageData(popularProducts);
    }
    setSelected(title);
    handleClose();
  };

  return (
    <>
      {/* <Image src={Plane} /> */}

      <Wrapper>
        <Heading>Our Products Range</Heading>
      </Wrapper>
      <Container>
        <ProductsWrapper>
          <ProductMenuList ref={parent}>
            {ListMenu.map(({ id, title, name }) => (
              <ProductMenu
                selected={selected === title}
                key={id}
                onClick={() => filterData(name, title)}
              >
                {title}
              </ProductMenu>
            ))}
          </ProductMenuList>
          <ProductMenuListMobile ref={parent}>
            <CustomButton
              variant="contained"
              startIcon={<FormatListBulletedIcon />}
              onClick={handleClick}
            >
              {selected}
            </CustomButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              ref={parent}
              variant={"selectedMenu"}
            >
              {ListMenu.map(({ id, title, name }) => (
                <>
                  {id !== 1 && <Divider />}
                  <MenuItem
                    key={id}
                    selected={selected === title}
                    onClick={() => filterData(name, title)}
                  >
                    {title}
                  </MenuItem>
                </>
              ))}
            </Menu>
          </ProductMenuListMobile>

          <ProductImageContainer ref={parent}>
            {productImageData.map((product) => (
              <ProductImageWrapper key={product.id}>
                <Product {...product} key={product.id} />
              </ProductImageWrapper>
            ))}
          </ProductImageContainer>
        </ProductsWrapper>
      </Container>
    </>
  );
};

export default Products;
