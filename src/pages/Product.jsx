import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import NewsLetter from "../components/NewsLetter";
import { mobile, tablet, ScreenWith670px } from "../responsive";
import { useEffect } from "react";
import { addProducts } from "../redux/cartRedux";
import { useState } from "react";
import { useLocation } from "react-router";
import { getProductById } from "../utils/helper";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Alert from "../components/Alert";
import { Link } from "react-router-dom";
import { IconButton, CircularProgress } from "@material-ui/core";
import BottomNav from "../components/BottomNav";
import { Helmet } from "react-helmet-async";

const Container = styled.div`
  margin-top: 75px;
  ${mobile({ marginTop: "85px" })}
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
  ${tablet({ padding: "10px", flexDirection: "column" })}

  min-height: 60vh;
`;

const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
  height: 55vh;
  object-fit: contain;
  ${mobile({ height: "35vh", width: "60%" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${ScreenWith670px({ padding: "0px 10px 0px 50px" })}
  ${mobile({ padding: "20px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
  text-decoration: line-through;
  color: #615f5f;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  ${mobile({ width: "50%", flexDirection: "column" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;
const CircularContainer = styled.div`
  display: block;
  position: absolute;
  top: 40%;
  left: 50%;
  ${mobile({
    top: "40%",
    left: "46.5%",
  })}
`;

const Product = () => {
  const [product, setProduct] = useState({});
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");
  const dispatch = useDispatch();
  const [openAlert, setOpenAlert] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  // useEffect(() => {
  //   setPrice(getPrice(size));
  // }, [size]);

  useEffect(() => {
    if (id) {
      setProduct(getProductById(+id));
    }
  }, [id]);

  useEffect(() => {
    setSize(product?.defaultSize);
  }, [product]);

  const handleClick = () => {
    console.log("product, ", product);
    dispatch(
      addProducts({
        ...product,
        quantity,
        img: product?.img[size],
        size,
        price: product?.price[size] - product?.price[size] * 0.05,
        productId: uuidv4(),
        originalPrice: product?.price[size],
      })
    );
    setOpenAlert(true);
  };

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };
  return (
    <>
      <Helmet>
        <title>Product Detail</title>
        <meta name="description" content="Details of the Selected Product." />
        <link rel="canonical" href="/product/:id" />
      </Helmet>

      <Container>
        <Announcement />
        <NavBar />
        <Wrapper>
          {loading ? (
            <CircularContainer>
              <CircularProgress />
            </CircularContainer>
          ) : (
            <>
              {" "}
              <ImgContainer>
                {size && <Image src={product?.img[size]} />}
              </ImgContainer>
              <InfoContainer>
                <Title>{product?.title}</Title>
                {product?.productDescription?.map((desc) => (
                  <Desc>{desc}</Desc>
                ))}
                {size && (
                  <>
                    <Price>Rs. {product?.price[size]} </Price>{" "}
                    <span
                      style={{
                        fontWeight: "100",
                        fontSize: "40px",
                        marginLeft: "10px",
                      }}
                    >
                      Rs.{" "}
                      {(
                        product?.price[size] -
                        product?.price[size] * 0.05 +
                        0.0
                      ).toFixed(2)}
                    </span>
                  </>
                )}
                <FilterContainer>
                  <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize
                      value={size}
                      onChange={(e) => setSize(e.target.value)}
                    >
                      {product?.size &&
                        product?.size?.map((s) => (
                          <FilterSizeOption>{s}</FilterSizeOption>
                        ))}
                    </FilterSize>
                  </Filter>
                </FilterContainer>
                <AddContainer>
                  <AmountContainer>
                    <IconButton disabled={quantity === 1}>
                      <Remove onClick={() => handleQuantity("dec")} />
                    </IconButton>
                    <Amount>{quantity}</Amount>
                    <IconButton>
                      <Add onClick={() => handleQuantity("add")} />
                    </IconButton>
                  </AmountContainer>
                  <Button onClick={() => handleClick()}>ADD TO CART</Button>
                  <Link to="/cart">
                    <Button>GO TO CART</Button>
                  </Link>
                </AddContainer>
              </InfoContainer>
            </>
          )}
        </Wrapper>
        <NewsLetter />
        <Footer />
        {openAlert && (
          <Alert
            open={openAlert}
            type={"success"}
            message={"Your Product has been added into Cart"}
            setOpen={setOpenAlert}
          />
        )}
        <BottomNav />
      </Container>
    </>
  );
};

export default Product;
