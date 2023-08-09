/* eslint-disable react-hooks/exhaustive-deps */
import styled from "styled-components";
import React, { useState } from "react";
import { popularProducts } from "../utils/data";
import Product from "./Product";
// import Plane from "../pages/images/plane.png";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import SearchIcon from "@material-ui/icons/Search";
import {
  mobile,
  mobileS,
  mobileSuperSmall,
  ScreenWith670px,
  ScreenWith960px,
} from "../responsive";
import { v4 as uuidv4 } from "uuid";
import { useSearchParams } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { CircularProgress, Divider, InputAdornment, Select, TextField } from "@material-ui/core";
// import { db } from "../firebase";
// import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import productBackground from "../pages/images/productBackground.jpg";
import { FilterListOutlined } from "@material-ui/icons";

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
  font-family: Roboto;
  font-size: 38px;
  padding-left: 4rem;
  font-weight: 400;
  ${mobileS({
    fontSize: "38px",
    // paddingLeft: "30px",
  })}
  ${mobileSuperSmall({
    fontSize: "1.5rem",
    // paddingLeft: "20px",
  })}
`;

const ProductsWrapper = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: 22% auto;

  ${ScreenWith960px({ gridTemplateColumns: "none", gap: "2rem" })}
`;
const ProductMenuList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-weight: 500;
  font-size: 1.3rem;
  margin-top: 2rem;
  border: 1px solid #e9e8e8;
  border-radius: 10px;
  padding: 30px;
  height: fit-content;
  ${ScreenWith960px({
    display: "none",
  })};
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
    // background-color: #0077CC;
    border-color: #0077CC;
    // color: white;
    &:hover {
      box-shadow: none;
      // background-color: #0062cc;
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
  font-family: Roboto;
  font-size: ${(props) => (props?.title ? "22px" : "18px")};
  font-weight: 400;
  color: ${(props) => props.selected && "#0396ff"};
`;
const ProductImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  height: fit-content;
  gap: 1.5rem;
  // overflow-y: scroll;

  ${ScreenWith960px({
    // height: "70rem",
    gridTemplateColumns: "repeat(auto-fill, minmax(310px, 1fr))",
  })}
  ${ScreenWith670px({
    // height: "auto",
    // overflowY: "unset",
    // display: "block",
  })}
`;

const ProductHeader = styled.div`
  padding: 20px 60px;
  border-bottom: 1px solid #d8d8d8;
`;

const ProductHeaderContainer = styled.div`
  max-width: 1300px;
`;

const ProductHeaderContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  ${mobile({
    flexDirection: "column",
    gap: "1rem",
  })}
`;
const ProductHeaderCount = styled.div`
  flex: 1;
  text-align: left;
  padding: 0 1rem;
`;
const ProductHeaderLeft = styled.div`
  flex: 1;
  padding: 0 1rem;
`;
const ProductHeaderLeftContent = styled.div`
  display: flex;
  justify-content: space-around;
  ${mobile({
    flexDirection: "column",
    gap: "1rem",
    alignItems: "center",
  })}
`;
const HeaderLeftSelect = styled.div``;
const ProductImageWrapper = styled.div``;
const HeaderLeftSearch = styled.div``;
const Wrapper = styled.div`
  background-image: url(${productBackground});
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
  // justify-content: center;
  margin-top: 60px;
  padding: 90px 0px;
  // text-align: center;
`;

const CircularContainer = styled.div`
display: block;
position: absolute;
top: 50%;
left: 65%;
${mobile({
  top: "250px",
  left: "48.5%",
})}
`;

const ListMenu = [
  { id: 1, title: "All", name: "" },
  { id: 2, title: "Liquid Detergent", name: "detergent" },
  { id: 3, title: "Hand Wash", name: "handWash" },
  { id: 4, title: "Floor Cleaner", name: "floorCleaner" },
  { id: 6, title: "Dish Washer", name: "dishWasher" },
  { id: 7, title: "Toilet Cleaner", name: "toiletCleaner" },
  { id: 7, title: "Glass Cleaner", name: "colin" },
];

const Products = () => {
  // const [products, setProducts] = useState([]);
  // const productCollectionRef = collection(db, "product");
  const [productImageData, setProductImageData] = useState(popularProducts);
  const [parent] = useAutoAnimate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selected, setSelected] = useState("All");
  const [priceSelect, setPriceSelect] = useState("default");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])
  // const getProducts = useCallback(async () => {
  //   try {
  //     const data = await getDocs(productCollectionRef);
  //     setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, [productCollectionRef]);
  // useEffect(() => {
  //   if (false) getProducts();
  // }, [getProducts]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [serachParam] = useSearchParams();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const filterData = (name = "", title) => {
    if (name) {
      setSearch("");
      const filterData = popularProducts.filter(({ type }) => type === name);
      setProductImageData(filterData);
    } else {
      setProductImageData(popularProducts);
    }
    setSelected(title);
    handleClose();
  };
  useEffect(() => {
    const param = serachParam.get("name");
    const paramTitle = serachParam.get("title");

    if (param) {
      filterData(param);
      setSelected(paramTitle);
    }
  }, [serachParam]);

  const sortCallBack = (first, second) => {
    if (priceSelect === "priceLowToHigh") {
      return first?.price - second?.price;
    } else if (priceSelect === "priceHighToLow") {
      return second?.price - first?.price;
    }
    return;
  };

  useEffect(() => {
    // if (search === "" && !selected) {
    //   setProductImageData(popularProducts);
    //   return;
    // }
    if (search) {
      setSelected("All");
      const filterBySearch = popularProducts.filter((item) =>
        item.title.toLowerCase().includes(search?.toLowerCase() || "")
      );
      setProductImageData(filterBySearch);
    }
  }, [search]);
  const items =  productImageData
  .slice()
  .sort(sortCallBack)
  .map((product) => (
    <ProductImageWrapper key={uuidv4()}>
      <Product {...product} key={uuidv4()} />
    </ProductImageWrapper>
  ));
  return (
    <>
      <Wrapper>
        <Heading>Our Products Range</Heading>
      </Wrapper>
      <ProductHeader>
        <ProductHeaderContainer>
          <ProductHeaderContent>
            <ProductHeaderCount>
              Browse Products ({productImageData?.length})
            </ProductHeaderCount>
            <ProductHeaderLeft>
              <ProductHeaderLeftContent>
                <HeaderLeftSelect>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={priceSelect}
                    onChange={(event) => setPriceSelect(event.target.value)}
                    // inputProps={{ style: { minWidth: "3rem" } }}
                    style={{ minWidth: "8rem" }}
                  >
                    <MenuItem value={"default"}>Default</MenuItem>
                    <MenuItem value={"priceHighToLow"}>
                      Price - High to Low
                    </MenuItem>
                    <MenuItem value={"priceLowToHigh"}>
                      Price - Low to High
                    </MenuItem>
                  </Select>
                </HeaderLeftSelect>
                <HeaderLeftSearch>
                  <TextField
                    placeholder="Search"
                    variant="outlined"
                    value={search}
                    InputProps={{
                      style: { height: "2rem" },
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </HeaderLeftSearch>
              </ProductHeaderLeftContent>
            </ProductHeaderLeft>
          </ProductHeaderContent>
        </ProductHeaderContainer>
      </ProductHeader>
      <Container>
        <ProductsWrapper>
          <ProductMenuList ref={parent}>
            <>
              <ProductMenu title="category">
                Category <Divider style={{ marginTop: "1rem" }} />
              </ProductMenu>
            </>
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
          <ProductMenuListMobile>
            <CustomButton
              variant="outlined"
              color="inherit"
              startIcon={<FilterListOutlined />}
              onClick={handleClick}
            >
              {selected}
            </CustomButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              color="inherit"
              open={Boolean(anchorEl)}
              onClose={handleClose}
              variant={"selectedMenu"}
            >
              {ListMenu.map(({ id, title, name }) => (
                <>
                  {id !== 1 && <Divider />}
                  <MenuItem
                    key={id}
                    // style={{
                    //   fontFamily: "Roboto",
                    //   fontSize: "28px",
                    //   fontWeight: "400",
                    // }}
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
           {loading ?  <CircularContainer
                   
                    >
                      <CircularProgress />
                    </CircularContainer> : items }
          </ProductImageContainer>
        </ProductsWrapper>
      </Container>
    </>
  );
};

export default Products;
