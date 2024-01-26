import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { mobile, ScreenWith670px, ScreenWith960px } from "../responsive";
import { useSelector } from "react-redux";
import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addProduct, removeProducts } from "../redux/cartRedux";
import { v4 as uuidv4 } from "uuid";
import addToCart from "./images/addToCart.png";
import { Link } from "react-router-dom";
import OrderSummary from "../components/OrderSummary";
import { IconButton } from "@material-ui/core";
import BottomNav from "../components/BottomNav";
import { Helmet } from "react-helmet-async";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 2.5rem;
  margin-bottom: 5rem;
  margin-top: 5rem;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background: whitesmoke;
  margin: 20px;
  ${mobile({ flexDirection: "column", gap: "2rem" })}
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${ScreenWith670px({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  height: 200px;
  ${mobile({ flexDirection: "column", height: "unset" })};
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  ${mobile({
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  })}
`;

const Image = styled.img`
  width: 180px;
  object-fit: contain;

  ${ScreenWith960px({ width: "160px" })}
  ${ScreenWith670px({ width: "120px" })}
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

// const ProductId = styled.span``;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  ${mobile({ margin: "5px 15px", fontSize: "16px" })}
  ${ScreenWith960px({ fontSize: "20px" })}
  ${ScreenWith670px({ fontSize: "18px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  font-weight: 100;
  text-decoration: line-through;
  color: #615f5f;
  ${mobile({ marginBottom: "20px", fontSize: "20px" })}
  ${ScreenWith960px({ fontSize: "26px" })}
  ${ScreenWith670px({ fontSize: "24px" })}
`;
const ProductPrice2 = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px", fontSize: "20px" })}
  ${ScreenWith960px({ fontSize: "26px" })}
  ${ScreenWith670px({ fontSize: "24px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const CartImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const CartImage = styled.img`
  max-width: 100%;
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClick = (type, item, id = "") => {
    if (type === "dec") {
      dispatch(removeProducts({ id }));
    } else {
      dispatch(
        addProduct({
          productId: id,
        })
      );
    }
  };
  return (
    <>
      <Helmet>
        <title>Shopping Cart</title>
        <meta name="description" content="Add Products to the Shopping Cart." />
        <link rel="canonical" href="/cart" />
      </Helmet>
      <Container>
        <Announcement />
        <NavBar />
        <Wrapper>
          {cart?.products.length === 0 ? (
            <Link to="/">
              <Title>Click Here to Add Product</Title>
            </Link>
          ) : (
            <Title>YOUR BAG</Title>
          )}
          {cart?.products.length === 0 ? (
            <CartImageContainer>
              <CartImage src={addToCart} alt="add to cart" />
            </CartImageContainer>
          ) : (
            <>
              {" "}
              <Top>
                <Link to="/products">
                  {" "}
                  <TopButton>CONTINUE SHOPPING</TopButton>
                </Link>
                <TopTexts>
                  <TopText>Shopping Bag({cart?.quantity})</TopText>
                </TopTexts>
                {/* <Link to="/checkout">
                <TopButton type="filled">CHECKOUT NOW</TopButton>
              </Link> */}
              </Top>
              <Bottom>
                <Info>
                  {cart.products?.map((item) => (
                    <Fragment key={uuidv4()}>
                      <Product>
                        <ProductDetail>
                          <Image src={item?.img} />
                          <Details>
                            <ProductName>
                              <b>Product:</b> {item?.title}
                            </ProductName>
                            <ProductSize>
                              <b>Size:</b> {item?.size}
                            </ProductSize>
                          </Details>
                        </ProductDetail>
                        <PriceDetail>
                          <ProductAmountContainer>
                            <IconButton>
                              <Remove
                                onClick={() =>
                                  handleClick("dec", item, item.productId)
                                }
                              />
                            </IconButton>
                            <ProductAmount>{item?.quantity}</ProductAmount>
                            <IconButton>
                              <Add
                                onClick={() =>
                                  handleClick("add", item, item.productId)
                                }
                              />
                            </IconButton>
                          </ProductAmountContainer>
                          <ProductPrice>
                            Rs. {item?.originalPrice * item?.quantity}
                          </ProductPrice>
                          <ProductPrice2>
                            Rs.{" "}
                            {(item?.price * item?.quantity + 0.0).toFixed(2)}
                          </ProductPrice2>
                        </PriceDetail>
                      </Product>
                      <Hr />
                    </Fragment>
                  ))}
                </Info>
                <OrderSummary />
              </Bottom>{" "}
            </>
          )}
        </Wrapper>
        <Footer />
        <BottomNav />
      </Container>
    </>
  );
};

export default Cart;
