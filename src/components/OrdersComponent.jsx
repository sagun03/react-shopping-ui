import { collection, getDocs } from "firebase/firestore";
import React, { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import styled from "styled-components";
import { db } from "../firebase";
import { useUserAuth } from "../context/UserAuthContext";
import { CircularProgress } from "@material-ui/core";
import Review from "./Review";
import { mobile } from "../responsive";

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: row;
  height: fit-content;
  flex-wrap: wrap;
  margin: 30px 40px 60px;
  padding: 20px;
  gap: 2rem;
  background: #bde0ff;
  // width: 90%;
  // display: grid;
  // grid-template-columns: 25% auto;
  ${mobile({
    flexDirection: "column",
    margin: "30px 5px 10px",
  })}
`;

const OrderWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 350px;
  margin-top: 20px;
  padding: 20px;
  background: #e2eaff;
  ${mobile({
    height: "450px",
  })}
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  margin-top: 100px;
`;

const OrdersComponent = () => {
  const ordersCollectionRef = collection(db, "order");
  const { user } = useUserAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [userOrders, setUserOrders] = useState(undefined);
  const getOrders = useCallback(async () => {
    try {
      const data = await getDocs(ordersCollectionRef);
      const orders = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      const userOrder = orders?.filter(
        (order) => order.userId === user[0]?.uid
      );
      setLoading(false);
      setUserOrders(userOrder);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  }, [ordersCollectionRef, user]);
  useEffect(() => {
    if (!Boolean(userOrders)) {
      getOrders();
    }
  });
  return (
    <>
      <Title>Your Orders</Title>
      {!loading &&
        (userOrders?.length > 0 ? (
          <>
            <Wrapper>
              {userOrders?.map((order) => (
                <>
                  <OrderWrapper>
                    <Review order={order} products={order?.products} />
                  </OrderWrapper>
                </>
              ))}{" "}
            </Wrapper>
          </>
        ) : (
          <Wrapper>No orders yet... but I can smell them coming!</Wrapper>
        ))}
      {loading && (
        <Wrapper>
          <CircularProgress />
        </Wrapper>
      )}
    </>
  );
};

export default OrdersComponent;
