import { collection, getDocs } from "firebase/firestore";
import React, { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import styled from "styled-components";
import { db } from "../firebase";
import { useUserAuth } from "../context/UserAuthContext";
import { CircularProgress } from "@material-ui/core";

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 500px;
  margin: 130px 40px 60px;
  padding: 20px;
  background: aliceblue;
`;

const OrdersComponent = () => {
  const ordersCollectionRef = collection(db, "order");
  const { user } = useUserAuth();
  const [loading, setLoading] = useState(true);

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
      {!loading &&
        (userOrders?.length > 0 ? (
          <Wrapper>
            your orders:{" "}
            {userOrders?.map((order) => (
              <>
                Total: {order?.total} \n Status: {order?.status} \n Address:{" "}
                {order?.address} \n Products:{" "}
                {order?.products.map((product, index) => (
                  <>
                    {" "}
                    {index + 1}: Name: {product?.title}
                  </>
                ))}
              </>
            ))}{" "}
          </Wrapper>
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
