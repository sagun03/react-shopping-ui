import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { mobile, ScreenWith670px, ScreenWith960px } from "../responsive";
import { useSelector } from "react-redux";
import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { addProduct, removeProducts } from "../redux/cartRedux";
import { v4 as uuidv4 } from "uuid";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  margin-bottom: 50px;
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
  ${mobile({ marginBottom: "20px", fontSize: "20px" })}
  ${ScreenWith960px({ fontSize: "26px" })}
  ${ScreenWith670px({ fontSize: "24px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: fit-content;
  ${mobile({
    marginTop: "2rem",
  })}
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
  ${ScreenWith960px({
    fontSize: "1.5rem",
  })}
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};

  ${ScreenWith960px({
    fontSize: (props) => (props.type === "total" ? "1.25rem" : "1rem"),
  })}
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

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
    <Container>
      <Announcement />
      <NavBar />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
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
                      {/* <ProductId>
                        <b>Price:</b> {item?.price}
                      </ProductId> */}
                      {/* <ProductColor color="black" /> */}
                      <ProductSize>
                        <b>Size:</b> {item?.size}
                      </ProductSize>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <Remove
                        onClick={() => handleClick("dec", item, item.productId)}
                      />
                      <ProductAmount>{item?.quantity}</ProductAmount>
                      <Add
                        onClick={() => handleClick("add", item, item.productId)}
                      />
                    </ProductAmountContainer>
                    <ProductPrice>
                      Rs. {item?.price * item?.quantity}
                    </ProductPrice>
                  </PriceDetail>
                </Product>
                <Hr />
              </Fragment>
            ))}
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>Rs. {cart?.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>Rs. 40</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>Rs. -40</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>New User Discount</SummaryItemText>
              <SummaryItemPrice>Rs. -40</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>Rs. {cart?.total - 40}</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
