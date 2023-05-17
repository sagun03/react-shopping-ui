import styled from "styled-components";
import { mobile, ScreenWith960px } from "../responsive";
import { useSelector } from "react-redux";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import { Button } from "@material-ui/core";
import { useState } from "react";
import LocationDialogBox from "./LocationDialogBox";

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

export const CustomButton = styled(Button)`
  width: 100%;
  background-color: #25d366 !important;
  color: white !important;
`;

const OrderSummary = () => {
  const [open, setOpen] = useState(false);

  const cart = useSelector((state) => state.cart);
  return (
    <Summary>
      <SummaryTitle>ORDER SUMMARY</SummaryTitle>
      <SummaryItem>
        <SummaryItemText>Subtotal</SummaryItemText>
        <SummaryItemPrice>Rs. {cart?.total}</SummaryItemPrice>
      </SummaryItem>
      {/* <SummaryItem>
        <SummaryItemText>Estimated Shipping</SummaryItemText>
        <SummaryItemPrice>Rs. 10</SummaryItemPrice>
      </SummaryItem> */}
      {/* {cart?.total > 250 && (
        <SummaryItem>
          <SummaryItemText>Shipping Discount</SummaryItemText>
          <SummaryItemPrice>Rs. -10</SummaryItemPrice>
        </SummaryItem>
      )} */}
      {cart?.total > 200 && (
        <SummaryItem>
          <SummaryItemText>Extra Discount 20%</SummaryItemText>
          <SummaryItemPrice>
            Rs. {((20 / 100) * cart?.total + 0.0).toFixed(2)}
          </SummaryItemPrice>
        </SummaryItem>
      )}
      <SummaryItem type="total">
        <SummaryItemText>Total</SummaryItemText>
        <SummaryItemPrice>
          Rs.{" "}
          {cart?.total < 200
            ? cart?.total
            : cart?.total - ((20 / 100) * cart?.total + 0.0).toFixed(2)}
        </SummaryItemPrice>
      </SummaryItem>
      {/* <a
        href={`https://wa.me/919560363492?text=${encodeURIComponent(
          `Hi I want to order these items from your website, these are the following: ${cart?.product?.map(
            (item, index) =>
              `${index + 1}: Name: ${item?.title} Quantity: ${
                item?.quantity
              } Size: ${item?.size}. Your Final Total Amount is ${
                cart?.total < 200
                  ? cart?.total
                  : cart?.total - ((20 / 100) * cart?.total + 0.0).toFixed(2)
              } ${cart?.total < 200 && `, with discount of 20%`} `
          )}`
        )}`}
      > */}
      <CustomButton
        variant="contained"
        startIcon={<WhatsAppIcon />}
        onClick={() => setOpen(true)}
      >
        Send Order On Whatsapp
      </CustomButton>
      {/* </a> */}
      <LocationDialogBox open={open} setOpen={setOpen} />
    </Summary>
  );
};

export default OrderSummary;
